import React from 'react';

const ProductComponent = ({user,ngfg,children}) => {
    return (
        <div className='my-24 max-w-[200px] mx-auto border'>
            ProductComponent here
            {/* <h2>{user}</h2> */}
            <aside>{children}</aside>
            more details 
        </div>
    );
};

export default ProductComponent;