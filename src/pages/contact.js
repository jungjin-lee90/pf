import { forwardRef, useRef } from "react";
import Card from "../component/card";

import "./contact.css";

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  return (
    <div className="container contact" ref={ref}>
      <h1 className="main-title">Contact</h1>
      <div className="card-wrapper">
        <Card className="contact-card">
          <form className="contents" ref={form}>
            <h3>Name</h3>
            <input type="text" name="name" />
            <h3>Email</h3>
            <input type="email" name="email" />
            <h3>Message2</h3>
            <textarea name="message" />
            <div className="send-btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
});

export default Contact;