import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Register() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRegister = (e) => {
        let pass = document.getElementById("inputPassword5").value;
        let user = document.getElementById("exampleForm.ControlInput1").value;
        // console.log(user, pass)

    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='navbuttons'>
                Register
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form>

                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleRegister}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Register;