import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
//store
import { useTicketStore } from "zustand/index.ts";
//proptypes
import PropTypes from "prop-types";
//json
import estados from "catalogs/estatus.json";

const Ticket = ({ disable_input }) => {
  const ticket = useTicketStore();
  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Grid xs={6} mb={12}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="primary"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Estado Ticket
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Creado por:"
                      value={ticket.Creado_por}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2} xs={4}>
                    <MDInput
                      type="text"
                      label="ID:"
                      value={ticket.Id}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Prioridad:"
                      value={ticket.Prioridad.Descripcion}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Incidencia Grave:"
                      value={ticket.Incidencia_grave}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ticket.Estado._id}
                        label="Estatus"
                        //onChange={(e) => setTesis("tesis", e.target.value)}
                      >
                        {estados.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Estado}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    {/* <MDInput
                      type="text"
                      label="Estatus:"
                      value={ticket.Estado.Estado}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    /> */}
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Tipo Incidencia:"
                      value={ticket.Tipo_incidencia}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Fecha de Creación:"
                      value={ticket.Fecha_hora_creacion}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Fecha límite de resolución:"
                      value={ticket.Fecha_limite_resolucion_SLA}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
      <Grid xs={6} mb={12}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="primary"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Información del Ticket
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Servicio:"
                      value={ticket.Servicio.Servicio}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Categoría:"
                      value={ticket.Categoria.Categoria}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Subcategoría:"
                      value={ticket.Subcategoria.Subcategoria}
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={12}>
                  <MDBox mb={2} sx={{ width: "100%" }}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Descripción"
                      multiline
                      value={ticket.Descripcion}
                      rows={5.2}
                      defaultValue="Sin información"
                      sx={{ width: "100%" }}
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
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
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Información del Ticket
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Número Rec oficio:"
                      value={ticket.NumeroRec_Oficio}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={3}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Número oficio:"
                      value={ticket.Numero_Oficio}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={3}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Pending Reason:"
                      value={ticket.PendingReason}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={3}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Cerrado Por:"
                      value={ticket.Cerrado_por}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Resuelto Por:"
                      value={ticket.Resuelto_por}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Causa:"
                      value={ticket.Causa}
                      onChange={(e) => setEditor("editor", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Fecha y hora de Cierre:"
                      value={ticket.Fecha_hora_cierre}
                      //la fecha de cierre se tiene que obtener de manera dinamica
                      fullWidth
                      required
                      disabled={disable_input}
                    />
                  </MDBox>
                </Grid>
                <Grid xs={12}>
                  <MDBox mb={2}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Descripción de cierre"
                      multiline
                      value={ticket.Descripcion_cierre}
                      rows={5.2}
                      defaultValue="Sin información"
                      sx={{ width: "100%" }}
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
};

Ticket.propTypes = {
  disable_input: PropTypes.bool,
};

export default React.memo(Ticket);
