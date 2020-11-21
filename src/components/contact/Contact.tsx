import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <h6>Address</h6>
        <p>7419 Avenue O. Houston, Texas 77011</p>
      </div>
      <div>
        <h6>Phone</h6>
        <p>713-875-8695</p>
      </div>
      <div>
        <h6>Email</h6>
        <p>MikeDavis@gulfcoastscrap.com</p>
      </div>
      <Form>
        <Form.Group controlId="formBasicName">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <BsFillPersonFill />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="name" placeholder="Full Name" />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdEmail />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="email" placeholder="email@address.com" />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdPhone />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="phone" placeholder="123-456-7890" />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicCompany">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaBuilding />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="company" placeholder="Company Name" />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <RiMessage2Fill />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="textarea"
              type="message"
              placeholder="How may we help?"
            />
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
