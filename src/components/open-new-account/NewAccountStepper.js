import * as React from "react";
// MUI Components
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// Custom Components
import PersonalInformationForm from "../../components/open-new-account/PersonalInformationForm";
import FundAccountForm from "../../components/open-new-account/FundAccountForm";
import ReviewAccountApplication from "../../components/open-new-account/ReviewAccountApplication";

const steps = [
  "Personal Information",
  "Fund Your Account",
  "Submit Application",
];

export default function NewAccountStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && <PersonalInformationForm handleNext={handleNext} />}
      {activeStep === 1 && <FundAccountForm handleNext={handleNext} />}
      {activeStep === 2 && <ReviewAccountApplication handleNext={handleNext} />}
    </Box>
  );
}
