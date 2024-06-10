import { useEffect, useState } from "react";
import User from "./components/User";
import UserCard from "./components/UserCard";
import ProductComponent from "./components/ProductComponent";

const initialdata = [
  {
    name:"damiel  0",
    email:"ab@mail.com",
    phone:"012334",
  },
  {
    name:"damiel 1",
    email:"ab02@mail.com",
    phone:"01233402",
  },
  {
    name:"damiel 2",
    email:"ab0222@mail.com",
    phone:"0123340222",
  },
  {
    name:"damiel 3",
    email:"ab0222@mail.com",
    phone:"0123340222",
  },
  {
    name:"damiel 4",
    email:"ab0222@mail.com",
    phone:"0123340222",
  },
]

// initialdata.map((item,index)=>{
//   console.log({item,index});
// })



function HomePageComponent() {
  let title = 'Hello world! React. Prent 1';
  // let titles;
  const [users,setUsers] = useState(initialdata);
  const [count,setCout] = useState(0);
  const [password,setPassword] = useState(null);
  const [email,setEmail] = useState(null);
  const [name,setName] = useState(null);
  const [agree,setAgree] = useState(false);
  const [user,setuser] = useState({nameKey:"abd test name"});




  const addUsermethod = () =>{
    const temp = [...users]
    temp.push({name:"new name",email:"newEma",phone:"123"})
    setUsers(temp)
  }

  const countMenthd = () =>{
    const newValue =count + 1
    setCout(newValue)
  }

  // 1st : function,
  // 2nd : []
  // useEffect(()=>{
  //   const temp = [...users]
  //   temp.push({name:`new name ${count}`,email:"newEma",phone:"123"})
  //   setUsers(temp)
  // },[count,])

  const sigupHandler = (event) =>{
    event.preventDefault();
    if (agree) {
      // console.log("Signyp",event);
      const userObject = {
        nameKey:name,
        emailKey: email,
        passwordKey:password,
      }
      // console.log(userObject);
      setuser(userObject)
    }else{
      alert("You must nedd to be agree")
    }
  }

  const nameChangeHandler = (event) =>{
    const name = event.target.value;
    // console.log(name);
    setName(name)
  }
  const emailChangeHandler = (event) =>{
    const email = event.target.value;
    // console.log(email);
    setEmail(email)
  }
  const passwordChangeHandler = (event) =>{
    const password = event.target.value;
    // console.log(password);
    setPassword(password)
  }

  console.log({name,email,password, agree})

  return (
    <div>
      <div>
          <h1 className="text-3xl text-pink-700 font-bold">
            {title}
          </h1>
          <div className="grid grid-cols-4 gap-2">
            {
              users.map((singleUserObj,index)=>{
                return <User user={singleUserObj} index={index} />
              })
            }
          </div>
            <button onClick={addUsermethod}>Add user</button>
            <br />
            <div className="border">
              <p>Counter : {count}</p>
              <button onClick={countMenthd}>count me btn</button>
            </div>
      </div>
        <hr />
        {/* <div className="grid grid-cols-2 my-24">
          <form className="max-w-[450px] mx-auto " >
            <label >
              Name
              <input onChange={nameChangeHandler} className="block border" type="text" />
            </label>
            <label >
              Email
              <input onChange={emailChangeHandler} className="block border" type="email" />
            </label>
            <label >
              Password
              <input onChange={passwordChangeHandler}  className="block border" type="password" />
            </label>
            <label className="block">
              Agree
              <button className="mx-2" onClick={()=>{setAgree(false)}} type="button">No</button>
              <button onClick={()=>{setAgree(true)}} type="button">Yes</button>
            </label>
            <button onClick={sigupHandler} type="submit">Signup</button>
          </form>
          <div>
            <h1>ABC</h1>
            <UserCard user={user}></UserCard>
          </div>
        </div>
        <hr /> */}

        <div className='parent my-24 max-w-[400px] mx-auto border'>
          <h2>Paret h2 Tag</h2>
          <ProductComponent>
            <article>
              <p>React component child 22</p>
              <UserCard user={user}></UserCard>
              <p>React component child 33</p>
            </article>
          </ProductComponent>
        </div>
    </div>
  );
}

export default HomePageComponent;
