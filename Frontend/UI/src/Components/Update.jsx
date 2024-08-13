import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [error, setError] = useState("");
  const navigate=  useNavigate()
  
  let { id } = useParams();
  let singleUser = async () => {
    const response = await fetch(`http://localhost:5500/user/single/${id}`);
    const result = await response.json();

    if (!response.ok) {
      // console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      setname(result.name);
      setemail(result.email);
      setphone(result.phone);
      console.log(result);
    }
  };

  useEffect(() => {
    singleUser();
  }, []); 

  //& updated function start
    let handleEdit = async e => {
      e.preventDefault();
      const updateUser = { name, email, phone };
      const response = await fetch(`http://localhost:5500/user/update/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateUser),
          headers: { "content-type": "application/json"}
        }
      );
      const result = await response.json();
      if (!response.ok) {
        setError(" Something went Wrong");
        console.log(result.error);
      }
      if (response.ok) {
        setError("Updated Successfully");
        navigate("/all");
      }
    };
 



  return <div>
      <h1 className="heading">Edit Data</h1>
      {error && <div className="error">
          {error}
        </div>}

      <div className="container1">
        <form method="Post" onSubmit={handleEdit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={e => setname(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" placeholder="Enter Your Email" value={email} onChange={e => setemail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="text" placeholder="Enter Your Mobile" value={phone} onChange={e => setphone(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>;
};

export default Update;
