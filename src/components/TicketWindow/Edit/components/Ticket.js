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

const Ticket = ({ disable_input, data }) => {
  const ticket = useTicketStore();
  const setTicketFields = useTicketStore((state) => state.setTicketFields);
  console.log(data);
  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      {/*Estado ticket */}
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
                {/*Muestra quien creo el ticket */}
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
                {/*Muestra el ID del ticket */}
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
                {/*Seleccion Prioridad*/}
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Prioridad</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={data.prioridades.Descripcion}
                        label="Estatus"
                        onChange={(e) => setTicketFields("Prioridad", e.target.value)}
                      >
                        {data.prioridades.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Descripcion}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                {/*Seleccion tipo de Estado*/}
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.estados.Estado}
                        label="Estatus"
                        onChange={(e) => setTicketFields("Estado", e.target.value)}
                      >
                        {data.estados.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Estado}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                {/*Seleccion tipo de ticket tipo de incidencia*/}
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Tipo de ticket</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.tiposTickets.Tipo_de_incidencia}
                        label="Estatus"
                        onChange={(e) => setTicketFields("Tipo_incidencia", e.target.value)}
                      >
                        {data.tiposTickets.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Tipo_de_incidencia}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                {/*Introducido por teclado Numero_Oficio*/}
                <Grid xs={6}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Numero_Oficio:"
                      value={ticket.Numero_Oficio}
                      onChange={(e) => setTicketFields("Numero_Oficio", e.target.value)}
                      fullWidth
                      required
                    />
                  </MDBox>
                </Grid>
                {/*Introducido por teclado NumeroRec_Oficio*/}
                <Grid xs={6}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="NumeroRec_Oficio:"
                      value={ticket.NumeroRec_Oficio}
                      onChange={(e) => setTicketFields("NumeroRec_Oficio", e.target.value)}
                      fullWidth
                      required
                    />
                  </MDBox>
                </Grid>
                {/*Pending reason */}
                <Grid xs={8}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Pending Reason:"
                      value={ticket.PendingReason}
                      onChange={(e) => setTicketFields("PendingReason", e.target.value)}
                      fullWidth
                      required
                      disabled={!disable_input}
                    />
                  </MDBox>
                </Grid>
                {/*Fecha de creación de ticket */}
                <Grid xs={5}>
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
                {/*Fecha limite de solución de ticket */}
                <Grid xs={5}>
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
      {/*Clasificación */}
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
              Clasificación
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={3}>
                {/*Seleccion tipo de Servicio*/}
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Servicio</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.servicios.Servicio}
                        label="Estatus"
                        onChange={(e) => setTicketFields("Servicio", e.target.value)}
                      >
                        {data.servicios.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Servicio}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                {/*Seleccion categoria del ticket*/}
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.categorias.Categoria}
                        label="Estatus"
                        onChange={(e) => setTicketFields("Categoria", e.target.value)}
                      >
                        {data.categorias.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Categoria}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                {/*Seleccion tipo de subcategoria*/}
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Subcategoría</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.subcategoria.Subcategoria}
                        label="Estatus"
                        onChange={(e) => setTicketFields("Subcategoria", e.target.value)}
                      >
                        {data.subcategoria.map((est) => {
                          return (
                            <MenuItem value={est._id} key={est._id}>
                              {est.Subcategoria}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                {/*Introducido por teclado Descripción del ticket*/}
                <Grid xs={12}>
                  <MDBox mb={2}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Descripción del ticket"
                      multiline
                      value={ticket.Descripcion}
                      onChange={(e) => setTicketFields("Descripcion", e.target.value)}
                      rows={5.2}
                      defaultValue="Sin información"
                      sx={{ width: "100%" }}
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
  data: PropTypes.array,
};

export default React.memo(Ticket);
