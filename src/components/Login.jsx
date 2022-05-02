import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
const navigate = useNavigate();
const [user,setuser] = useState("");
const [passa,setpass] = useState("");


const filt = (data,use,pas) => {
  
  const x = data.map((data) => {
    if(data.username==use&&data.pass==pas){
     return data.role
    }
  }
  
  )
  console.log(x)
  for(var i = 0;i<x.length;i++){
     if(x[i]=="admin"){
     navigate( "/orders",{replace :true})
     return
      }
  else if(x[i]=="client"){
    navigate("/neworder",{replace:true})
    return
  }  
  }
  
}


console.log(user,passa)
   const check = async(user,passa) => {
     try {
       let res = await fetch(`http://localhost:8080/users`)
       let data = await res.json();
    

      filt(data,user,passa)
      
     } catch (error) {
       console.log(error)
     }
   }

  return (
    <div>
      <input
       onChange={(e) => setuser(e.target.value) }
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
      onChange={(e) =>  setpass(e.target.value)}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={() => check(user,passa)} className="submit">Login</button>
    </div>
  );
};
