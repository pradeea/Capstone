import { Grid, Box} from "@mui/material";
import Navbar from "./Components/User/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import "./App.css";
import LoginForm from "./Components/User/Login/Login";
import SignUpForm from "./Components/User/Login/Signin";
import Screen from "./Components/User/pages/homecontent/Homepage";
import Doctorlogin from "./Components/User/Login/Doctorlogin";

import { useState} from "react";


function App() {


  return (
      
    <Grid container >
        <>
          <Grid item xs={12} >
            <Navbar sx={{ backgroundColor:"#acb2bd"}} />
          </Grid>
          <Grid item xs={12} sx={{ minHeight: '80vh' , backgroundColor:"#dcfcec",  }}>
          <Box>

              <Routes>
                <Route path="/" Component={Screen} />
                <Route path="/login" Component={LoginForm} />
                <Route path="/doctorlogin" Component={Doctorlogin} />
                <Route path="/SignUp" Component={SignUpForm} />
               </Routes>

           </Box>
          </Grid>
          <Grid item xs={12} sx={{height:'10vh'}}>
            {/* <Footer /> */}
          </Grid>
        </>
      {/* )} */}
    </Grid>
  );
};




export default App;