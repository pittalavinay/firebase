import React,{useState} from 'react'
import './App.css'

const App = () => {
  const[data,setdata]=useState(
    {
      email:" ",
      password:" "
    }
  )
  const changeHandler=e=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data)
    fetch('https://test-api-9427a-default-rtdb.firebaseio.com/data.json',
    {
      method:'POST',
      body:JSON.stringify(data),
      headers:{"content-Type":"application/json; charset-UTF-8"}
    }
    ).then(res=>alert('data posted')).catch(err=>console.log(err))
  }
  return (
    <div>
        <div class="d">
            <div class="i">
              <div class="v">
<div class="y"></div>
              </div>

            </div>
            <div class="m">
              <div class="j">
                <div class="k">
                  <div class="o">

                  </div>
                </div>
              </div>
            </div>
        </div>
    <center><div class="form"><form  onSubmit={submitHandler} ><br/><br/><br/>
      <b>email</b><br/><input type="text" name="email" onChange={changeHandler}  class="for"></input><br/><br/><br/>
    <b> password</b><br/> <input type="password" name="password" onChange={changeHandler}  class="for"></input><br/><br/>
      <input type="submit" value="login" class="log"/>
      </form></div></center>
      </div>
  )
}

export default App