import React from 'react'
import "./s.css";

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