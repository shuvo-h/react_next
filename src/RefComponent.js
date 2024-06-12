import React, { useReducer, useRef, useState } from 'react';

// action = {type:"",value:""}
const reducerMethod = (state,action) =>{
    switch (action.type) {
        case "name":
            const newState = {...state}
            newState.name = action.value;

            return newState;
        case 'parmanent_roadAddress':
            const newStateadd = {...state}
            newStateadd.address.paramanet.road = action.value;

            return newStateadd;


        default:
            return state;
    }
}

const RefComponent = () => {
    const refVar = useRef();
    const refName = useRef();
    // const [name1,setName1] = useState('');
    // const [email,setEmail] = useState('');
    // const [user,setUser] = useState({
    //     name:"",
    //     email:"",
    //     age:14,
    //     salary:0,
    //     address: {
    //         paramanet:{road:"",city:""},
    //         temporaty:{road:"",city:""},
    //     },
    //     edu: [
    //         {level:"sscc",result:4.5},
    //         {level:"hsscc",result:4.5},
    //     ]
    // })

    const [user,dispatchUser] = useReducer(reducerMethod,{
        name:"",
        address:{
            paramanet:{
                road:"",
                city:""
            }
        }
    })

    console.log({user});

    const handle= () =>{
        // console.log(refVar.current.innerHTML);
        refVar.current.className = 'text-red-500';
        // document.f
        // console.log(refName.current.value);
        // const userObj = {
        //     name: name1,
        //     email
        // }
        // setUser(userObj)
    }
    const handleFieldInput = (propertyName,value) =>{
        const newUserObj = {...user}
        newUserObj[propertyName] = value;
        // setUser(newUserObj)
        // if (newUserObj === "name") {
        //     newUserObj.name = value
        // }
    }

    // console.log({name1,refVar});
    return (
        <div>
            <p ref={refVar}>This is test </p>
            RefComponent 123121
            <br />
            <input ref={refName} type="text" placeholder='Ref field' />
            <br />
            {/* <input onChange={(e)=>handleFieldInput('name',e.target.value)} type="text" placeholder='name field'  /> */}
            {/* <input onChange={(e)=>handleFieldInput('email',e.target.value)} type="text" placeholder='email field'  /> */}
            <input onChange={(e)=>dispatchUser({type:"name",value:e.target.value})} type="text" placeholder='name field'  />
            <input onChange={(e)=>dispatchUser({type:"parmanent_roadAddress",value: e.target.value})} type="text" placeholder='parament add field'  />
            <br />
            <button className='text-red-500' onClick={handle}>Click</button>
        </div>
    );
};

export default RefComponent;