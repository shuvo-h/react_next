import React from 'react';

const SSR = async() => {
    const todoRes = await fetch("https://jsonplaceholder.typicode.com/todos",{
        cache:"force-cache"
    });
    const todoes = await todoRes.json();
    console.log(todoes,"SSG");


    return (
        <div>
            {
                todoes.map((el:any,index:any)=><h2 key={index}>{index+1}) {el.title}</h2>)
            }
        </div>
    );
};

export default SSR;