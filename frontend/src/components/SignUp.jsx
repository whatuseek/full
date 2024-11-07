import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import '../styles/signUp_style.css'
import { Link, } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    // const navigate=useNavigate();
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("From handleSubmit ");
        console.log(formData);
    };
    return (
        <>
            <Container>
                <h1>Sign-Up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter username"
                            required value={formData.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" required placeholder="Enter email"
                            value={formData.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required
                            value={formData.password} onChange={handleChange} />
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group> */}

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <p>Already have an account?<Link to="/login"> Login</Link></p> 
                        

                    </Form.Group>
                </Form>
            </Container>
        </>
    );
};

export default SignUp;

