import React from 'react';

const ISG = async() => {
    const todoRes = await fetch("https://jsonplaceholder.typicode.com/todos",{
        next:{
            revalidate: 60 * 1
        }
    });
    const todoes = await todoRes.json();
    console.log(todoes,"ISG");


    return (
        <div>
            {
                todoes.map((el:any,index:any)=><h2 key={index}>{index+1}) {el.title}</h2>)
            }
        </div>
    );
};

export default ISG;