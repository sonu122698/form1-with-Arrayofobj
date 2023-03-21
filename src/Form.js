
import './Form.css'

import React ,{useState, useEffect}from 'react'

const getLocalItem =() =>{
  let list = localStorage.getItem('lists')
  console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }
  else{
    return [];
  }
}

const Form = () => {

const [enterUsername,setUsername]=useState("")
const [enterPassword,setPassword]=useState("")
const [savedData,setsavedData]=useState(getLocalItem())


const usernameChangeHandler=(event)=>{
  setUsername(event.target.value)
  //console.log(event.target.value)
}
const passwordChangeHandler=(event)=>{
  setPassword(event.target.value)
  //console.log(event.target.value)
}

const formHandler=(event)=>{
  event.preventDefault()

  const userDatas={
    Username:enterUsername,
    Password:enterPassword
  }

  setsavedData([...savedData,userDatas])
  console.log(userDatas)

  setUsername("")
setPassword("")
}


useEffect(()=>{
  localStorage.setItem("lists",JSON.stringify(savedData))

},[savedData])



  return (
    <div className='FormContainer'>
    <form onSubmit={formHandler}>
    <label>Username</label><br/>
    <input type='text' value={enterUsername}  onChange={usernameChangeHandler}/>
    <br/>
    <label>Password</label>
    <br/>
    <input type='text'  value={enterPassword} onChange={passwordChangeHandler}></input><br/>
    
    <button type='submit' >Submit</button>
    
    
    </form>
      
    </div>
  )
}

export default Form

//form data  fill ke badd textfield khali ho uske liy vlur kr jagh me jo usestate se variable bnaye hai usko enter kr denge
//aur object banne k baad usko clear kr denge