import React, { useState } from "react";

function RegistrationForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handledata = (e) => {
    const {name, value} = e.target ;

    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "pass":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
  };


  const HandleSubmit=(e)=>{
        e.preventDefault();
        const formdata={
            firstname,
            lastname,
            email,
            password,
            phone,
        }
        console.log(formdata);
        

  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="flex flex-col max-w-3xl  mx-auto ">
          <h1>Regstration form</h1>
          <p> please fill in this for create an accout</p>

          <label className="mt-10" htmlFor="firstname">
            Firstname:
          </label>
          <input
            className="border-2"
            type="text"
            placeholder="enter the name "
            required
            name="firstname"
            value={firstname}
            onChange={handledata}
          />

          <label htmlFor="lastname">Lastname:</label>
          <input
            className="border-2"
            type="text"
            placeholder="enter the last name "
            required
            name="lastname"
            value={lastname}
            onChange={handledata}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="border-2"
            type="email"
            placeholder="abc123@gmail.com "
            required
            name="email"
            value={email}
            onChange={handledata}
          />

          <label htmlFor="pass">Password:</label>
          <input
            className="border-2"
            type="password"
            placeholder="******** "
            required
            name="pass"
            value={password}
            onChange={handledata}
          />

          <label htmlFor="phone">Phone Num:</label>
          <input
            className="border-2"
            type="phone"
            placeholder="+91 xxxxx xxxxx "
            required
            name="phone"
            value={phone}
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
          <p>Hello {firstname} , email is {email} & phone no. is {phone}</p>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
