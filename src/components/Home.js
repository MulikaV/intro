import React from "react";
import Form from "./Form";


const Home = () => {
    const send = (data) =>{
        console.log(data);
    };

  return (
      <div>
        <Form onSubmit={send} />
      </div>
  )

};

export default Home;