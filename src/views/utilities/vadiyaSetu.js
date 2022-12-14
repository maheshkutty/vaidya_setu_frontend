import {
  Grid,
  Link,
  Avatar,
  CardActions,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import QRCode from "react-qr-code";
// project imports

import SubCard from "ui-component/cards/SubCard";
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import MaleIcon from "@mui/icons-material/Male";
import { useEffect, useState } from "react";
import AuthContext from "AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import health from "api/health";
import { connect } from "react-redux";
// ==============================|| TYPOGRAPHY ||============================== //
// import Particle from "themes/particle";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 250,
    height: 250,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 250,
    height: 250,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: "50%",
    top: -160,
    right: -130,
  },
}));

const VadiyaSetu = ({ userSession }) => {
  const theme = useTheme();
  var history = useNavigate();
  const [UserData, setUserData] = useState([]);
  const getRequestsData = async () => {
    console.log(userSession.id);
    var data = { email: userSession.email };
    let response = await health.post("/patient/read", data, {
      headers: {
        pid: userSession.id,
        Authorization: "Bearer " + userSession.accessToken,
      },
    });
    response = await response.data;
    console.log(response)
    return response;
  };

  useEffect(() => {
    async function someFunc() {
      let respons = await getRequestsData();
      if (respons.status === "success") {
        console.log(respons.payload);
        setUserData(respons.payload);
      }
      console.log(respons);
    }
    someFunc()
  }, []);

  return (
    <>
      {
        <MainCard>
          <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={12} sm={2}>
              <Avatar
                alt="Remy Sharp"
                src="assets/images/users/user-round.svg"
                sx={{ width: 150, height: 150 }}
                disableElevation
              />
            </Grid>
            <Grid xs={12} sm={2}>
              <Typography variant="h2" color="inherit">
                {UserData.name}
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Mob: {UserData.phone}
              </Typography>
            </Grid>

            <Grid xs={12} sm={2}>
              <Box>
                <Box sx={{ color: "text.secondary", ml: "20" }}>Age&Gender</Box>

                <Box
                  sx={{
                    display: "inline",
                    fontWeight: "bold",

                    fontSize: 14,
                  }}
                >
                  22
                  <MaleIcon fontSize="small" />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={2}>
              <Box>
                <Box sx={{ color: "text.secondary" }}>Height</Box>

                <Box
                  sx={{
                    display: "inline",
                    fontWeight: "bold",

                    fontSize: 14,
                  }}
                >
                  184cm
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={2}>
              <Box>
                <Box sx={{ color: "text.secondary" }}>Allergies</Box>

                <Box
                  sx={{
                    display: "inline",
                    fontWeight: "bold",
                    mx: 0.5,
                    fontSize: 14,
                  }}
                >
                  Dust
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={2}>
              <Box>
                <Box sx={{ color: "text.secondary" }}>Active Issues</Box>

                <Box
                  sx={{
                    display: "inline",
                    fontWeight: "bold",

                    fontSize: 14,
                  }}
                >
                  {"12"}
                </Box>
              </Box>
            </Grid>



            <Grid item xs={12} sm={6}>
              <SubCard>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Name"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {UserData.name}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Gender */}
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Gender"}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {"Male"}
                    </Typography>
                  </Grid>
                </Grid>

                {/* DOB  */}

                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Date of Birth"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {"15/02/1999"}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Mobile Number */}

                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Mobile Number"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {UserData.phone}
                    </Typography>
                  </Grid>
                </Grid>
                {/* Aadhar card */}
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Aadhar Card"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {UserData.aadhar}
                    </Typography>
                  </Grid>
                </Grid>

                {/* email */}

                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"E-mail"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {UserData.email}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Address */}

                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Address"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {UserData.address + UserData.district + UserData.state}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Pincode */}

                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {"Pincode"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="inherit">
                      {UserData.pincode}
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                      <List sx={{ py: 0 }}>
                        <ListItem
                          alignItems="center"
                          disableGutters
                          sx={{ py: 0, justifyContent: "center" }}
                          disableElevation
                        >
                          <ListItemAvatar>
                            <QRCode
                              value={userSession.id}
                              bgColor="#1D88E5"
                              fgColor="#DFF6FF"
                              size={152}
                            />
                          </ListItemAvatar>
                        </ListItem>
                      </List>
                    </Box>
                    <Grid
                      sx={{
                        py: 0,
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                      disableElevation
                    >
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          {"VadiyaSetu:  "}
                          {UserData.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h2" color="inherit">
                          {userSession.id}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardWrapper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userSession: state.userSession,
  };
};

export default connect(mapStateToProps, {})(VadiyaSetu);
