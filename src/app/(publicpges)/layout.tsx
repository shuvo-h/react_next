import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav>Dashvboard nav  Public</nav>
            {children}
        </div>
    );
};

export default layout;