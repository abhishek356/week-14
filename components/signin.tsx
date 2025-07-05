"use client"
import React from 'react'
import "./style.css"
import { useState } from 'react'
import axios from 'axios'
function Signin() {

  const [Username, setUserName] = useState();
  const [Password, setPassword] = useState();

  return (
    <div id="section" style={{}}>

      <div id="main">
        <h2>Sign in</h2>
        <LabeledInput name={"Username"} placeholder="enter your username" type="text" />
        <LabeledInput name={"Password"} placeholder="enter your password" type="password" />
        <button onClick={() => {
          axios.post('http://localhost:3000/api/user')
        }}>submit</button>
      </div>
    </div>
  )


}

interface LabeledInputType {
  name: string,
  placeholder: string,
  type: string
}

const LabeledInput = ({ name, placeholder, type }: LabeledInputType) => {

  return (
    <div id="labeledInput" style={{}}>
      <label htmlFor={name}>{name}</label>
      <input name={name} id={name} placeholder={placeholder} type={type || 'text'} />
    </div>
  )

}

export default Signin;
