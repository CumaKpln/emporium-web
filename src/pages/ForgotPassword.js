import React, { useState } from "react";
import Stack from "@mui/joy/Stack";
import "../styles/ForgotPassword.css";
import Container from "react-bootstrap/Container";
import Card from "@mui/material/Card";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Button from "@mui/joy/Button";
import { toast } from "react-toastify";
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../images/logo.png"


export default function ForgotPassword() {
    const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    status: "initial",
    errorMessage: "",
  });
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isEmailValid = (email) => {
    return emailRegex.test(email);
  };
  const users = useSelector((state) => state.user.users);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!isEmailValid(data.email)) {
      setData({ ...data, status: "failure", errorMessage: "Geçersiz e-posta formatı" });
      return;
    }

    setData((current) => ({ ...current, status: "loading" }));

    if (!isEmailValid(data.email)) {
      setData({ ...data, status: "failure", errorMessage: "Geçersiz e-posta formatı" });
      return;
    }

    const user = users.find((user) => user.email === data.email);

    if (user) {
      toast.success("Doğrulama maili gönderildi giriş sayfasına",{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
        
      })
      setTimeout(() => {
        navigate("/giriş");
      }, 1500);
      setData({ email: "", status: "sent", errorMessage: "" });
    }
    else {
      setData({ ...data, status: "failure", errorMessage: "Böyle bir eposta bulunamadı" });
    }
   
  };

  return (
    <div>
      <Navbar />
      <Container className="center-container">
        <Card className="custom-card " sx={{ backgroundColor: "#E9DAD9" }}>
          <form onSubmit={handleSubmit} id="demo">
            <div className="d-flex justify-content-center align-items-start mt-3">
              <div className="logo mb-3">
                <img
                  src={logo}
                  className="img-fluid logo-img"
                  alt="---"
                />
              </div>
            </div>

            <FormControl>
              <FormLabel
                sx={(theme) => ({
                  "--FormLabel-color": theme.vars.palette.primary.plainColor,
                })}
              ></FormLabel>

              <div className="login-form">
                <Stack>
                  <TextField
                    label="E-Posta"
                    id="standard-size-normal"
                    defaultValue="Normal"
                    variant="standard"
                    maxRows={5}
                    className=""
                    placeholder="mail@gmail.com"
                    name="email"
                    required
                    value={data.email}
                    onChange={(event) =>
                      setData({ email: event.target.value, status: "initial", errorMessage: "" })
                    }
                    error={data.status === "failure"}
                  />

                  <Button
                    variant="solid"
                    type="submit"
                    sx={{
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      position: "absolute",
                      right: "0",
                      top: "100px",
                      backgroundColor: "#f0ad4e",
                    }}
                    
                  >
                    Gönder
                  </Button>
                  {data.status === "failure" && (
                    <FormHelperText
                      sx={(theme) => ({
                        color: theme.vars.palette.danger[400],
                      })}
                    >
                      {data.errorMessage}
                    </FormHelperText>
                  )}

                  {data.status === "sent" && (
                    <FormHelperText
                      
                      sx={(theme) => ({
                        color: theme.vars.palette.primary[400],
                      })}
                    >
                      İşlem Başarılı
                    </FormHelperText>
                  )}
                </Stack>
              </div>
            </FormControl>
          </form>
        </Card>
      </Container>

      <Footer />
    </div>
  );
}
