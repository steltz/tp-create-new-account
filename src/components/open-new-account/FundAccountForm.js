import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { FormInputText } from "./form-inputs/FormInputText";
import Grid from "@mui/material/Grid";
import mockTreasuryPrimeApi from "../../utils/MockTreasuryPrimeApi";
import LoadingOverlay from "../../utils/LoadingOverlay";
import Context from "../../store/context";

const defaultValues = {
  name_on_account: "",
  amount: "",
  account_number: "",
  routing_number: "",
  account_type: "",
};

export default function FundAccountForm({ handleNext }) {
  const { globalDispatch } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({ defaultValues });
  const { handleSubmit, control } = methods;
  const onNextStep = async (deposit) => {
    setIsLoading(true);
    const payload = await mockTreasuryPrimeApi.depositPOST(deposit);
    globalDispatch({ type: "SET_DEPOSIT", payload });
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
        <Paper sx={{ p: 5, width: "500px" }} elevation={3}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              letterSpacing: "1px",
              color: "#1976d2",
              fontWeight: "bold",
              mb: 2
            }}
          >
            Funding Account
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <FormInputText
                name="name_on_account"
                control={control}
                label="Account Owner's Name"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <FormInputText
                name="amount"
                control={control}
                label="Deposit Amount"
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="account_type"
                control={control}
                label="Account Type"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormInputText
                name="account_number"
                control={control}
                label="Account Number"
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="routing_number"
                control={control}
                label="Routing Number"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" onClick={handleSubmit(onNextStep)}>
              Review New Account Details
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
