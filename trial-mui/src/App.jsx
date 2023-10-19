import React from "react";
import NavBar from "./component/NavBar";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import heroImage from "./assets/hero.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import heroSubCard from "./assets/hero-sub.png";
const App = () => {
  return (
    <Container maxWidth="lg" sx={{}}>
      <NavBar />
      {/* hero-section-start */}
      <Grid2
        container
        sx={{
          mt: "60px",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            bgcolor: "red",
            width: "45%",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            fontSize={"30px"}
            width={"90%"}
            fontWeight={"700"}
          >
            Buy, Sell or Exchange your Cryptocurrency with most secure plateform
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "#78819F", lineHeight: "15px", fontFamily: "poppins" }}
          >
            Lorem ipsum dolor sit amet consectetur. Vehicula elementum ultrices
            dictum sit ornare diam. Dictum mattis iaculis in amet orci. Senectus
            sed scelerisque.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ec1f24",
              ":hover": { bgcolor: "red", fontFamily: "poppins" },
            }}
          >
            Get Started
          </Button>
          <Box sx={{ display: "flex", gap: "10px", mt: "20px" }}>
            {Array(3)
              .fill(1)
              .map((e) => (
                <>
                  <Paper
                    variant="div"
                    sx={{
                      backgroundImage: `url(${heroSubCard})`,
                      height: "100px",
                      width: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                      gap: "4px",
                      backgroundSize: "contain",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "#EC1F24", fontSize: "25px" }}
                    >
                      25k
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#78819F", fontSize: "15px" }}
                    >
                      Happy <br /> Customers
                    </Typography>
                  </Paper>
                </>
              ))}
          </Box>
        </Box>
        <Box
          component="img"
          src={heroImage}
          sx={{
            width: { xs: "200px", sm: "400px", md: "50%" },
            objectFit: "contain",
          }}
        ></Box>
      </Grid2>
      {/* hero-section-end */}
    </Container>
  );
};

export default App;
