import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      contact,
    };
    const response = await axios.post('http://localhost:8080/patient/patientmessage', data);
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate("/");

    } else {
      toast.error(response.data.message);

    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");


  return (
    <Box py={4} sx={{ backgroundColor: '#ced3db' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1 }} />
              <Typography variant="body1">
                Email: smartha@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body1">
                Phone: +91-9862164447
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Delhi
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1 }} />
                <Typography variant="body1">
                Indiranagar
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Map
          </Typography>
          <Box height={400} mt={2}>
            {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baneshwor+(Bharosha%20Hospital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.981923004427!2d77.17310784363752!3d28.63738934348791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02bcbb3b6d6b%3A0xaac7850da2a43dd9!2sRajinder%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sca!4v1707712285410!5m2!1sen!2sca" width="850" height="400"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  fullWidth
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
