

const User = (props) => {
    // console.log(props.index);

    const isEven =  props.index %2 === 0
    const number = isEven ? 200 : 500;
    return (
        <div className='border'>
            {
                isEven && <h2>Name: { props.user.name}</h2>
            }
            {
                !isEven && <h2>Name: N/A</h2>
            }

            {
                isEven ? <h2>Email: {props.user.email}</h2> :  <h2>Email: N/A</h2>
            }
            <h2>Phone: {props.user.phone} {number}</h2>
            <input type="text" />
        </div>
    );
};

export default User;