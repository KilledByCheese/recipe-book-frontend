import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import styles from "./Auth.module.css";

interface IFormInput {
  userName: string;
  password: string;
  email: string;
}

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    authService
      .register(data.userName, data.password, data.email)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        //TODO fehlermeldung in form anzeigen
      });
  };

  return(
    <div>
    <Container className={styles.myform}>
      <h4>Register</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your User Name"
            {...register("userName")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your User Email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  </div>
  );
}
  
