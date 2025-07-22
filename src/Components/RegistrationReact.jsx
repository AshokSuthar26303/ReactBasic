import React, { useState } from "react";

function RegstrationReact() {
 const [user , setUser]= useState({
    firstname :"",
    lastname:"",
    email:"",
    pass:"",
    phone:"",
 });

  const handledata = (e) => {
    const {name, value} = e.target ;

    setUser((prev)=>({ ... prev, [name]:value}))

  };


  const HandleSubmit=(e)=>{
        e.preventDefault();
      console.log(user);
      
        

  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="flex flex-col max-w-3xl  mx-auto ">
          <h1>Regstration form</h1>
          <p> please fill in this for create an account</p>

          <label className="mt-10" htmlFor="firstname">
            Firstname:
          </label>
          <input
            className="border-2"
            type="text"
            placeholder="enter the name "
            required
            name="firstname"
            value={user.firstname}
            onChange={handledata}
          />

          <label htmlFor="lastname">Lastname:</label>
          <input
            className="border-2"
            type="text"
            placeholder="enter the last name "
            required
            name="lastname"
            value={user.lastname}
            onChange={handledata}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="border-2"
            type="email"
            placeholder="abc123@gmail.com "
            required
            name="email"
            value={user.email}
            onChange={handledata}
          />

          <label htmlFor="pass">Password:</label>
          <input
            className="border-2"
            type="password"
            placeholder="******** "
            required
            name="pass"
            value={user.password}
            onChange={handledata}
          />

          <label htmlFor="phone">Phone Num:</label>
          <input
            className="border-2"
            type="phone"
            placeholder="+91 xxxxx xxxxx "
            required
            name="phone"
            value={user.phone}
            onChange={handledata}
          />

          <div>
            <button
              className="px-4 py-2 bg-blue-500 rounded-lg mt-8"
              type="submit"
            >
              Submit
            </button>
          </div>
          <p>Hello {user.firstname} , email is {user.email} & phone no. is {user.phone}</p>
        </div>
      </form>
    </>
  );
}

export default RegstrationReact;
