import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const All = () => {
  let [data, setData] = useState([]);
  let [error, setError] = useState("");

  let getData = async () => {
    const res = await fetch("http://localhost:5500/user/fetch");
    const result = await res.json();

    if (!res.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (res.ok) {
      setData(result);
      // setError("Add User Successfully!")
    }
  };

  useEffect(() => {
  getData();
  }, []);
  setTimeout(() => {
    getData
  }, 2000);
  setTimeout(() => {
    setError(" ")
  }, 5000);

  console.log(data);

  const deleteData = async id => {
    try {
      const response = await axios.delete(
        `http://localhost:5500/user/delete/${id}`
      );
      setError("Delete Successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="content">
      <h1>All Data</h1>
      {error &&
        <div className="error">
          {error}
        </div>}
      <div className="bigContainer">
        {data.map(post => {
          {
            /* const { _id, name, email, phone } = post; */
          }
          return (
            <div key={post._id} className="container">
              <h2>
                {post.name}
              </h2>
              <h3>
                {post.email}
              </h3>
              <h3>
                {post.phone}
              </h3>
              <a
                className="link"
                href="#"
                onClick={() => {
                  deleteData(post._id);
                }}
              >
                Delete
              </a>
              <Link to={`/${post._id}`} className="link">
                Edit
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default All;
