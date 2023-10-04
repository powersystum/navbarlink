import React, { useEffect, useState } from 'react'

export const Registration = () => {
  const data ={name:"",email:"",password:""};
  const [inputData,setInputData]=useState(data);
  const [flag,setFlag]=useState(false)
  const [showPass,setShowPass]=useState(true);

  useEffect(()=>{
    console.log("Registered")
  },[flag])
   
  function handleData(e){
  setInputData({...inputData,[e.target.name]:e.target.value})
  console.log(inputData);
  }

  function handleSubmit(e){
   //e.preventDefault();

    if(!inputData.name || !inputData.email || !inputData.password){
      alert("All filled mendetry");
    }
    else{
      setFlag(true)
   e.preventDefault();
  }

  }
  let btnStyle ={
     backgroundColor:'green',
     color:'white'
  }
  let btnText,passwordBox;
  if(showPass === true){
    btnStyle.backgroundColor ='red'
    btnText = 'Hide Password';
    passwordBox='text';
  }else{
    btnText ='Show Password'
    passwordBox='password';
  }

  function showpasswordHandler(){
    
    setShowPass(!showPass);
    console.log(showPass);
  }

  return (
    <>
    <pre>{(flag)?<h2 className='ui-define text-center' style={{fontFamily:"sans-serif",fontSize:40,color:'blueviolet'}}>
      Hello..{inputData.name},You've Register successfully</h2>:''}</pre>
    <div className='container card p-3 mt-2 Registration'>
     <form onSubmit={handleSubmit}>
        <h2 className='text-center'>Registration Form</h2>
        <div className='form-grup'>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' value={inputData.name} 
            className='form-control'  onChange={handleData}/>
            <br/>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email'value={inputData.email}
             className='form-control' onChange={handleData}/>
            <br/>
            <label htmlFor='password'>Password:</label>
            <input type={passwordBox} name='password' value={inputData.password}
             className='form-control' onChange={handleData} />
            <button type='submit' className='btn btn-primary mt-2 m-1'>Register</button>
            <button type='button' className='btn   mt-2 m-1'  onClick={showpasswordHandler}  style={btnStyle} >{btnText}</button>
        </div>
     </form>
    </div>
    </>
  )
}
