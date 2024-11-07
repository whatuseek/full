import { useState } from 'react';
import '../styles/login_style.css'
import { Container, Button, Form} from 'react-bootstrap';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
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
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
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

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form.Group>

                </Form>
            </Container>

        </>

    )
}

export default Login