import { Button, Dropdown, Form } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isDobValid, setIsDobValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);

  const validateInput = (inputTag) => {
    const { name, value } = inputTag;
    console.log(name, value);

    if (name === 'name') {
      setName(value);
      setIsNameValid(!!value.match(/^[A-Za-z\s]+$/));
    } else if (name === 'address') {
      setAddress(value);
      setIsAddressValid(value.trim() !== '');
    } else if (name === 'email') {
      setEmail(value);
      setIsEmailValid(value.endsWith('@gmail.com'));
    } else if (name === 'number') {
      setNumber(value);
      setIsNumberValid(!!value.match(/^\d+$/));
    } else if (name === 'gender') {
      setGender(value);
      setIsGenderValid(true);
    } else if (name === 'dob') {
      setDob(value);
      setIsDobValid(value !== '');
    }
  };

  const handleCourseSelect = (eventKey) => {
    setCourse(eventKey);
    setIsCourseValid(!!eventKey);
  };

  const handleSubmit = () => {
    const nameValid = !!name.match(/^[A-Za-z\s]+$/);
    const addressValid = address.trim() !== '';
    const emailValid = email.endsWith('@gmail.com');
    const numberValid = !!number.match(/^\d+$/);
    const dobValid = dob !== '';
    const genderValid = !!gender;
    const courseValid = !!course;

    setIsNameValid(nameValid);
    setIsAddressValid(addressValid);
    setIsEmailValid(emailValid);
    setIsNumberValid(numberValid);
    setIsDobValid(dobValid);
    setIsGenderValid(genderValid);
    setIsCourseValid(courseValid);

    if (nameValid && addressValid && emailValid && numberValid && dobValid && genderValid && courseValid) {
      alert('Registration Successful!');
    } else {
      alert('Please fill the form completely');
    }
  };

  const handleClear = () => {
    setName('');
    setAddress('');
    setEmail('');
    setNumber('');
    setDob('');
    setGender('');
    setCourse('');

    setIsNameValid(true);
    setIsAddressValid(true);
    setIsEmailValid(true);
    setIsNumberValid(true);
    setIsDobValid(true);
    setIsGenderValid(true);
    setIsCourseValid(true);
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className="d-flex justify-content-center align-items-center bg-dark">
      <div style={{ width: '600px' }} className="rounded p-5">
        <h2 className="text-center text-light mb-3">Registration Form</h2>
        <Form className="text-light">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Username</Form.Label>
            <Form.Control value={name} onChange={(e) => validateInput(e.target)} type="text" name="name" placeholder="Username" />
          </Form.Group>
          {!isNameValid && <div className="mb-3 text-danger fw-bolder">Invalid, letters & space are allowed</div>}
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control value={address} onChange={(e) => validateInput(e.target)} as="textarea" name="address" placeholder="Address" rows={2} />
          </Form.Group>
          {!isAddressValid && <div className="mb-3 text-danger fw-bolder">Address is required</div>}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} onChange={(e) => validateInput(e.target)} type="email" name="email" placeholder="e-mail" />
          </Form.Group>
          {!isEmailValid && <div className="mb-3 text-danger fw-bolder">Incorrect email</div>}
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control value={number} onChange={(e) => validateInput(e.target)} type="text" name="number" placeholder="Number" />
          </Form.Group>
          {!isNumberValid && <div className="mb-3 text-danger fw-bolder">Must be numeric</div>}
          <p>Gender</p>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline value="male" checked={gender === 'male'} onChange={(e) => validateInput(e.target)} label="Male" name="gender" type={type} id={`inline-${type}-1`} />
              <Form.Check inline value="female" checked={gender === 'female'} onChange={(e) => validateInput(e.target)} label="Female" name="gender" type={type} id={`inline-${type}-2`} />
              <Form.Check inline value="other" checked={gender === 'other'} onChange={(e) => validateInput(e.target)} label="Other" name="gender" type={type} id={`inline-${type}-3`} />
            </div>
          ))}
          {!isGenderValid && <div className="mb-3 text-danger fw-bolder">Select your gender</div>}
          <Form.Group className="mb-3" controlId="dob">
            <Form.Label>DOB</Form.Label>
            <Form.Control value={dob} onChange={(e) => validateInput(e.target)} type="date" name="dob" />
          </Form.Group>
          {!isDobValid && <div className="mb-3 text-danger fw-bolder">Select your date of birth</div>}
          <p>Course</p>
          <Dropdown onSelect={handleCourseSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {course || 'Choose your course'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="commerce">Commerce</Dropdown.Item>
              <Dropdown.Item eventKey="biology">Biology</Dropdown.Item>
              <Dropdown.Item eventKey="computer science">Computer Science</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {!isCourseValid && <div className="mb-3 text-danger fw-bolder">Select your course</div>}
        </Form>
        <div className="d-flex justify-content-around p-3 mt-4">
          <Button onClick={handleClear} variant="secondary">Cancel</Button>
          <Button onClick={handleSubmit} variant="primary">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
