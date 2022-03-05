import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import InfoModal from "../UI/Info.modal";
import styles from "./Auth.module.css";

interface IFormInput {
  userName: string;
  password: string;
  email: string;
}

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const onHideSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onHideErrorModal = () => {
    setShowErrorModal(false);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    authService
      .register(data.userName, data.password, data.email)
      .then((response) => {
        setShowSuccessModal(true);
      })
      .catch((error) => {
        console.error(error.response.data.exceptionMessage);
        setErrorMessage("An Error occured during the requested operation.")
        if(error.response.data.exceptionMessage?.includes("userName")) {
          setErrorMessage("Username already in use!")
        } else if(error.response.data.exceptionMessage?.includes("email")) {
          setErrorMessage("Email already in use!")
        }
        setShowErrorModal(true);
      });
  };

  return (
    <div>
      <Container className={styles.myform}>
        <h4>Register</h4>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your User Name"
              {...register("userName", { required: true })}
            />
            {errors.userName && (
              <p style={{ color: "red" }}>User Name is required</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your User Email"
              {...register("email", {
                required: true,
                pattern: {
                  //https://stackoverflow.com/a/46181/6603725
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                  message: " - Entered value does not match email format",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>
                Email is required {errors.email.message}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.userName && (
              <p style={{ color: "red" }}>password is required</p>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>

      <InfoModal
        show={showSuccessModal}
        onHide={onHideSuccessModal}
        title={"Registration successful"}
        buttonText={"Take me to the Login page"}
        children={
          <p>
            Your Registration is now complete. You can login with your selected
            Username and password
          </p>
        }
      />

      <InfoModal
        show={showErrorModal}
        onHide={onHideErrorModal}
        title={"Error during Registration"}
        buttonText={"OK"}
        children={
          <p>
            {errorMessage}
          </p>
        }
      />
    </div>
  );
}
