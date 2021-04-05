import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

const styles = {
    container: {
        width: "600px",   
        background: "#ffffff",        
        height: "650px",
        margin: "auto",
        padding: "40px 55px 45px 55px",
        transition: "all .3s"
    },
};



export default function SignupForm() {
 
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
    mode: "onBlur",
  });
  
  const onSubmit = (data) => {
    console.log(data);    
  };

  return(
    <div style={styles.container}>
      <h4>Sign up</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username"
            {...register("username",
              {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              }
            )}
            style={{borderColor: errors.username && "red" }}
          />
        </div>                    

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email"
            {...register("email",
              {
                required: true,
                validate: (input) => isEmail(input),
              }
            )}
            style={{borderColor: errors.email && "red" }}
          />
        </div>     

        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password"
            {...register("password",
              {
                required: true,
                minLength: 6,                    
              }
            )}
            style={{borderColor: errors.password && "red" }}              
          />
        </div>                

        <button className="btn btn-primary btn-block" type="submit"
          disabled={isSubmitting}>Submit
        </button>

        </form>
    </div>
  );
}
  

