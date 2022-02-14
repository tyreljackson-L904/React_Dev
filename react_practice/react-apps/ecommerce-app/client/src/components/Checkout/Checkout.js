import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  stepClasses,
} from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import "./styles.css";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <div className="checkout-container">
      <div className="toolbar">
        <main className="layout">
          <Paper className="paper">
            <Typography
              className="typography__checkout-btn"
              variant="h4"
              align="center"
            >
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className="stepper">
              {steps.map((step) => {
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>;
              })}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
