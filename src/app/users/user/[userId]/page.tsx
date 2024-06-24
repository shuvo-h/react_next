import React from 'react';

const page = ({params}) => {
    console.log(params);

    return (
        <div>
            dynamic user {params.userId}
        </div>
    );
};

export default page;