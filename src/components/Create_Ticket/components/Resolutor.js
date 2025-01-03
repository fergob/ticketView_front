import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

//api hook
import { useGetUsuariosQuery } from "api/index";
//store
import { useTicketStore } from "zustand/index.ts";
//proptypes
import PropTypes from "prop-types";
//json
import estados from "catalogs/estatus.json";

{
  /**const Resolutor = ({ disable_input, data }) => {
  const ticket = useTicketStore();
  console.log(data);*/
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const Resolutor = ({ data }) => {
  //const { data, isLoading } = useGetUsuariosQuery();
  const ticketState = useTicketStore();
  const [idResolutorSeleccionado, setIdResolutorSeleccionado] = React.useState("");
  const [value, setValue] = React.useState(0);
  const options = data.areasResolutores.flatMap((areaObj) =>
    areaObj.resolutores.map((resolutor) => ({
      ...resolutor,
      area: areaObj.area.toUpperCase(), // Incluye el área en mayúsculas para agrupar.
    }))
  );

  const resolutorSeleccionado = (e) => {
    e.preventDefault();
    setIdResolutorSeleccionado(e.target.value);
  };

  const reasignarTicket = () => {
    console.log(idResolutorSeleccionado);
  };

  const handleReset = () => {
    setValue(0);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Grid xs={12}>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="primary"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={0}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Moderador
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Autocomplete
                  id="grouped-demo"
                  options={options.sort((a, b) => -b.area.localeCompare(a.area))}
                  groupBy={(option) => option.area}
                  getOptionLabel={(option) => option.Nombre}
                  sx={{ width: 500, mt: 1 }}
                  renderInput={(params) => <TextField {...params} label="Asignar a:" />}
                  onChange={(event, value) => {
                    setValue(value); // Guarda el valor seleccionado en el estado.
                    ticketState.setTicketFields("Asignado_a", value);
                  }}
                />
              </Box>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Resolutor.propTypes = {
  data: PropTypes.array,
};

export default React.memo(Resolutor);
