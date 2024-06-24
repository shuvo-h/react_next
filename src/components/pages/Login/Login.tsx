import { Button } from '@/components/ui/button';
import React from 'react';

const Login = () => {
    const handleLogin = async() =>{

    }
    return (
        <div>
            <input type="text" placeholder='email' />
            <input type="text" placeholder='password' />
            <Button>Login</Button>
        </div>
    );
};

export default Login;