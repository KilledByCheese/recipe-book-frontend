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



export default function SigninForm(props) {
 
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
    mode: "onBlur",
  });
  

  const onSubmit = (data) => {
    console.log(data);  
    
    axios.post("/authenticate", data).then(
        res => {
            localStorage.setItem("token", res.data.token);
            props.setIsLoggedIn(true);
        }
    ).catch(
        err => {
            console.log(err);
        }
    );
  };

   if(props.isLoggedIn) {
     return(
       <Redirect to="/home"></Redirect>
     );
   } 
  return(

    <div style={styles.container}>
      <h4>Sign in</h4>
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
  

