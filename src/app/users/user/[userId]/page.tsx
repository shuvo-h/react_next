import React from 'react';

const page = ({params}:any) => {
    console.log(params);

    return (
        <div>
            dynamic user {params.userId}
        </div>
    );
};

export default page;