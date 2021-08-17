import React from 'react';

const UserGreeting = ( props ) => {
    return (
        <div>
            <h1>{ props.user }</h1>
        </div>
    );
}

const GuestGreeting = ( props ) => {
    return (
        <div>
            <h1>{ props.guest }</h1>
        </div>
    );
}

const Greeting = ( props ) => {
    return (
        <div>
            { props.isLoggedIn ? <UserGreeting user="Welcome Back!" /> : <GuestGreeting guest="Please sign in." />}
        </div>
    )
}

export default Greeting;