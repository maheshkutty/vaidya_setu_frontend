import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from "react-redux";
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography, Avatar, Button, CardActions, Divider, Menu, MenuItem } from '@mui/material';


// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import health from "api/health"

// ===============================|| PatientDetail ||=============================== //

const getPendingRequestsData = async (AuthState) => {

	let response = await health.get("/doctor/pending", {
		headers: {
			"did": AuthState.id,
			"Authorization": "Bearer " + AuthState.accessToken
		}
	})
	response = await response.data
	return response;
}

const getApprovedRequestsData = async (AuthState) => {

	let response = await health.get("/doctor/patientlist", {
		headers: {
			"did": AuthState.id,
			"Authorization": "Bearer " + AuthState.accessToken
		}
	})
	response = await response.data

	return response;
}

const PatientDetail = ({ isLoading, userSession }) => {
	const theme = useTheme();
	var history = useNavigate();
	const [patientList, setPatientList] = useState([])
	useEffect(() => {
		async function someFunc() {
			let respons = await getPendingRequestsData(userSession);
			let respons1 = await getApprovedRequestsData(userSession);
			if (respons.status === "success" && respons1.status === "success") {
				setPatientList(respons.patientList.concat(respons1.patientList));
			}
			console.log(respons);
		}
		someFunc()
	}, []);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const med_rec = (piid) => {
		localStorage.setItem('pid_mcard', piid);
		history("/utils/Medical-Records");
	}

	return (
		<>
			{isLoading ? (
				<SkeletonPopularCard />
			) : (
				<MainCard content={false}>
					<CardContent>
						<Grid container spacing={gridSpacing}>

							<Grid item xs={12}>
								<Grid container alignContent="center" justifyContent="space-between">
									<Grid item>
										<Typography variant="h3" color="inherit">Patient Name</Typography>
									</Grid>
									<Grid item>
										<Typography variant="h3" color="inherit">Date</Typography>
									</Grid>
									<Grid item>
										<Typography variant="h3" color="inherit">Disease</Typography>
									</Grid>
									<Grid item>
										<Typography variant="h3" color="inherit">Status</Typography>
									</Grid>
								</Grid>
							</Grid>
							{patientList.map((ele) =>
								<Grid item xs={12}>
									<Grid container alignItems="center" justifyContent="space-between">
										<Grid item>
											<Typography variant="subtitle1" color="inherit">
												{ele.patientName}
											</Typography>
										</Grid>
										<Grid item>
											<Grid container alignItems="center" justifyContent="space-between">
												<Grid item>
													<Typography variant="subtitle1" color="inherit">
														{ele.reqTime}
													</Typography>
												</Grid>
											</Grid>
										</Grid>
										<Grid item>
											<Grid container alignItems="center" justifyContent="space-between">
												<Grid item>
													<Typography variant="subtitle1" color="inherit">
														{ele.reqTime}
													</Typography>
												</Grid>
											</Grid>
										</Grid>
										<Grid item>
											<Grid container alignItems="center" justifyContent="space-between">
												<Grid item>
													{
														ele.status ?
															<TaskAltIcon onClick={event => med_rec(ele.pid)} sx={{
																color: theme.palette.success.dark,

																ml: 2
															}} fontSize="large" />
															:
															<HighlightOffIcon sx={{
																color: theme.palette.error.dark,
																ml: 2
															}} fontSize="large" />
													}
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Divider sx={{ my: 1.5 }} />
								</Grid>
							)}


						</Grid>
					</CardContent>
					<CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
						<Button size="small" disableElevation>
							View All
							<ChevronRightOutlinedIcon />
						</Button>
					</CardActions>
				</MainCard>
			)}
		</>
	);
};

PatientDetail.propTypes = {
	isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
	return {
		userSession: state.userSession,
	};
};

export default connect(mapStateToProps, {  })(PatientDetail);
