import Title from '@/components/common/title/Title';
import React from 'react';

const Tips = () => {
    return (
        <div className='my-4 border'>
            <Title title='Tips List' size='lg' className='text-pink-800' />
            <div>
                tips card 1
                tips card 2
            </div>
        </div>
    );
};

export default Tips;