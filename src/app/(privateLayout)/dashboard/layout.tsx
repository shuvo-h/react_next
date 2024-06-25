import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav>Dashvboard nav</nav>
            {children}
        </div>
    );
};

export default layout;