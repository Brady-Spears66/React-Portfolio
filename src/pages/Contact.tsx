import { Box, Container, TextField, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceId = "service_ilu6ras";
  const templateId = "contact_form";
  const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_API_KEY;

  // @ts-ignore
  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();

    const uniqueMessageId = uuidv4();

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
      message_id: uniqueMessageId,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSuccessMessage("Your message has been sent successfully");
        setErrorMessage("");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        setErrorMessage(
          "There was an issue sending your message. Please try again."
        );
        setSuccessMessage("");
        console.error("EmailJS Error: ", error);
      });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative", // Added position relative
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 2, sm: 3 },
            py: 0,
            height: "100%", // Take up full height
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: "100%",
                margin: 0,
                "& .MuiGrid-item": {
                  px: 0,
                },
              }}
            >
              <Grid size={{ xs: 12 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", sm: "3rem" },
                    textAlign: "center",
                    mb: 4,
                    width: "100%",
                  }}
                >
                  Contact Me
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="medium"
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="medium"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Write a message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "rgb(25, 190, 207)",
                    color: "black",
                    "&:focus": {
                      outline: "none",
                    },
                    "&:focus-visible": {
                      outline: "none",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
              {successMessage && (
                <Grid size={{ xs: 12 }}>
                  <Typography
                    sx={{ color: "green", mt: 2, textAlign: "center" }}
                  >
                    {successMessage}
                  </Typography>
                </Grid>
              )}

              {errorMessage && (
                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ color: "red", mt: 2, textAlign: "center" }}>
                    {errorMessage}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
