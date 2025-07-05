"use client"

import { ChangeEventHandler, InputEvent, InputHTMLAttributes, ReactHTMLElement, useState } from "react"
import "./style.css"
import axios from 'axios'
import { useRouter } from "next/navigation"
interface userDetails {
  username: string,
  password: string
}

export default function Signup() {
  const [userDetails, setUserDetails] = useState({ username: '', password: '' });
  // const [password, setPassword] = useState(null);
  const router = useRouter();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log('the value of the incoming input is', name, value)
    setUserDetails((prevValues: userDetails) => {
      return { ...prevValues, [name]: value }
    });
  }

  const handleInputSubmit = async () => {
    window.prompt('handleInputSubmit triggered')
    const response = await axios.post('http://localhost:3000/api/user', { ...userDetails })
    console.log('the value of response is', response)
  }
  return (
    <div id="section" style={{}}>

      <div id="main">
        <h2>Sign up</h2>
        <LabeledInput name={"username"} placeholder="enter your username" type="text" onChange={handleInputChange} />
        <LabeledInput name={"password"} placeholder="enter your password" type="password" onChange={handleInputChange} />
        <button onClick={
          handleInputSubmit
          // router.push('/')

        } >submit</button>
      </div>
    </div>
  )


}

interface LabeledInputType {
  name: string,
  placeholder: string,
  type: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const LabeledInput = ({ name, placeholder, type, onChange }: LabeledInputType) => {

  return (
    <div id="labeledInput" style={{}}>
      <label htmlFor={name}>{name}</label>
      <input name={name} id={name} placeholder={placeholder} type={type || 'text'} onChange={onChange} />
    </div>
  )

}
