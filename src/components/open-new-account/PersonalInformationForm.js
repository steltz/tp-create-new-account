import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { FormInputText } from "./form-inputs/FormInputText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import mockTreasuryPrimeApi from "../../utils/MockTreasuryPrimeApi";
import LoadingOverlay from "../../utils/LoadingOverlay";
import Context from "../../store/context";

const defaultValues = {
  first_name: "",
  last_name: "",
  email_address: "",
  phone_number: "",
  date_of_birth: "",
  citizenship: "",
  street_line_1: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
};

export default function ContactInfoForm({ handleNext }) {
  const { globalDispatch } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({ defaultValues });
  const { handleSubmit, control } = methods;
  const onNextStep = async (person) => {
    setIsLoading(true);
    const payload = await mockTreasuryPrimeApi.personApplicationPOST(person);
    globalDispatch({ type: "SET_PERSON", payload });
    setIsLoading(false);
    handleNext();
  };

  return (
    <>
      <LoadingOverlay loading={isLoading} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Paper
          sx={{
            width: "500px",
            p: 5,
          }}
          elevation={3}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  letterSpacing: "1px",
                  color: "#1976d2",
                  fontWeight: "bold",
                }}
              >
                Personal Information
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="first_name"
                control={control}
                label="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="last_name"
                control={control}
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormInputText
                name="email_address"
                control={control}
                label="Email"
              />
            </Grid>
            <Grid item xs={4}>
              <FormInputText
                name="phone_number"
                control={control}
                label="Phone"
              />
            </Grid>
            <Grid item xs={4}>
              <FormInputText
                name="date_of_birth"
                control={control}
                label="Date of Birth"
              />
            </Grid>
            <Grid item xs={4}>
              <FormInputText
                name="citizenship"
                control={control}
                label="Citizenship"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  letterSpacing: "1px",
                  color: "#1976d2",
                  fontWeight: "bold",
                }}
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormInputText
                name="street_line_1"
                control={control}
                label="Street"
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputText name="city" control={control} label="City" />
            </Grid>
            <Grid item xs={6}>
              <FormInputText name="state" control={control} label="State" />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="postal_code"
                control={control}
                label="Postal Code"
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputText name="country" control={control} label="Country" />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" onClick={handleSubmit(onNextStep)}>
              Proceed to Account Funding
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
