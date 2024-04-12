import { Box, Container, Grid, Link } from '@mui/material';
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import logo from "../assets/logo.png";
    
const Footer = () => {
  return (  
    <footer className="py-5">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6} md={2} mb={3}>
            <Box>
              <h5>Contact Us</h5>
            </Box>
          </Grid>

          <Grid item xs={6} md={2} mb={3}>
            <Box>
              <h5>Doctors</h5>
            </Box>
          </Grid>

          <Grid item xs={6} md={2} mb={3}>
            <Box>
              <h5>Services</h5>
            </Box>
          </Grid>

          <Grid item xs={6} md={2} mb={3}>
            <Box>
              <h5>Ambulance</h5>
            </Box>
          </Grid>

          <Grid item xs={6} md={2} mb={3}>
            <Box>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <Link href="#" className="link-dark">
                    <img src={linkedin} alt="LinkedIn" width="50" height="50" />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link href="#" className="link-dark">
                    <img src={twitter} alt="Twitter" width="50" height="40" />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link href="#" className="link-dark">
                    <img src={facebook} alt="Facebook" width="50" height="30" />
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            py: 2,
            my: 2
          }}
        >
          <p style={{ fontSize: '1.5rem' }}>&copy; 2024 HMS</p>
         
          <img style={{
                borderRadius: "60%",
                width: 100,
                height: 100,
              }}src={logo} alt='logo'/>    
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;