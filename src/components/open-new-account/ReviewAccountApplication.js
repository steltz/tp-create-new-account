import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import mockTreasuryPrimeApi from "../../utils/MockTreasuryPrimeApi";
import LoadingOverlay from "../../utils/LoadingOverlay";
import Context from "../../store/context";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ContactInfoForm() {
  const { globalState } = useContext(Context);
  const [accountSuccessfullyCreated, setAccountSuccessfullyCreated] =
    useState(false);
  const { person, deposit } = globalState;
  const [isLoading, setIsLoading] = useState(false);
  const openAccount = async () => {
    setIsLoading(true);
    const { id: deposit_id } = deposit;
    const { id: person_application_id } = person;
    await mockTreasuryPrimeApi.accountApplicationPOST({
      deposit_id,
      person_application_id,
      product: "personal_checking",
    });
    setAccountSuccessfullyCreated(true);
    setIsLoading(false);
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
        {accountSuccessfullyCreated && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: "1.5rem", fontFamily: '"Roboto","Helvetica","Arial",sans-serif;', color: "#1976d2" }}>Congratulations! Your account has been successfully created</div>
            <CheckCircleOutlineIcon color="success" sx={{ ml: 1, fontSize: 33 }} />
          </Box>
        )}
        {!accountSuccessfullyCreated && (
          <Paper sx={{ p: 5, width: "500px" }} elevation={3}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        letterSpacing: "1px",
                        color: "#1976d2",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      Name
                    </Typography>
                    <Typography variant="body1">
                      {`${person.first_name} ${person.last_name}`}
                    </Typography>
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
                        mb: 2,
                      }}
                    >
                      Mailing Address
                    </Typography>
                    <Typography variant="body1">
                      {`${person.physical_address.street_line_1}`}
                    </Typography>
                    <Typography variant="body1">
                      {`${person.physical_address.city}, ${person.physical_address.state} ${person.physical_address.postal_code}`}
                    </Typography>
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
                        mb: 2,
                      }}
                    >
                      Birthday
                    </Typography>
                    <Typography variant="body1">
                      {`${person.date_of_birth}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{
                        letterSpacing: "1px",
                        color: "#1976d2",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      Citizenship
                    </Typography>
                    <Typography variant="body1">
                      {`${person.citizenship}`}
                    </Typography>
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
                        mb: 2,
                      }}
                    >
                      Initial Deposit
                    </Typography>
                    <Typography variant="body1">
                      {`$${deposit.amount} from account ending in ${deposit.ach.last4}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button variant="contained" onClick={openAccount}>
                Open Account
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
}
