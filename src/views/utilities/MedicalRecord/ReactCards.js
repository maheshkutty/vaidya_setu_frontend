import { ToggleCard, TinderLikeCard, StackCard } from "react-stack-cards";
import React from "react";
import ReactCards2 from "./ReactCards2";
import Datajson from "./Datajson.json";
import { gridSpacing } from "store/constant";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import SubCard from "ui-component/cards/SubCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import MainCard from "ui-component/cards/MainCard";
import { maxHeight } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
var dis = Datajson.disease;
var st_color_class = "card-title";

export default class ReactCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directionTinder: "swipeCornerDownLeft",
      directionToggle: "sideSlide",
      directionStack: "topRight",
      isOpen: false,
      swip: false,
      dis_tar: 0,
      zooom: false,
      RC2_swip: true,
      zoom_card_name: "disease",
    };
    this.Tinder = null;
  }

  onTinderSwipe() {
    //this.setState({ swip: true });
    if (this.state.dis_tar < dis.length - 1) {
      this.setState({ dis_tar: this.state.dis_tar + 1 });
    } else {
      this.setState({ dis_tar: 0 });
    }
    this.setState({ RC2_swip: true });
    this.Tinder.swipe();
  }
  onTinderSwipeLeft() {
    //this.setState({ swip: true });
    if (this.state.dis_tar > 0) {
      this.setState({ dis_tar: this.state.dis_tar - 1 });
    } else {
      this.setState({ dis_tar: dis.length - 1 });
    }
    this.setState({ RC2_swip: true });
    this.Tinder.swipe();
  }
  onzoom(card_name) {
    console.log(card_name);
    this.setState({ zooom: !this.state.zooom });
    this.setState({ RC2_swip: false });
    console.log(this.state.zooom);
    if (card_name === "disease") {
      dis[this.state.dis_tar].status == "open"
        ? (st_color_class = true)
        : (st_color_class = false);
      this.setState({ zoom_card_name: "disease" });
    } else if (card_name == "diagno") {
      this.setState({ zoom_card_name: "diagno" });
    } else {
      this.setState({ zoom_card_name: "treatment" });
    }
  }

  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  componentDidUpdate() {
    //this.Tinder.swipe();
    console.log("SW_UPdate");
  }

  render() {
    const arr = ["first", "second", "third", "fourth", "fifth", "sixth"];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    //const colors = ["red", "blue", "green"];
    var card = (
      // <div
      //   className="card text-dark shadow-lg bg-white mb-3"
      //   style={{
      //     height: "600px",
      //     width: "1500px",
      //     marginTop: "250px",
      //     marginLeft: "150px",
      //   }}
      // >
      //   <div className="card-header">
      //     <b>Disease</b>
      //   </div>
      //   <div className="card-body">
      //     <h2 className="card-title">Nothing to show</h2>
      //   </div>
      // </div>

      <MainCard title="Disease" boxShadow="true">
        <Grid>
          <Typography variant="h2">Nothing to show</Typography>
        </Grid>
      </MainCard>
    );

    if (this.state.zoom_card_name == "disease") {
      card = (
        <Grid margin={5} sx={{ overflow: "auto" }}>
          <MainCard title="Disease">
            <Grid>
              <Typography variant="h2">
                {dis[this.state.dis_tar].name}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1">
                Date Of Registration: {dis[this.state.dis_tar].dateOfReg}
              </Typography>
            </Grid>
            <br></br>
            <Grid>
              {st_color_class ? (
                <LockOpenIcon fontSize="small" />
              ) : (
                <LockIcon fontSize="small" />
              )}
            </Grid>

            <Grid sx={{ mx: 5 }}>
              <SubCard title="Reports">
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    "& ul": { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {dis[this.state.dis_tar].reports.map((dis_repo) => (
                    <li key={`section-${dis_repo}`}>
                      <ul>
                        <ListItem key={`item-${dis_repo}`}>
                          <ListItemText primary={`${dis_repo}`} />
                        </ListItem>
                      </ul>
                    </li>
                  ))}
                </List>
              </SubCard>
            </Grid>

            {/* // <ul> */}
            {/* //   {dis[this.state.dis_tar].reports.map((dis_repo) => ( */}
            {/* //     <li className="card-text">
                //       <h6>{dis_repo}</h6>
                //     </li>
                //   ))}
                // </ul> */}

            <br></br>
            <Grid sx={{ mx: 5 }}>
              <SubCard title="More Details...">
                <Typography variant="body1">
                  {dis[this.state.dis_tar].desc}
                </Typography>
              </SubCard>
            </Grid>
          </MainCard>
        </Grid>
      );
    } else if (this.state.zoom_card_name == "diagno") {
      card = (
        // <div
        //   className="card text-dark shadow-lg bg-white mb-3"
        //   style={{
        //     height: "600px",
        //     width: "1500px",
        //     marginTop: "250px",
        //     marginLeft: "150px",
        //   }}
        // >
        //   <div className="card-header">
        //     <b>Diagnostics</b>
        //   </div>
        //   <div className="card-body">
        //     {dis[this.state.dis_tar].diagnosis.map((diag_data) => (
        //       <div>
        //         <h3 className="card-title">{diag_data.date}</h3>
        //         <br />
        //         <h4 className="card-title">Symptoms</h4>
        //         <ul>
        //           {diag_data.vSymptoms.map((data_sym) => (
        //             <li className="card-text">
        //               <h5>{data_sym}</h5>
        //             </li>
        //           ))}
        //         </ul>
        //       </div>
        //     ))}
        //   </div>
        // </div>

        <Grid margin={5} sx={{ overflow: "auto" }}>
          <MainCard title="Diagnostics">
            <Grid>
              <Typography variant="h2">
                {dis[this.state.dis_tar].name}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1">
                Date Of Registration: {dis[this.state.dis_tar].dateOfReg}
              </Typography>
            </Grid>
            <br></br>
            <Grid>
              {st_color_class ? (
                <LockOpenIcon fontSize="small" />
              ) : (
                <LockIcon fontSize="small" />
              )}
            </Grid>

            <Grid sx={{ mx: 5 }}>
              <SubCard title="Reports">
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    "& ul": { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {dis[this.state.dis_tar].reports.map((dis_repo) => (
                    <li key={`section-${dis_repo}`}>
                      <ul>
                        <ListItem key={`item-${dis_repo}`}>
                          <ListItemText primary={`${dis_repo}`} />
                        </ListItem>
                      </ul>
                    </li>
                  ))}
                </List>
              </SubCard>
            </Grid>

            {/* // <ul> */}
            {/* //   {dis[this.state.dis_tar].reports.map((dis_repo) => ( */}
            {/* //     <li className="card-text">
                //       <h6>{dis_repo}</h6>
                //     </li>
                //   ))}
                // </ul> */}

            <br></br>
            <Grid sx={{ mx: 5 }}>
              <SubCard title="More Details...">
                <Typography variant="body1">
                  {dis[this.state.dis_tar].desc}
                </Typography>
              </SubCard>
            </Grid>
          </MainCard>
        </Grid>
      );
    } else if (this.state.zoom_card_name == "treatment") {
      card = (
        // <div
        //   className="card text-dark shadow-lg bg-white mb-3"
        //   style={{
        //     height: "600px",
        //     width: "1500px",
        //     marginTop: "250px",
        //     marginLeft: "150px",
        //   }}
        // >
        //   <div className="card-header">
        //     <b>Treatment</b>
        //   </div>
        //   <div className="card-body">
        //     <Grid>
        //       <Grid item xs={6}>
        //         <h5 className="card-title">Treatment Details</h5>
        //         {dis[this.state.dis_tar].treatment.map((data_treat) => (
        //           <div>
        //             <ul>
        //               <li>
        //                 <h6 className="card-title">{data_treat.desc}</h6>
        //                 <h7 className="card-title">{data_treat.date}</h7>
        //               </li>
        //             </ul>
        //           </div>
        //         ))}
        //       </Grid>
        //       <Grid item xs={6}>
        //         <h5 className="card-title">Drugs</h5>
        //         {dis[this.state.dis_tar].drugs.map((data_drugs) => (
        //           <div>
        //             <ul>
        //               <li>
        //                 <h6 className="card-title">{data_drugs.name}</h6>
        //                 <h7 className="card-title">{data_drugs.date}</h7>
        //               </li>
        //             </ul>
        //           </div>
        //         ))}
        //       </Grid>
        //     </Grid>
        //   </div>
        // </div>
        <Grid margin={5} sx={{ overflow: "auto" }}>
          <MainCard title="Treatment">
            <Grid>
              <Typography variant="h2">
                {dis[this.state.dis_tar].name}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1">
                Date Of Registration: {dis[this.state.dis_tar].dateOfReg}
              </Typography>
            </Grid>
            <br></br>
            <Grid>
              {st_color_class ? (
                <LockOpenIcon fontSize="small" />
              ) : (
                <LockIcon fontSize="small" />
              )}
            </Grid>

            <Grid sx={{ mx: 5 }}>
              <SubCard title="Reports">
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    "& ul": { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {dis[this.state.dis_tar].reports.map((dis_repo) => (
                    <li key={`section-${dis_repo}`}>
                      <ul>
                        <ListItem key={`item-${dis_repo}`}>
                          <ListItemText primary={`${dis_repo}`} />
                        </ListItem>
                      </ul>
                    </li>
                  ))}
                </List>
              </SubCard>
            </Grid>

            {/* // <ul> */}
            {/* //   {dis[this.state.dis_tar].reports.map((dis_repo) => ( */}
            {/* //     <li className="card-text">
                //       <h6>{dis_repo}</h6>
                //     </li>
                //   ))}
                // </ul> */}

            <br></br>
            <Grid sx={{ mx: 5 }}>
              <SubCard title="More Details...">
                <Typography variant="body1">
                  {dis[this.state.dis_tar].desc}
                </Typography>
              </SubCard>
            </Grid>
          </MainCard>
        </Grid>
      );
    }

    return (
      <>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
            <TinderLikeCard
              images={arr}
              width="350"
              height="250"
              direction={this.state.directionTinder}
              duration={400}
              ref={(node) => (this.Tinder = node)}
            >
              <SubCard title="Disease" sx={{ height: "30em" }}>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h3" color="inherit">
                      {dis[this.state.dis_tar].name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body" color="inherit">
                      {dis[this.state.dis_tar].desc}
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </TinderLikeCard>
          </Grid>

          <Grid item xs={12} sm={4}>
            <ReactCards2
              swipee="swipeDown"
              dis2={dis[this.state.dis_tar]}
              rc2_swipp={this.state.RC2_swip}
              targett="diagno"
            />
            {/* <TinderLikeCard
              images={arr}
              width="350"
              height="250"
              direction={this.state.directionTinder}
              duration={400}
              ref={(node) => (this.Tinder = node)}
              className="tinder"
            >
              <SubCard title="Diagnostics">
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    {dis[this.state.dis_tar].diagnosis.map((data_diag) => (
                      <div>
                        <h5 className="card-title">{data_diag.date}</h5>
                        <ul>
                          {data_diag.vSymptoms.map((data_symp) => (
                            <li className="card-text">{data_symp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </SubCard>
            </TinderLikeCard> */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <ReactCards2
              swipee="swipeCornerDownRight"
              dis2={dis[this.state.dis_tar]}
              rc2_swipp={this.state.RC2_swip}
              targett="treatment"
            />
            {/* <TinderLikeCard
              images={arr}
              width="350"
              height="250"
              direction={this.state.directionTinder}
              duration={400}
              ref={(node) => (this.Tinder = node)}
              className="tinder"
            >
              <SubCard title="Treatment">
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    {dis[this.state.dis_tar].treatment
                      .slice(0, 3)
                      .map((data_treat) => (
                        <div>
                          <ul>
                            <li>
                              <h5 className="card-title">{data_treat.desc}</h5>
                              <h6 className="card-title">{data_treat.date}</h6>
                            </li>
                          </ul>
                        </div>
                      ))}
                  </Grid>
                </Grid>
              </SubCard>
            </TinderLikeCard> */}
          </Grid>

          <Grid container spacing={gridSpacing} sx={{ marginTop: "240px" }}>
            <Grid item xs={2}></Grid>

            <Grid item xs={3}>
              <Button
                fontSize="large"
                onClick={this.onzoom.bind(this, "disease")}
              >
                <AspectRatioIcon />
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button
                fontSize="large"
                onClick={this.onzoom.bind(this, "diagno")}
              >
                <AspectRatioIcon />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                // fontSize = "large"
                onClick={this.onzoom.bind(this, "treatment")}
              >
                <AspectRatioIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={5}></Grid>
          <Grid item xs={12} sm={2}>
            <Button>
              <ArrowBackIosIcon
                onClick={this.onTinderSwipeLeft.bind(this)}
                sx={{
                  ml: 2,
                }}
                fontSize="large"
              />
            </Button>

            <Button>
              <ArrowForwardIosIcon
                onClick={this.onTinderSwipe.bind(this)}
                sx={{}}
                fontSize="large"
              />
            </Button>
          </Grid>
          <Grid item xs={12} sm={5}></Grid>
        </Grid>

        <Modal
          open={this.state.zooom}
          onClose={this.onzoom.bind(this)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Zoom
            in={this.state.zooom}
            style={{ transitionDelay: this.state.zooom ? "100ms" : "0ms" }}
          >
            {card}
          </Zoom>
        </Modal>
      </>
    );
  }
}
