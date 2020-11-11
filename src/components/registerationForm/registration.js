import React, { useState } from "react";
import './registration.css';
const localStorageData = JSON.parse(localStorage.getItem("users_data"));
    let vehicleNumber=""
    let name=""
    let phone=""
    let address=""
    let model=""
    let isMissing=""
const RegistrationForm = () => {
    const handleRegister= (event)=> {
        const data1={
             "vehicleNumber":vehicleNumber,
             "name":name,
             "phone":phone,
             "address":address,
             "model":model,
             "isMissing":isMissing,
        }
        
        const ans=[data1,...localStorageData];
        localStorage.setItem("users_data",JSON.stringify(ans));
        alert('Registration successfully');
        vehicleNumber=""
        name=""
        phone=""
        address=""
        model=""
        isMissing=""
        window.location.reload();

    }
    const handleRcnum= (event) => { 
        vehicleNumber=(event.target.value);
    }
    const handleName= (event)=>{ name=(event.target.value);}
    const handlePhone= (event)=>{ phone=(event.target.value);}
    const handleAddress= (event)=>{ address=(event.target.value);}
    const handleModel= (event)=>{ model=(event.target.value);}
    const handleIsMisssing= (event)=>{ isMissing=(event.target.value);}
    return (<div>
        <div className="testbox">
            <h1 className="heading">Registration</h1>
            <form id="formData" onSubmit={e => {e.preventDefault();handleRegister(e)}} >
                <hr  />
                <input type="text" name="rcnum" id="rcnum" onChange={(e) => handleRcnum(e)} placeholder="Vehicle Registration Number" required/>
                <input type="text" name="name" id="name" placeholder="Name"  onChange={(e) => handleName(e)} required/>
                <input type="number" name="phone" id="name" placeholder="Mobile number"  onChange={(e) => handlePhone(e) }required/>
                <input type="text" name="address" placeholder="address"  onChange={(e) => handleAddress(e)} required/>
                <input type="text" name="isMissing" placeholder="isMissing"  onChange={(e) => handleModel(e)} required/>
                <input typr="text" name="model" placeholder="model"  onChange={(e) => handleIsMisssing(e)} required/>
                <button type="submit" name="submit" className="button1">Register </button>
            </form>
        </div>
        </div>)
}


export default RegistrationForm;
