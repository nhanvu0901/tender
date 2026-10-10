import React, { useState } from 'react';
import { INITIAL_COMPANY_PROFILE } from './data/companyProfile';
import { DUMMY_TENDERS } from './data/tenders';
import { TenderOpportunity, CompanyProfile } from './types/procurement';
import { Header } from './components/Header';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { SourcesModal } from './components/SourcesModal';
import { Step1Profile } from './components/Step1Profile';
import { Step2Feed } from './components/Step2Feed';
import { Step3Analysis } from './components/Step3Analysis';
import { Step4Compliance } from './components/Step4Compliance';
import { Step5Proposal } from './components/Step5Proposal';

export function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [profile, setProfile] = useState<CompanyProfile>(INITIAL_COMPANY_PROFILE);
  const [selectedTender, setSelectedTender] = useState<TenderOpportunity>(DUMMY_TENDERS[0]);
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState<boolean>(false);

  const handleSelectTender = (tender: TenderOpportunity) => {
    setSelectedTender(tender);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStepJump = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetDemo = () => {
    setProfile(INITIAL_COMPANY_PROFILE);
    setSelectedTender(DUMMY_TENDERS[0]);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Persistent Disclaimer */}
      <DisclaimerBanner
        position="top"
        onOpenSources={() => setIsSourcesModalOpen(true)}
      />

      {/* Main App Header with Stepper */}
      <Header
        currentStep={currentStep}
        onSelectStep={handleStepJump}
        onReset={handleResetDemo}
        onOpenSources={() => setIsSourcesModalOpen(true)}
        hasSelectedTender={Boolean(selectedTender)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {currentStep === 1 && (
          <Step1Profile
            profile={profile}
            onUpdateProfile={setProfile}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 2 && (
          <Step2Feed
            tenders={DUMMY_TENDERS}
            onSelectTender={handleSelectTender}
            selectedTenderId={selectedTender?.id}
          />
        )}

        {currentStep === 3 && selectedTender && (
          <Step3Analysis
            tender={selectedTender}
            company={profile}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 4 && selectedTender && (
          <Step4Compliance
            tender={selectedTender}
            company={profile}
            onBack={handlePrevStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 5 && selectedTender && (
          <Step5Proposal
            tender={selectedTender}
            company={profile}
            onBack={handlePrevStep}
            onRestartJourney={() => handleStepJump(2)}
            onOpenSources={() => setIsSourcesModalOpen(true)}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <DisclaimerBanner
        position="footer"
        onOpenSources={() => setIsSourcesModalOpen(true)}
      />

      {/* Verified Sources Modal */}
      <SourcesModal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
      />
    </div>
  );
}

export default App;
