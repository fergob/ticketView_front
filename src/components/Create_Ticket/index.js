import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//mui library component
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
//api hook
//import { usePostDocumentoMutation } from "api/api.slice";
//card components
import Ticket from "./components/Ticket";
import Resolutor from "./components/Resolutor";
import Cliente from "./components/Cliente";

//store
import { useDialogStore, useTicketStore } from "zustand/index.ts";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const steps = ["Información del Ticket", "Resolutor", "Cliente"];

const Edit = () => {
  const isWindowEditOpen = useDialogStore((state) => state.isWindowEditOpen);
  const closeWindowEdit = useDialogStore((state) => state.closeWindowEdit);
  const ticketState = useTicketStore();
  //const [createDocumento] = usePostDocumentoMutation();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Ticket disable_input={true} />;
      case 1:
        return <Resolutor disable_input={true} />;
      case 2:
        return <Cliente disable_input={true} />;
      default:
        return "Unknown step";
    }
  }

  return (
    <React.Fragment>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox pt={3}>
                  {/* <DataTable
                  table={{ columns, rows }}
                  canSearch
                  isSorted={true}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                /> */}
                  <Box sx={{ width: "100%" }}>
                    <Stepper activeStep={activeStep}>
                      {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        if (isStepSkipped(index)) {
                          stepProps.completed = false;
                        }
                        return (
                          <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Atras
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />

                      {activeStep !== steps.length && (
                        <Button
                          onClick={handleNext}
                          disabled={activeStep === steps.length - 1 ? true : false}
                        >
                          Siguiente
                        </Button>
                      )}
                    </Box>
                    {activeStep === steps.length ? (
                      <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>No hay más por ver</Typography>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
                    )}
                  </Box>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    </React.Fragment>
  );
};

export default React.memo(Edit);
