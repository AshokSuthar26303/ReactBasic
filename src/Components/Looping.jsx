import React from "react";

export const Looping = () => {
  const details = [
    { name: "Ashok", age: 20, isStudent: true },
    { name: "Ravi", age: 21, isStudent: true },
    { name: "Rahul", age: 10, isStudent: true },
    { name: "Raj", age: 14, isStudent: true },
    { name: "Rohan", age: 12, isStudent: false },
    { name: "Ravi", age: 20, isStudent: true },
    { name: "Rahul", age: 20, isStudent: true },
  ];
  return (
    <>
      <h1>Looping</h1>
      {details.map((detail, index) => {
        return (
          <div key={index}>
            <p style={{color:"red"}}>name: {detail.name}</p>
            <p className={detail.age >= 15 ? "text-red-500" : "text-green-600"}>age: {detail.age}</p>
            <p>Student: {detail.isStudent ? "yes" : "no"}</p>
          </div>
        );
      })}
    </>
  );
};