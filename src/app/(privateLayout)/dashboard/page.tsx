"use client"

import { useAppSelector } from "@/redux/reduxHooks";


const page = () => {
    const userState  =  useAppSelector(({auth})=>auth);
    console.log({userState});

    return (
        <div>
            Dashboard   Email: {userState.user?.email}
            <p>Name: {userState.user?.name}</p>
        </div>
    );
};

export default page;