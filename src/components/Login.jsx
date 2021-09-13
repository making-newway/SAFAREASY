import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap';

const Login = ({ setuser, setpassword }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const histoty = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.length > 0 && password.length > 0) {
            setuser(user);
            setpassword(password);
            histoty.push('/dashboard')
        } else {
            alert('Please Fill the Areas');
        }
    }

    return (
        <div className="container">
            <Card className="p-x-55 p-t-65 p-b-55">
                <Form className="validate" onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <FormGroup className="validate-input">
                        <Input type="text" name="user" required value={user} onChange={(e) => setUser(e.target.value)} />
                        <Label for="user">Username</Label>
                        <span className="line"></span>
                    </FormGroup>

                    <FormGroup className="validate-input">
                        <Input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Label for="password">Password</Label>
                        <span className="line"></span>
                    </FormGroup>

                    <Button type='submit'>Log in</Button>
                </Form>
            </Card>
        </div>
    )
}

export default Login;