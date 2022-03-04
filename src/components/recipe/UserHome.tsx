import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import useLoginStore from "../../store/loginStore";

export default function UserHome() {
  const navigate = useNavigate();
  const { jwt } = useLoginStore();

  useEffect(() => {
    authService.validateToken(jwt).then(response => {
      console.log("====> valid Token")
      
    }).catch(error => {
      console.log("====> invalid Token");
      //TODO Modal with redirect prompt or direct login
      navigate("/login")
    }); 
  });

   

  return(
    <div>
      <h4>User Home</h4>
    </div>
  );
}
  
