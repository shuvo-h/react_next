// LoginComp.js
"use client";
import { setAccessToken } from "@/action/authAction";
import { AUTH_KEY } from "@/constant/authConstatn";
import { AxiosInstance } from "@/lib/axios/AxiosInterceptor";
import { ZodValidate } from "@/lib/zod/validateError";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { setFlag, setUser } from "@/redux/slices/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

// Define the schema for login validation
const loginSchema = z.object({
  email: z.string().email({ message: "Email must be valid" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" }),
});

const LoginComp = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();
  const authState = useAppSelector((state)=>{
    return state.auth
  })
  const [fieldData, setFieldData] = useState({
    email: "ab@mail.com",
    password: "sfdfdf",
  });
  const [fieldDataErr, setFieldDataErr] = useState({ email: "", password: "" });
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setFlag({flagName:"fetch",value:true}))
      const validData = ZodValidate(loginSchema, fieldData);

      // Call the login API endpoint
      const response = await AxiosInstance.post(
        "http://localhost:3000/api/login",
        validData
      );
      console.log(response);

      // If the response contains a token, set the access token
      if (response.data?.token) {
        setAccessToken(AUTH_KEY, response.data?.token);
      }
      dispatch(setUser(response.data?.user))
      dispatch(setFlag({flagName:"fetch",value:false}))
      router.push("/dashboard")
    } catch (error) {
      setFieldDataErr(error);
      dispatch(setFlag({flagName:"fetch",value:false}))
    }
  };

  /*
    const router = useRouter();
    const dispatch = useAppDispatch()
    const authState = useAppSelector((sate)=>sate.auth);


    // State variables to hold the form data and error messages

    // Function to handle form submission
    const loginHandler = async (e) => {
        e.preventDefault();
        console.log({ fieldData });

        try {
            dispatch(setFlag({type:"fetch",value:true}));
            // Validate the form data using the schema
            const validData = ZodValidate(loginSchema, fieldData);
            console.log({ validData });

            // Call the login API endpoint
            const response = await AxiosInstance.post('http://localhost:3000/api/login', validData);
            console.log(response);

            // If the response contains a token, set the access token
            if (response.data?.token) {
                setAccessToken(AUTH_KEY, response.data?.token);
            }
            dispatch(setUser(response.data?.user))

            dispatch(setFlag({type:"fetch",value:false}));
            // router.push("/dashboard")
        } catch (error) {
            setFieldDataErr(error)
            dispatch(setFlag({type:"fetch",value:false}));
        }
    }
    */

  return (
    <div>
      <form onSubmit={loginHandler}>
        {/* Email Input */}
        <div>
          <label>Email:</label>
          <input
            className="border"
            type="text"
            value={fieldData.email}
            onChange={(e) =>
              setFieldData({ ...fieldData, email: e.target.value })
            }
          />
          <p className="text-red-500">{fieldDataErr.email}</p>
        </div>


        <div>
          <label>Password:</label>
          <input
            className="border"
            type="password"
            value={fieldData.password}
            onChange={(e) =>
              setFieldData({ ...fieldData, password: e.target.value })
            }
          />
          <p className="text-red-500">{fieldDataErr.password}</p>
        </div>

        {authState.flag.isFetch ? (
          <p>Loading.......</p>
        ) : (
          <button className="border bg-sky-600">Login</button>
        )}

      </form>
    </div>
  );
};

export default LoginComp;
