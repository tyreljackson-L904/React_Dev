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
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <>
      <div className={classes.toolbar}>
        <main className={classes.layout}>
          <Paper className={classes.toolbar}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
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
    </>
  );
};

export default Checkout;
