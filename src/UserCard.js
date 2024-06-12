import React from 'react';

const UserCard = ({user,detailsHandler}) => {
    console.log(user);

    return (
        <div className='border rounded-md'>
            <h1>{user.id}</h1>
            <h5>{user.name}</h5>
            <p>Email: {user.email}</p>
            <button className='border' onClick={()=>detailsHandler(user.id)}>Details</button>
        </div>
    );
};

export default UserCard;