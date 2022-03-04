import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import authService from "../../services/auth.service";
import useLoginStore from "../../store/loginStore";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

interface IFormInput {
  userName: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();

  const { setJwt } = useLoginStore();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    authService
      .login(data.userName, data.password)
      .then((response) => {
        setJwt(response);
        navigate("/userHome");
      })
      .catch((error) => {
        console.error(error);
        //TODO fehlermeldung in form anzeigen
      });
  };

  return (
    <div>
      <Container className={styles.myform}>
        <h4>Login</h4>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your User Name"
              {...register("userName")}
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
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}
