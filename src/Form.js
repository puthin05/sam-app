import React from 'react'
import "./s.css";
function a(){
  var x=document.getElementById("a").value;
  var y=document.getElementById("b").value;
  var z=/^[2][1][Aa][8][1][Aa][6][1][0-9][0-9]+$/;
  var u=/^[a-zA-Z0-9@.!@#$%^&*;:/]+$/;
  if(z.test(x) == z.test(y))
   document.getElementById("c").innerHTML="Sucessfully Logined";
  else
   document.getElementById("c").innerHTML="Invalid Username (or) Password";
}

function Content(){
  return (
    <div className="ll">
    <div className="a">
    <p align="center" className='A'>LOGIN</p>
    <p id="b" action="puthin.html"></p>
        <label className='A'>User Name</label>
        <input className='box' type="text" placeholder='Enter User Name:-' />
        <label className='A'>Password</label>
        <input className='box' type="text" placeholder='Enter Password:-'/>
      <p></p>
      <a href='sam-app/src/puthin.html'><button  type="submit" className='box'><i className="A">Login</i></button></a>
     
    </div>
    </div>
  )
}
export default Content;