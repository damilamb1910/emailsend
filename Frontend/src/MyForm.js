import React from 'react'
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
    const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "https://emailsend-yx60.onrender.com/";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
    };
  return (
    <div>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Control onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Name" />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)} placeholder="Escriba su mensaje aquí..."/>
      </Form.Group>
      <Button onClick={() => sendEmail()} type="submit">Submit form</Button>
    </Form>
    </div>
  )
}

export default MyForm
