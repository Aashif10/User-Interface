import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
const Create = () => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [error, setError] = useState("");

  let navigate=useNavigate()


  console.log(name, email, phone);
  let handlesubmit = async (e) => {
    e.preventDefault();
    const adduser = { name, email, phone };
    const response = await fetch("http://localhost:5500/user/create", {
      method: "POST",
      body: JSON.stringify(adduser),
      headers: {
        "content-type": "application/json"
      }
    });
    const result = await response.json();
    if (!response.ok) {
      setError("Duplicate Error!");
      
      console.log(result.error);
    }
    if (response.ok) {
      setError("");
      setemail("");
      setname("");
      setphone("");
      console.log(result);
      navigate("/all")

    }
  };
  setTimeout(() => {
    setError("")
},4000)

  useEffect(() => {
    handlesubmit()
  },[])

  return <div>
      <h1 className="heading">Enter Data</h1>
      {error && <div className="error">
          {error}
        </div>}
    
  

      <div className="container1">
        <form onSubmit={handlesubmit} method="POst">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={e => setname(e.target.value)} />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter Your Email" value={email} onChange={e => setemail(e.target.value)} />
          </div>
          <div class="form-group">
            <label>Phone:</label>
            <input type="text" placeholder="Enter Your Mobile" value={phone} onChange={e => setphone(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>;
};

export default Create;
