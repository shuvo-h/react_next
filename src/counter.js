import React, { useReducer, useState } from 'react';
import UserCard from './UserCard';
import useCounter from './hooks/useCounter';

const countDispatchMethod = (state,action) =>{
    console.log(state,action);
    let newstate = state  // 1 constatnt  let
    switch (action.type) {
        case 'increase':
            newstate = state + action.value; // 1
            break;
        case 'decrease':
            if (newstate >= 1) {
                newstate = state - action.value;
            }
            break;

        default:
            break;
    }
    /*
    if (action.type === 'increase') {
        newstate = state + action.value;
        // newstate = 0 + 1
        return newstate
    }else if (action.type === 'decrease') {
        newstate = state - action.value;
        return newstate;
    }
    */

    return newstate;
}

const Counter = () => {
    const [count,dispatchCount] = useReducer(countDispatchMethod,0);
    const [users,setusers] = useState([]);
    const [myCount,setMyCount] = useCounter(100);
    const [myCount2,setMyCount2] = useCounter(200);
    // const {countHandler,customCount,prduct,countProduct} = useCounter()


    const increasehandler = () =>{
        dispatchCount({type:"increase",value:1})
    }
    const decreasehandler = () =>{
        dispatchCount({type:"decrease",value:1})
    }

    /*
    fetch('url')
    .then((res)=>res.json())
    .then((data)=>{})
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Must end");
    })
    */

    const fetchUsershandler = () =>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setusers(data)
        })

    }

    const detailsHandler = (id) =>{
        // https://jsonplaceholder.typicode.com/users/9
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })
    }

    return (
        <div>
            <h1>Counter = {count}</h1>
            <div>
                <button className='border mx-4' onClick={increasehandler}>Increase</button>
                <button className='border mx-4' onClick={decreasehandler}>Decrease</button>
            </div>
            <section>
                <h2>User list</h2>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        // users.map((user,index)=>{
                        //     return <UserCard user={user} key={index}></UserCard>
                        // })
                        users.map((user,index)=><UserCard user={user} detailsHandler={detailsHandler} key={index}></UserCard>)
                    }
                </div>

                <button className='border mx-4' onClick={fetchUsershandler}>Fetch users</button>
                <br />
            </section>
            <button className='border mx-4' onClick={()=>setMyCount(5)}>Custom inc {myCount}</button>
            <br />
            <button className='border mx-4' onClick={()=>setMyCount2(2)}>Custom inc22 {myCount2}</button>
            <br />
        </div>
    );
};

export default Counter;