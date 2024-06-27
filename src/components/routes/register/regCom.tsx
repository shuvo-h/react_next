"use client"
import { setAccessToken } from '@/action/authAction';
import { AUTH_KEY } from '@/constant/authConstatn';
import { AxiosInstance } from '@/lib/axios/AxiosInterceptor';
import { ZodValidate } from '@/lib/zod/validateError';
import React, { useState } from 'react';
import { z } from 'zod';

const registerSchema = z.object({
    email: z.string().email({message:"Emain must nedd to be valid"}),
    password: z.string().min(4),
    age: z.string().transform((value) => {
        const numberValue = parseInt(value, 10);
        return numberValue;
      })
      .refine((value) => {
        return !isNaN(value) && value > 0
      }, { message: "Age must be a positive number" }),

})

const Register = () => {
    const [fieldData,setFieldData] = useState({email:"",password:"",age:""});
    const [fieldDataErr,setFieldDataErr] = useState({email:"",password:"",age:""});


    const registerHander = async(e) =>{
        e.preventDefault()
        console.log({fieldData});

        try {
            // const validData = registerSchema.safeParse(fieldData);
            const validData = ZodValidate(registerSchema,fieldData);
            console.log({validData});
            const response = await AxiosInstance.post('http://localhost:3000/api/register',validData);
            console.log(response);
            if (response.token) {
                setAccessToken(AUTH_KEY,response.token)
            }

        } catch (error) {
            console.log(error);
            setFieldDataErr(error)
        }

    }

    return (
        <div>
            <form onSubmit={registerHander}>
                <input
                    className='border'
                    type="text"
                    onBlur={(e)=>setFieldData({...fieldData,email:e.target.value})}
                />
                <p className='text-red-500'>{fieldDataErr.email}</p>
                <input
                    className='border'
                    type="password"
                    onBlur={(e)=>setFieldData({...fieldData,password:e.target.value})}
                />
                <p className='text-red-500'>{fieldDataErr.password}</p>
                <input
                    className='border'
                    type="text"
                    onBlur={(e)=>setFieldData({...fieldData,age:e.target.value})}
                />
                <p className='text-red-500'>{fieldDataErr.age}</p>
                <button className='border bg-sky-600'>Regiter</button>
            </form>
        </div>
    );
};

export default Register;