import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  tableCellClasses,
  Tabs,
  Tab,
  Fade,
  Backdrop,
} from "@mui/material";
import React, { useState } from "react";
import bg from "../assets/LandingPageAssets/bg.svg";
import NavBar from "../components/NavBar";
import heroImage from "../assets/LandingPageAssets/heroImage.png";
import fLogo from "../assets/LandingPageAssets/fieresLogo.png";
import divider from "../assets/LandingPageAssets/divider.svg";
import line from "../assets/LandingPageAssets/line.png";
import sec3code from "../assets/LandingPageAssets/sec3code.svg";
import sec3retry from "../assets/LandingPageAssets/sec3retry.svg";
import sec3roc from "../assets/LandingPageAssets/sec3roc.svg";
import arrow from "../assets/LandingPageAssets/arrow.svg";
import sec4bg from "../assets/LandingPageAssets/sec4bg.png";
import checkGreen from "../assets/LandingPageAssets/checkGreen.svg";
import checkRed from "../assets/LandingPageAssets/checkRed.svg";
import sec5Photo from "../assets/LandingPageAssets/sec5photo.svg";
import sec6Photo from "../assets/LandingPageAssets/sec6photo.svg";
import btcCard from "../assets/LandingPageAssets/btc.svg";
import ethCard from "../assets/LandingPageAssets/eth.svg";
import rippleCard from "../assets/LandingPageAssets/ripple.svg";
import fieroCard from "../assets/LandingPageAssets/fiero.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import cRec from "../assets/LandingPageAssets/cRec.png";
import Ctimeline from "../assets/LandingPageAssets/Ctimeline.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import sec9Photo from "../assets/LandingPageAssets/sec9Photo.svg";
import sec11cardPhoto from "../assets/LandingPageAssets/sec11cardPhoto.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import appleStore from "../assets/LandingPageAssets/applestore.png";
import playStore from "../assets/LandingPageAssets/playstore.png";
import mac from "../assets/LandingPageAssets/mac.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
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
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function CustomTabPanel1(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function a11yProps1(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const LandingPage = () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [isBlur, setIsBlur] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const cardBlurHandler = (e, i) => {
    console.log(e.getAttribute("a-key"));
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#0d0109",
          width: "100vw",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Container
          maxWidth="xl"
          sx={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Grid container spacing={2} columns={{ sm: 1, md: 12 }}>
            <Grid
              item
              md={4}
              container
              alignItems={"center"}
              justifyContent={{ xs: "center", md: "flex-start" }}
              order={{ xs: 2, sm: 2, md: 1 }}
              //   sx={{ bgcolor: "green" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"15px"}
                sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
              >
                <Typography
                  variant="h3"
                  fontWeight={"500"}
                  fontFamily={"inter"}
                  color={"white"}
                  fontSize={{ xs: "25px", md: "40px" }}
                >
                  FIERES
                </Typography>
                <Typography
                  variant="h5"
                  fontFamily={"inter"}
                  fontWeight={"600"}
                  color={"white"}
                  sx={{
                    width: { xs: "auto", sm: "450px" },
                    textAlign: { xs: "center", sm: "center", md: "left" },
                  }}
                  fontSize={{ xs: "15px", md: "20px" }}
                >
                  Blockchain Redefined - Simplifying Digital Asset Ownership
                  with the most scalable blockchain economy
                </Typography>
                <Typography
                  variant="body"
                  sx={{ width: { xs: "auto", sm: "450px" }, textAlign: "left" }}
                  fontFamily={"sora"}
                  fontWeight={"300"}
                  color={"white"}
                >
                  Experience the unparalleled power of Fieres chain - the
                  trailblazing crypto engineering organisation transforming the
                  digital asset landscape. Our super- fast blockchain can handle
                  over 3500 transactions per second with Web 3.0 capabilities,
                  metaverse integration, cutting-edge technology, finance
                  solutions, and Play 2 Earn gaming. Join us in revolutionising
                  the digital asset ecosystem and discovering the most scalable
                  blockchain economy.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    background:
                      "linear-gradient(90deg,#FF6F37, #FF2676, #B801AA, #7101BC)",
                    color: "white",
                    width: "170px",
                    borderRadius: "30px",
                    alignSelf: { xs: "center", md: "flex-start" },
                  }}
                >
                  White Paper
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              md={8}
              alignItems={"center"}
              justifyContent={"center"}
              container
              order={{ xs: 1, sm: 1, md: 2 }}
              position={{ xs: "static", md: "relative" }}
              sx={{
                height: { xs: "300px", md: "700px" },
              }}
            >
              <Box
                component={"img"}
                sx={{
                  height: { xs: "300px", md: "750px" },
                }}
                src={heroImage}
                position={{ xs: "absolute", md: "static" }}
                left={{ md: "0px" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, md: 12 }}
            color={"#fff"}
            sx={{
              bgcolor: { xs: "none", md: "rgba(255, 255, 255, 0.03)" },
              padding: "10px",
              borderRadius: "20px",

              mt: {
                xs: "50px",
                md: "0px",
              },
            }}
          >
            <Grid
              container
              item
              md={6}
              direction={"column"}
              //   columnSpacing={}
              rowSpacing={1}
              sx={{
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                // ml: "10px",
              }}
            >
              <Grid item>
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"600"}
                  color={"#fff"}
                  width={{ xs: "auto", md: "400px" }}
                  textAlign={{ xs: "center", md: "inherit" }}
                  fontSize={"30px"}
                >
                  FIERO PRICE{" "}
                  <Typography
                    fontFamily={"goodtimes"}
                    component={"span"}
                    sx={{ color: "#FF136D" }}
                    fontWeight={"600"}
                    color={"#fff"}
                    fontSize={"30px"}
                  >
                    LIVE
                  </Typography>{" "}
                  DATA
                </Typography>
              </Grid>
              <Grid item>
                <Box component={"div"} sx={{ display: "flex" }}>
                  <Box
                    component={"img"}
                    src={fLogo}
                    sx={{ width: "40px", height: "40px" }}
                  />
                  <Box
                    component={"div"}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="subtitle1" sx={{ minWidth: "150px" }}>
                      Fieres Blockchain
                    </Typography>
                    <Typography variant="subtitle1">Fearo</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"700"}
                  fontSize={"30px"}
                >
                  $0.0197
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  sx={{
                    background:
                      "linear-gradient(90deg ,#FF6F37, #FF2676, #B801AA, #7101BC)",
                    width: "120px",
                    textAlign: "center",
                    color: "white",
                    borderRadius: "15px",
                    // height: "0px",
                  }}
                >
                  <Typography
                    variant="button"
                    fontFamily={"sora"}
                    fontSize={"13px"}
                  >
                    Buy Now
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },

                alignItems: { xs: "center", md: "flex-start" },
              }}
              pr={{ xs: "0px", md: "20px" }}
            >
              <Box
                component={"div"}
                bgcolor={"#190d15"}
                sx={{
                  height: "400px",
                  width: "400px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "15px",
                  position: "relative",
                  pt: "50px",
                  //   bgcolor: "blue",
                }}
              >
                <Typography fontFamily={"sora"} fontWeight={"700"}>
                  Pre-sale is Live Now
                </Typography>
                <Box
                  component={"div"}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Days</Typography>
                  </Box>

                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Hours</Typography>
                  </Box>

                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Minutes</Typography>
                  </Box>

                  <Box
                    component={"div"}
                    sx={{
                      bgcolor: "#180c14",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#241921",
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        // textAlign: "center",
                        my: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "100" }}>30 </Typography>
                    </Box>
                    <Typography>Second</Typography>
                  </Box>
                </Box>
                <Box component={"img"} src={divider} sx={{ mt: "20px" }} />

                <Typography fontFamily={"sora"} fontWeight={"700"}>
                  Pre-sale
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    width: "300px",
                    height: "10px",
                    background: "#241820",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      width: "200px",
                      height: "10px",
                      background:
                        "linear-gradient(90deg,#FFB000, #FF564D, #FF0098, #5D00C1)",
                      borderRadius: "10px",
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "90px",
                    left: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ bgcolor: "white", height: "25px", width: "1px" }}
                  />
                  <Typography fontWeight={"300"} fontSize={"15px"}>
                    Pre-sale
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "90px",
                    left: "130px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ bgcolor: "white", height: "25px", width: "1px" }}
                  />
                  <Typography fontWeight={"300"} fontSize={"15px"}>
                    Soft Cap
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "90px",
                    left: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ bgcolor: "white", height: "25px", width: "1px" }}
                  />
                  <Typography fontWeight={"300"} fontSize={"15px"}>
                    Bonus
                  </Typography>
                </Box>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    bgcolor: "#281a21",
                    px: "20px",
                    py: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Typography variant="button" color={"white"}>
                    Purchase Token
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* section-3-start */}
          <Container
            maxWidth={"xl"}
            sx={{
              bgcolor: "#0d0109",
              height: { xs: "auto", md: "400px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "column",
              gap: "30px",
              mt: { xs: "50px", md: "0px" },
            }}
          >
            {/* item-start-here */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                px: "10px",
                alignItems: "center",
                justifyContent: "center",
                width: { md: "auto", xs: "100%" },
              }}
            >
              <Box
                component={"img"}
                src={sec3roc}
                sx={{
                  width: { md: "100px", xs: "100%" },
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Button
                variant="text"
                sx={{
                  gap: "10px",
                  bgcolor: "#1a0b11",
                  borderRadius: "50px",
                  px: { md: "50px", xs: "0px" },
                  height: { xs: "50px", md: "80px" },
                  width: { md: "auto", xs: "400px" },
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontWeight={"600"}
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  FIERES BLOCKCHAIN EXPLORER
                </Typography>
                <Box component={"img"} src={arrow} />
              </Button>
            </Box>
            {/* item-start-here */}
            {/* item-start-here */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                px: "10px",
                alignItems: "center",
                justifyContent: "center",
                width: { md: "auto", xs: "100%" },
              }}
            >
              <Box
                component={"img"}
                src={sec3code}
                sx={{
                  width: { md: "100px", xs: "100%" },
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Button
                variant="text"
                sx={{
                  gap: "10px",
                  bgcolor: "#1a0b11",
                  borderRadius: "50px",
                  px: { md: "50px", xs: "0px" },
                  height: { xs: "50px", md: "80px" },
                  width: { md: "auto", xs: "400px" },
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontWeight={"600"}
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  DEVELOPER RESOURCES
                </Typography>
                <Box component={"img"} src={arrow} />
              </Button>
            </Box>
            {/* item-start-here */}
            {/* item-start-here */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                px: "10px",
                alignItems: "center",
                justifyContent: "center",
                width: { md: "auto", xs: "100%" },
              }}
            >
              <Box
                component={"img"}
                src={sec3retry}
                sx={{
                  width: { md: "100px", xs: "100%" },
                  display: { xs: "none", md: "flex" },
                }}
              />
              <Button
                variant="text"
                sx={{
                  gap: "10px",
                  bgcolor: "#1a0b11",
                  borderRadius: "50px",
                  px: { md: "50px", xs: "0px" },
                  height: { xs: "50px", md: "80px" },
                  width: { md: "auto", xs: "400px" },
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontWeight={"600"}
                  sx={{
                    color: "white",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  FIERES BLOCKCHAIN TESTNET
                </Typography>
                <Box component={"img"} src={arrow} />
              </Button>
            </Box>
            {/* item-start-here */}
          </Container>
          {/* section-3-end */}
          {/* section-4-start */}
          <Container
            maxWidth="xl"
            sx={{
              color: "white",
              background: { xs: "#1a0a15", lg: `url(${sec4bg})` },
              py: "50px",
              mt: "70px",
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
              alignItems: "center",
              gap: "80px",
            }}
          >
            <Box
              sx={{
                width: {
                  lg: "50%",
                  xs: "100%",
                },
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                alignItems: { lg: "flex-start", xs: "center" },
              }}
              component={"div"}
            >
              <Typography fontFamily={"sora"} fontWeight={"300"}>
                Welcome to the exciting new era of blockchain, where people come
                together to create a more sustainable, inclusive, and equitable
                world. At Fieres, we're proud to be leading the way with our
                innovative Fieres Chain, which bridges the physical and digital
                worlds, connecting real-world data to digital assets.
              </Typography>
              <Typography fontFamily={"sora"} fontWeight={"300"}>
                Our vision is to create a world where transparency and trust are
                between individuals and organisations. With Fieres Chain, we're
                making this vision a reality by quantifying and validating
                actions and their impacts. You can take ownership of your
                personal data, control its use, and be part of a secure,
                trustworthy, and transparent transfer of information and value.
                This is the power of Web3 - where everyone is an owner and
                co-creator, not just a user. Experience the future of digital
                asset creation with Fieres Chain, designed for low transaction
                fees and real-time execution. Our designed for low transaction
                fees and real-time execution. Our designed for low transaction
                fees and real-time execution. Our blockchain empowers financial
                institutions and businesses with fast and reliable transactions,
                while also enabling individuals to actively participate in
                shaping more sustainable value chains. Join us today and be part
                of the revolution!
              </Typography>
              <Button
                variant="text"
                sx={{
                  height: "50px",
                  background:
                    "linear-gradient(90deg,#FF6F37, #FF2676, #B801AA, #7101BC)",
                  borderRadius: "25px",
                }}
              >
                <Typography
                  fontFamily={"sora"}
                  fontSize={"15px"}
                  sx={{ mx: "10px", color: "white" }}
                >
                  Explore Dapps
                </Typography>
              </Button>
            </Box>
            {/* table-start */}
            <Box
              component={"div"}
              sx={{
                bgcolor: "blue",
                p: { lg: "30px", xs: "10px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#180b17",
                borderRadius: "20px",
                width: { xs: "100%", lg: "auto" },
              }}
            >
              <TableContainer component={Paper} sx={{ background: "#190b19" }}>
                <Table
                  sx={{
                    minWidth: 650,
                    [`& .${tableCellClasses.root}`]: {
                      borderBottom: "none",
                    },
                    border: "1px",
                    borderRadius: "20px",
                    borderStyle: "solid",
                    borderColor: "#21151e",
                  }}
                  size="small"
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box component={"img"} src={btcCard} />
                          <Typography color="white">Bitcoin</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box component={"img"} src={ethCard} />
                          <Typography color="white">Eth</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box component={"img"} src={rippleCard} />
                          <Typography color="white">Ripple</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box component={"img"} src={fieroCard} />
                          <Typography color="white">Fiero</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Decentralised
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Scalability
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Secure
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Speed
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="left">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"600"}
                          color="white"
                        >
                          4.6tps
                        </Typography>
                        <Box
                          sx={{
                            bgcolor: "#211520",
                            width: "100px",
                            height: "8px",
                            position: "relative",
                            borderRadius: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              background:
                                "linear-gradient(90deg,#FFB000, #FF564D, #FF0098)",
                              width: "20px",
                              height: "8px",
                              borderRadius: "20px",
                            }}
                          ></Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="left">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"600"}
                          color="white"
                        >
                          20tps
                        </Typography>
                        <Box
                          sx={{
                            bgcolor: "#211520",
                            width: "100px",
                            height: "8px",
                            position: "relative",
                            borderRadius: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              background:
                                "linear-gradient(90deg,#FFB000, #FF564D, #FF0098)",
                              width: "35px",
                              height: "8px",
                              borderRadius: "20px",
                            }}
                          ></Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="left">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"600"}
                          color="white"
                        >
                          1000tps
                        </Typography>
                        <Box
                          sx={{
                            bgcolor: "#211520",
                            width: "100px",
                            height: "8px",
                            position: "relative",
                            borderRadius: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              background:
                                "linear-gradient(90deg,#FFB000, #FF564D, #FF0098)",
                              width: "45px",
                              height: "8px",
                              borderRadius: "20px",
                            }}
                          ></Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="left">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"600"}
                          color="white"
                        >
                          2000tps
                        </Typography>
                        <Box
                          sx={{
                            bgcolor: "#211520",
                            width: "100px",
                            height: "8px",
                            position: "relative",
                            borderRadius: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              background:
                                "linear-gradient(90deg,#FFB000, #FF564D, #FF0098)",
                              width: "85px",
                              height: "8px",
                              borderRadius: "20px",
                            }}
                          ></Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Transaction fees
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          color={"red"}
                          fontSize={"14px"}
                        >
                          High
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          color={"red"}
                          fontSize={"14px"}
                        >
                          High
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          color={"green"}
                          fontSize={"14px"}
                        >
                          Low
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          color={"green"}
                          fontSize={"14px"}
                        >
                          Low
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Consensus
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          POW
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          POW{"->"}POS
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          RPCA
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          POW
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Storage
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          DLT
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          DLT
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          DLT
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Typography
                          fontFamily={"sora"}
                          fontWeight={"300"}
                          fontSize={"14px"}
                        >
                          DLT
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Application layer
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ color: "white" }}
                        component="th"
                        scope="row"
                      >
                        Environment friendly
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkGreen} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        <Box component={"img"} src={checkRed} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            {/* table-end */}
          </Container>
          {/* section-4-end */}
        </Container>
        {/* section-5-start */}
        <Grid
          container
          sx={{
            background: "#1f1f1f",
            // minWidth: "100dvw",
            bgcolor: "#13060e",
            py: "20px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#13060e",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              fontFamily={"goodtimes"}
              color="white"
              fontSize={{ md: "34px", xs: "14px" }}
            >
              High Quality NFT Collection
            </Typography>
            <Typography
              fontFamily={"sora"}
              color="white"
              fontSize={"14px"}
              sx={{
                opacity: "60%",
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              A 890 piece custom collection is joining the NFT space on Fieres.
            </Typography>
            <Button
              variant="text"
              sx={{
                background:
                  "linear-gradient(90deg,#FF6F37 6.82%, #FF2676 35.9%, #B801AA 68.08%, #7101BC 101.4%)",
                borderRadius: "50px",
              }}
            >
              <Typography
                variant="button"
                color="white"
                sx={{ px: "10px", py: "4px" }}
              >
                Exploren NFT
              </Typography>
            </Button>
            <Box
              component={"img"}
              src={sec5Photo}
              sx={{ width: "80%", py: "20px" }}
            />
          </Container>
        </Grid>
        {/* section-5-start */}
        {/* section-6-start */}
        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column" },
              gap: "50px",
            }}
          >
            <Box
              component={"img"}
              src={sec6Photo}
              sx={{
                width: { lg: "500px", sm: "40%", xs: "80%" },
                opacity: "70%",
              }}
            />
            <Box
              sx={{
                width: { md: "50%", xs: "100%" },
                display: "flex",
                justifyContent: { lg: "flex-start", xs: "center" },
                alignItems: { lg: "flex-start", xs: "center" },
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                fontFamily={"goodtimes"}
                color="white"
                fontSize={{ lg: "34px", xs: "16px" }}
                // width={"500px"}
              >
                Fierex is able to handle{" "}
                <Typography
                  component={"span"}
                  fontFamily={"goodtimes"}
                  // color="white"
                  fontSize={{ lg: "34px", xs: "16px" }}
                  sx={{
                    background:
                      "linear-gradient(90deg,#FFB000, #FF6045, #9038FF, #FF0098)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  10
                </Typography>{" "}
                <Typography
                  component={"span"}
                  fontFamily={"goodtimes"}
                  // color="white"
                  fontSize={{ lg: "34px", xs: "16px" }}
                  sx={{
                    background:
                      "linear-gradient(90deg,#FFB000, #FF6045, #9038FF, #FF0098)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Times
                </Typography>{" "}
                more transactions than swift
              </Typography>
              {/* card-start */}
              <Box
                sx={{
                  bgcolor: "#170814",
                  width: { md: "500px", xs: "auto" },
                  p: "10px",
                  borderRadius: "10px",
                  mt: { xs: "20px", lg: "0px" },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#140710",
                    p: "10px",
                    borderRadius: "10px",
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(255, 255, 255, 0.07)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  {/* item-start */}
                  <Box
                    sx={{
                      bgcolor: "#140710",
                      width: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      p: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box component={"img"} src={btcCard} />
                      <Typography color="white">Bitcoin</Typography>
                    </Box>
                    <Typography color="white" sx={{ opacity: "70%" }}>
                      2000 tps
                    </Typography>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(110deg, #FFB000 -25.01%, #FF564D 31.16%, #FF0098 87.36%)",
                        height: "20px",
                        width: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                    </Box>
                  </Box>
                  {/* item-end */}
                  {/* item-start */}
                  <Box
                    sx={{
                      bgcolor: "#140710",
                      width: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      p: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box component={"img"} src={ethCard} />
                      <Typography color="white">Bitcoin</Typography>
                    </Box>
                    <Typography color="white" sx={{ opacity: "70%" }}>
                      1000 tps
                    </Typography>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(110deg, #FFB000 -25.01%, #FF564D 31.16%, #FF0098 87.36%)",
                        height: "20px",
                        width: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                    </Box>
                  </Box>
                  {/* item-end */}
                  {/* item-start */}
                  <Box
                    sx={{
                      bgcolor: "#140710",
                      width: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      p: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box component={"img"} src={rippleCard} />
                      <Typography color="white">Ripple</Typography>
                    </Box>
                    <Typography color="white" sx={{ opacity: "70%" }}>
                      1000 tps
                    </Typography>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(110deg, #FFB000 -25.01%, #FF564D 31.16%, #FF0098 87.36%)",
                        height: "20px",
                        width: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                    </Box>
                  </Box>
                  {/* item-end */}
                  {/* item-start */}
                  <Box
                    sx={{
                      bgcolor: "#140710",
                      width: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      p: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box component={"img"} src={fieroCard} />
                      <Typography color="white">Fiero</Typography>
                    </Box>
                    <Typography color="white" sx={{ opacity: "70%" }}>
                      10 tps
                    </Typography>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(110deg, #FFB000 -25.01%, #FF564D 31.16%, #FF0098 87.36%)",
                        height: "20px",
                        width: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                    </Box>
                  </Box>
                  {/* item-end */}
                </Box>
              </Box>
              {/* card-start */}
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.60)",
                  fontWeight: "300",
                  width: "89%",
                  mt: "20px",
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.60)",
                  fontWeight: "300",
                  width: "89%",
                  mt: "20px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. galley of type and scrambled it to make a type
                specimen book.
              </Typography>
              <Button
                variant="text"
                sx={{
                  background:
                    "linear-gradient(90deg,#FF6F37 6.82%, #FF2676 35.9%, #B801AA 68.08%, #7101BC 101.4%)",

                  px: "25px",
                  py: "10px",
                  borderRadius: "20px",
                  mt: "20px",
                }}
              >
                <Typography
                  variant="button"
                  color="white"
                  fontFamily={"sora"}
                  fontWeight={"600"}
                >
                  Explore Dapps
                </Typography>
              </Button>
            </Box>
          </Container>
        </Grid>
        {/* section-6-end */}
        {/* section-7-start */}
        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "column", xs: "column" },
              gap: "50px",
            }}
          >
            {/* heading-start */}
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: { lg: "50%", xs: "70%" } }}>
                <Typography
                  color="white"
                  fontFamily="oxanium"
                  fontSize={{ md: "32px", sx: "18px" }}
                  fontWeight={"700"}
                >
                  See the roadmap to fieres
                </Typography>
                <Typography
                  color="white"
                  fontFamily={"sora"}
                  fontSize={{ md: "14px", xs: "10px" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. galley of type and scrambled it to make
                  a type specimen book.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "30%", md: "50%" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "30px",
                }}
              >
                <Box
                  sx={{
                    height: { md: "45px", xs: "30px" },
                    width: { md: "45px", xs: "30px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    border: "1px solid white",
                    borderColor: "#9038FF",
                  }}
                >
                  <ArrowBackIosNewIcon
                    sx={{
                      color: "white",
                      fontSize: { xs: "14px", md: "auto" },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    height: { md: "45px", xs: "30px" },
                    width: { md: "45px", xs: "30px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    border: "1px solid white",
                    opacity: "50%",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      color: "white",
                      fontSize: { xs: "14px", md: "auto" },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            {/* heading-end */}
            {/* main-container-start */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                height: { md: "325px", xs: "auto" },
                flexWrap: { md: "nowrap", xs: "wrap" },
                // overflow: "scroll",
                maxWidth: { xs: "100%", md: "auto" },
                // bgcolor: "blue",
                justifyContent: "center",
                alignItems: "center",
              }}
              component={"div"}
            >
              <Box
                component={"div"}
                sx={{
                  background: { xs: "#210b18", lg: `url(${cRec})` },
                  width: "403px",
                  height: { lg: "323px", xs: "auto" },
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  paddingTop: "60px",
                  paddingBottom: { xs: "60px", lg: "0px" },
                  gap: "15px",
                  px: "20px",
                  borderRadius: { xs: "20px", md: "0px" },
                }}
              >
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"700"}
                  fontSize={{ lg: "24px", xs: "12px" }}
                  color="white"
                >
                  QUATER 1
                </Typography>
                <Typography
                  fontFamily={"sora"}
                  fontSize={"14px"}
                  sx={{ color: "rgba(255, 255, 255, 0.60)" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. dummy text ever since the 1500s, when an
                  unknown printer
                </Typography>
              </Box>
              <Box
                sx={{
                  background: { xs: "#210b18", lg: `url(${cRec})` },
                  width: "403px",
                  height: { lg: "323px", xs: "auto" },
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  paddingTop: "60px",
                  paddingBottom: { xs: "60px", lg: "0px" },
                  gap: "15px",
                  px: "20px",
                  borderRadius: { xs: "20px", md: "0px" },
                }}
              >
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"700"}
                  fontSize={{ lg: "24px", xs: "12px" }}
                  color="white"
                >
                  QUATER 1
                </Typography>
                <Typography
                  fontFamily={"sora"}
                  fontSize={"14px"}
                  sx={{ color: "rgba(255, 255, 255, 0.60)" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. dummy text ever since the 1500s, when an
                  unknown printer
                </Typography>
              </Box>
              <Box
                sx={{
                  background: { xs: "#210b18", lg: `url(${cRec})` },
                  width: "403px",
                  height: { lg: "323px", xs: "auto" },
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  paddingTop: "60px",
                  paddingBottom: { xs: "60px", lg: "0px" },
                  gap: "15px",
                  px: "20px",
                  borderRadius: { xs: "20px", md: "0px" },
                }}
              >
                <Typography
                  fontFamily={"goodtimes"}
                  fontWeight={"700"}
                  fontSize={{ lg: "24px", xs: "12px" }}
                  color="white"
                >
                  QUATER 1
                </Typography>
                <Typography
                  fontFamily={"sora"}
                  fontSize={"14px"}
                  sx={{ color: "rgba(255, 255, 255, 0.60)" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. dummy text ever since the 1500s, when an
                  unknown printer
                </Typography>
              </Box>
            </Box>
            {/* main-container-end */}
            <Box
              component={"img"}
              src={Ctimeline}
              sx={{ display: { xs: "none", lg: "flex" }, width: "100%" }}
            />
            <Typography
              color="white"
              fontFamily={"romantimes"}
              sx={{
                position: "relative",
                top: "-40px",
                display: { xs: "none", lg: "flex" },
              }}
            >
              2023
            </Typography>
          </Container>
        </Grid>

        {/* section-7-end */}
        {/* section-8-start */}
        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "column", xs: "column" },
              gap: "10px",
            }}
          >
            {/* item-start */}
            <Box
              sx={{
                bgcolor: "#170b14",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                px: "20px",
                borderRadius: "10px",
                height: "60px",
              }}
            >
              <Typography
                color="white"
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily={"sora"}
                fontWeight={"500"}
              >
                Website for Fieres{" "}
              </Typography>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#ff4727",
                  px: { md: "15px", xs: "10px" },
                  py: { md: "10px", xs: "5px" },
                  my: "5px",
                }}
              >
                <Typography
                  color="white"
                  sx={{ fontSize: { xs: "14px", md: "auto" } }}
                >
                  COMING SOON
                </Typography>
              </Button>
            </Box>
            {/* item-end */}
            {/* item-start */}
            <Box
              sx={{
                bgcolor: "#170b14",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                px: "20px",
                borderRadius: "10px",
                height: "60px",
              }}
            >
              <Typography
                color="white"
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily={"sora"}
                fontWeight={"500"}
              >
                White Paper launch{" "}
              </Typography>

              <Box sx={{ display: "flex", gap: "40px" }}>
                <Typography color="white" sx={{ color: "red" }}>
                  NEW
                </Typography>
                <ArrowOutwardIcon sx={{ color: "white" }} />
              </Box>
            </Box>
            {/* item-end */}
            {/* item-start */}
            <Box
              sx={{
                bgcolor: "#170b14",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                px: "20px",
                borderRadius: "10px",
                height: "60px",
              }}
            >
              <Typography
                color="white"
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily={"sora"}
                fontWeight={"500"}
              >
                Website for Fieres{" "}
              </Typography>
            </Box>
            {/* item-end */}
            {/* item-start */}
            <Box
              sx={{
                bgcolor: "#170b14",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                px: "20px",
                borderRadius: "10px",
                height: "60px",
              }}
            >
              <Typography
                color="white"
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily={"sora"}
                fontWeight={"500"}
              >
                ICO Dashboard with multiple tranches{" "}
              </Typography>
            </Box>
            {/* item-end */}
            {/* item-start */}
            <Box
              sx={{
                bgcolor: "#170b14",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                px: "20px",
                borderRadius: "10px",
                height: "60px",
              }}
            >
              <Typography
                color="white"
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily={"sora"}
                fontWeight={"500"}
              >
                DEX launch with GraphQL, token creator, staking and IDO
                launchpad{" "}
              </Typography>
            </Box>
            {/* item-end */}
          </Container>
        </Grid>
        {/* section-8-end */}
        {/* section-9-start */}
        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column-reverse" },
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography
                fontFamily={"goodtimes"}
                color={"white"}
                fontSize={"30px"}
              >
                <Typography
                  fontFamily={"goodtimes"}
                  fontSize={"30px"}
                  sx={{
                    background:
                      "linear-gradient(90deg,#FFB000 -6.61%, #FF6045 10.91%, #9038FF 31.85%, #FF0098 52.81%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Utilize Fieres
                </Typography>{" "}
                Blockchain technology
              </Typography>
              <Typography
                fontFamily={"sora"}
                sx={{ color: "rgba(255, 255, 255, 0.60)" }}
                fontWeight={"300"}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
              <Typography
                fontFamily={"sora"}
                sx={{ color: "rgba(255, 255, 255, 0.60)" }}
                fontWeight={"300"}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. galley of type and scrambled it to make a type
                specimen book.
              </Typography>
              <Button
                variant="text"
                sx={{
                  background:
                    "linear-gradient(90deg,#FF6F37 6.82%, #FF2676 35.9%, #B801AA 68.08%, #7101BC 101.4%)",
                  width: "180px",
                  py: "10px",
                  borderRadius: "20px",
                }}
              >
                <Typography color="white">Explorer Dapps</Typography>
              </Button>
            </Box>
            <Box
              component={"img"}
              src={sec9Photo}
              sx={{ width: { xs: "80%", md: "auto" } }}
            />
          </Container>
        </Grid>
        {/* section-9-end*/}
        {/* section-10-start */}
        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column-reverse" },
              gap: "10px",
            }}
          >
            {/* header-start */}

            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  indicatorColor="secondary"
                  textColor="white"
                >
                  <Tab
                    sx={{
                      color: "white",
                      mr: { lg: "100px", xs: "25px" },
                      fontFamily: "goodtimes",
                      fontSize: { xs: "18px", lg: "32px" },
                    }}
                    label="NEWS"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      color: "white",
                      fontFamily: "goodtimes",
                      fontSize: { xs: "18px", lg: "32px" },
                    }}
                    label="VIDEOS"
                    {...a11yProps(1)}
                  />
                </Tabs>
                <Box
                  sx={{
                    width: { xs: "30%", md: "50%" },
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    gap: "30px",
                    mb: "12px",
                  }}
                >
                  <Box
                    sx={{
                      height: { md: "45px", xs: "30px" },
                      width: { md: "45px", xs: "30px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "100%",
                      border: "1px solid white",
                      borderColor: "#9038FF",
                    }}
                  >
                    <ArrowBackIosNewIcon
                      sx={{
                        color: "white",
                        fontSize: { xs: "14px", md: "auto" },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: { md: "45px", xs: "30px" },
                      width: { md: "45px", xs: "30px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "100%",
                      border: "1px solid white",
                      opacity: "50%",
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        color: "white",
                        fontSize: { xs: "14px", md: "auto" },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box
                  sx={{
                    bgcolor: "#0d010a",
                    height: "300px",
                    py: "20px",
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                  }}
                >
                  {Array(10)
                    .fill(1)
                    .map((e, i) => (
                      <Box
                        key={i}
                        component={"div"}
                        sx={{
                          height: "100%",
                          width: "300px",
                          bgcolor: "#160a14",
                          borderRadius: "20px",
                        }}
                      >
                        <Box
                          key={i}
                          component={"div"}
                          sx={{
                            height: "100%",
                            width: "300px",
                            bgcolor: "#160a14",
                            borderRadius: "20px",
                            p: "20px",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            // console.log(cardBlurHandler(e.currentTarget, i));
                            // console.log(e.currentTarget.);
                          }}
                          onMouseLeave={
                            (e) => null
                            // cardBlurHandler(e.currentTarget, i)
                          }
                        >
                          <Fade in={isBlur}>
                            <Box
                              sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "20px",
                                backdropFilter: "blur(10px)",
                                // background: "rgba(255, 255, 255, 1)",
                                zIndex: "5",
                                position: "absolute",
                                left: 0,
                                top: 0,
                                display: "flex",
                              }}
                            ></Box>
                          </Fade>
                          <Typography
                            fontFamily={"sora"}
                            fontWeight={"400"}
                            fontSize={"12px"}
                            color="white"
                          >
                            1 Feb 2023
                          </Typography>
                          <Typography
                            fontFamily={"goodtimes"}
                            fontWeight={"700"}
                            color={"white"}
                            fontSize={"18px"}
                          >
                            QUATER
                          </Typography>
                          <Typography
                            fontFamily={"sora"}
                            fontWeight={"400"}
                            fontSize={"12px"}
                            color="rgba(255, 255, 255, 0.60)"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. dummy text ever since the
                            1500s, when an unknown printer Lorem Ipsum is simply
                            dummy text of the printing and type setting
                            industry. dummy text ever since the 1500s, when an
                            unknown printer Lorem Ipsum.
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}></CustomTabPanel>
            </Box>
            {/* header-end */}
          </Container>
        </Grid>
        {/* section-10-end */}
        {/* section-11-start */}

        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column-reverse" },
              gap: "10px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Tabs
                  value={value1}
                  onChange={handleChange1}
                  aria-label="basic tabs example"
                  indicatorColor="secondary"
                  textColor="white"
                >
                  <Tab
                    sx={{
                      color: "white",
                      mr: { lg: "100px", xs: "25px" },
                      fontFamily: "goodtimes",
                      fontSize: { xs: "18px", lg: "32px" },
                    }}
                    label="NEWS"
                    {...a11yProps1(0)}
                  />
                  <Tab
                    sx={{
                      color: "white",
                      fontFamily: "goodtimes",
                      fontSize: { xs: "18px", lg: "32px" },
                    }}
                    label="VIDEOS"
                    {...a11yProps1(1)}
                  />
                </Tabs>
                <Box
                  sx={{
                    width: { xs: "30%", md: "50%" },
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    gap: "30px",
                    mb: "12px",
                  }}
                >
                  <Box
                    sx={{
                      height: { md: "45px", xs: "30px" },
                      width: { md: "45px", xs: "30px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "100%",
                      border: "1px solid white",
                      borderColor: "#9038FF",
                    }}
                  >
                    <ArrowBackIosNewIcon
                      sx={{
                        color: "white",
                        fontSize: { xs: "14px", md: "auto" },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: { md: "45px", xs: "30px" },
                      width: { md: "45px", xs: "30px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "100%",
                      border: "1px solid white",
                      opacity: "50%",
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        color: "white",
                        fontSize: { xs: "14px", md: "auto" },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <CustomTabPanel1 value={value1} index={0}>
                <Box
                  sx={{
                    bgcolor: "#0d010a",
                    height: "430px",
                    py: "20px",
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                  }}
                >
                  {Array(10)
                    .fill(1)
                    .map((e, i) => (
                      <Box
                        key={i}
                        component={"div"}
                        sx={{
                          height: "100%",
                          width: "300px",
                          bgcolor: "#160a14",
                          borderRadius: "20px",
                        }}
                      >
                        <Box
                          key={i}
                          component={"div"}
                          sx={{
                            height: "100%",
                            width: "300px",
                            bgcolor: "#160a14",
                            borderRadius: "20px",
                            // p: "20px",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            // console.log(cardBlurHandler(e.currentTarget, i));
                            // console.log(e.currentTarget.attributes);
                          }}
                          onMouseLeave={
                            (e) => null
                            // cardBlurHandler(e.currentTarget, i)
                          }
                        >
                          <Fade in={isBlur}>
                            <Box
                              sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "20px",
                                backdropFilter: "blur(10px)",
                                // background: "rgba(255, 255, 255, 1)",
                                zIndex: "5",
                                position: "absolute",
                                left: 0,
                                top: 0,
                                display: "flex",
                              }}
                            ></Box>
                          </Fade>
                          <Box
                            sx={{
                              // bgcolor: "blue",
                              width: "100%",
                              height: "70%",
                            }}
                          >
                            <Box
                              component={"img"}
                              src={sec11cardPhoto}
                              sx={{ width: "100%" }}
                            />
                          </Box>
                          <Box sx={{ p: "10px" }}>
                            <Typography
                              fontFamily={"sora"}
                              fontWeight={"400"}
                              fontSize={"12px"}
                              color="white"
                            >
                              1 Feb 2023
                            </Typography>
                            <Typography
                              fontFamily={"goodtimes"}
                              fontWeight={"700"}
                              color={"white"}
                              fontSize={"18px"}
                            >
                              QUATER
                            </Typography>
                            <Typography
                              fontFamily={"sora"}
                              fontWeight={"400"}
                              fontSize={"12px"}
                              color="rgba(255, 255, 255, 0.60)"
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. dummy text ever since
                              the 1500s.
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                </Box>
              </CustomTabPanel1>
              <CustomTabPanel1 value={value} index={1}></CustomTabPanel1>
            </Box>
            {/* header-end */}
          </Container>
        </Grid>
        {/* section-11-end */}
        {/* section-12-start */}
        <Grid
          container
          sx={{
            background: "#0d0109",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#0d0109",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column-reverse" },
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: { lg: "40%", xs: "100%" },
                bgcolor: "#0e0208",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "20px",
              }}
            >
              <Typography
                fontFamily={"goodtimes"}
                color="white"
                fontSize={"28px"}
              >
                The Secure app to store crypto yourself
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#0e0208",
                  // justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{ color: "rgba(255, 255, 255, 0.25)" }}
                  />
                  <Typography
                    fontFamily={"sora"}
                    color="white"
                    fontSize={"14px"}
                  >
                    All your digital assets in one place
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{ color: "rgba(255, 255, 255, 0.25)" }}
                  />
                  <Typography
                    fontFamily={"sora"}
                    color="white"
                    fontSize={"14px"}
                  >
                    Use Decentralized Apps
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CheckCircleIcon
                    sx={{ color: "rgba(255, 255, 255, 0.25)" }}
                  />
                  <Typography
                    fontFamily={"sora"}
                    color="white"
                    fontSize={"14px"}
                  >
                    Pay friends, not addresses
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  background:
                    "linear-gradient(93deg, #FF6F37 6.82%, #FF2676 35.9%, #B801AA 68.08%, #7101BC 101.4%)",
                  height: "45px",
                  width: "110px",
                  borderRadius: "25px",
                }}
              >
                <Typography variant="button" fontFamily={"sora"} color="white">
                  Explore{" "}
                </Typography>
              </Button>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  flexDirection: { xs: "row" },
                }}
              >
                <Button sx={{ bgcolor: "#0e0208" }}>
                  <Box
                    component={"img"}
                    src={appleStore}
                    sx={{ width: { lg: "170px", xs: "140px" } }}
                  />
                </Button>
                <Button sx={{ bgcolor: "#0e0208" }}>
                  <Box
                    component={"img"}
                    src={playStore}
                    sx={{ width: { lg: "170px", xs: "140px" } }}
                  />
                </Button>
              </Box>
            </Box>

            <Box sx={{ width: { lg: "60%", xs: "80%" } }}>
              <Box
                component={"img"}
                src={mac}
                sx={{ width: { lg: "100%", xs: "100%" } }}
              />
            </Box>
          </Container>
        </Grid>
        {/* section-12-end */}
        {/* footer-start */}
        <Grid
          container
          sx={{
            background: "#12050e",
            // minWidth: "100dvw",

            py: "20px",
            mt: "50px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#12050e",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // flexDirection: { lg: "row", xs: "column-reverse" },
              flexWrap: { lg: "nowrap", xs: "wrap" },
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: { lg: "33.3%", xs: "100%" },
                bgcolor: "#12050e",
                height: { lg: "300px", xs: "auto" },
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  bgcolor: "#12050e",
                  width: "180px",
                }}
              >
                <Box component={"img"} src={fLogo} />
                <Typography
                  fontFamily={"goodtimes"}
                  color="white"
                  fontSize={"20px"}
                  sx={{
                    background:
                      "linear-gradient(93deg, #FFB000 -20.75%, #FF564D 11.84%, #FF0098 53.76%, #5D00C1 102.96%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  FIERES
                </Typography>
              </Box>
              <Typography
                color={"rgba(255, 255, 255, 0.60)"}
                fontFamily={"sora"}
                fontWeight={"400"}
                fontSize={"14px"}
                sx={{ width: { xs: "auto", lg: "300px" } }}
              >
                Decentralizing and democratizing education to build the most
                interactive, immersive and insightful education metaverse, ever!
              </Typography>
            </Box>
            <Box
              sx={{
                width: { lg: "33.3%", xs: "100%" },
                bgcolor: "#12050e",
                height: { lg: "300px", xs: "auto" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button sx={{ width: "fit-content" }}>
                <Typography sx={{ color: "white", fontWeight: "800" }}>
                  Quick Links
                </Typography>
              </Button>
              <Button sx={{ width: "fit-content" }}>
                <Typography
                  sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
                >
                  Home
                </Typography>
              </Button>
              <Button sx={{ width: "fit-content" }}>
                <Typography
                  sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
                >
                  Docs
                </Typography>
              </Button>
              <Button sx={{ width: "fit-content" }}>
                <Typography
                  sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
                >
                  FAQs
                </Typography>
              </Button>
              <Button sx={{ width: "fit-content" }}>
                <Typography
                  sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
                >
                  Terms & Condition
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                // width: { lg: "33.3%", xs: "100%" },
                bgcolor: "#12050e",
                height: { lg: "300px", xs: "auto" },
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                // textAlign: "left",
              }}
            >
              <Button sx={{ width: "fit-content" }}>
                <Typography sx={{ color: "white", fontWeight: "800" }}>
                  Contact Us
                </Typography>
              </Button>
              <Button sx={{ width: "fit-content" }}>
                <Typography
                  sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
                >
                  Contact@fieres.com
                </Typography>
              </Button>
              <Box sx={{ pt: "10px", gap: "10px", display: "flex" }}>
                <TwitterIcon
                  sx={{
                    color: "#ff26b6",
                    height: "35px",
                    width: "35px",
                    borderRadius: "35px",
                    p: "7px",
                    bgcolor: "#1e111a",
                  }}
                />
                <TelegramIcon
                  sx={{
                    color: "rgba(255, 255, 255, 0.25)",
                    height: "35px",
                    width: "35px",
                    borderRadius: "35px",
                    p: "7px",
                    bgcolor: "#1e111a",
                  }}
                />
                <FacebookIcon
                  sx={{
                    color: "rgba(255, 255, 255, 0.25)",
                    height: "35px",
                    width: "35px",
                    borderRadius: "35px",
                    p: "7px",
                    bgcolor: "#1e111a",
                  }}
                />
                <YouTubeIcon
                  sx={{
                    color: "rgba(255, 255, 255, 0.25)",
                    height: "35px",
                    width: "35px",
                    borderRadius: "35px",
                    p: "7px",
                    bgcolor: "#1e111a",
                  }}
                />
                <LinkedInIcon
                  sx={{
                    color: "rgba(255, 255, 255, 0.25)",
                    height: "35px",
                    width: "35px",
                    borderRadius: "35px",
                    p: "7px",
                    bgcolor: "#1e111a",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Grid>
        {/* footer-end */}
        {/* privacy-start */}
        <Grid
          container
          sx={{
            background: "#12050e",
            // minWidth: "100dvw",

            py: "20px",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "#12050e",
              display: "flex",
              justifyContent: { lg: "space-between", xs: "center" },
              alignItems: "center",
              // flexDirection: { lg: "row", xs: "column-reverse" },
              flexWrap: { lg: "nowrap", xs: "wrap" },
              gap: "10px",
              borderTop: "1px",
              borderTopColor: "rgba(255, 255, 255, 0.03)",
              borderTopStyle: "solid",
              pt: "10px",
            }}
          >
            <Typography fontFamily={"sora"} fontSize={"12px"} color={"white"}>
              © 2023 Fieres All Rights Reserved
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography fontFamily={"sora"} fontSize={"12px"} color={"white"}>
                Privacy Policy
              </Typography>
              <Typography fontFamily={"sora"} fontSize={"12px"} color={"white"}>
                Token Disclaimer
              </Typography>
            </Box>
          </Container>
        </Grid>
        {/* privacy-end */}
      </Box>
    </>
  );
};

export default LandingPage;
