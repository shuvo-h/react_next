import React from 'react';

const UserCard = ({user}) => {
    console.log(user);
    return (
        <div>
            <h4>Name: {user.nameKey}</h4>
            <h4>Email: {user.emailKey}</h4>
            <h4>Password: {user.passwordKey}</h4>
        </div>
    );
};

export default UserCard;