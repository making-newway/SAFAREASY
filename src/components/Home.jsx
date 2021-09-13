import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { useHistory } from "react-router-dom";

const Home = ({ user, password }) => {

    const history = useHistory();

    useEffect(() => {
        if(!user) history.push('/');
    }, []);

    return (
        <div className="container">
            <Card>
                <CardBody>
                    <h2>Welcome User {user}</h2>
                    <p className="password">Save Your Password: {password}</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default Home
