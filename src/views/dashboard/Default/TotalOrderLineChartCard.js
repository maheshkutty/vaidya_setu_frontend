import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

// third-party
import Chart from "react-apexcharts";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "ui-component/cards/Skeleton/EarningCard";

import ChartDataMonth from "./chart-data/total-order-month-line-chart";
import ChartDataYear from "./chart-data/total-order-year-line-chart";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&>div": {
    position: "relative",
    zIndex: 5,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: "#fff",
                        mt: 1,
                      }}
                    >
                      <MonitorHeartIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        backgroundColor: theme.palette.secondary.dark,
                        color: theme.palette.secondary[200],
                        zIndex: 1,
                      }}
                      aria-controls="menu-earning-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon fontSize="inherit" />
                    </Avatar>
                    <Menu
                      id="menu-earning-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Dengue</MenuItem>
                      <MenuItem onClick={handleClose}>Malaria</MenuItem>
                      <MenuItem onClick={handleClose}>Tuberculosis</MenuItem>
                      <MenuItem onClick={handleClose}>Diarrhoea</MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                          
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            30%
                          </Typography>
                        )}
                      </Grid>
                    
                      <Grid item>
                        <Avatar
                          sx={{
                            cursor: "pointer",
                            ...theme.typography.smallAvatar,
                            backgroundColor: theme.palette.error.dark,
                            color: theme.palette.secondary.dark,
                          }}
                        >
                          <ArrowUpwardIcon
                            fontSize="inherit"
                            sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                          />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: theme.palette.primary[200],
                          }}
                        >
                          Monkey Pox
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {timeValue ? (
                      <Chart {...ChartDataMonth} />
                    ) : (
                      <Chart {...ChartDataYear} />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalOrderLineChartCard;