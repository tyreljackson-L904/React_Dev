import React from 'react'

function signup() {
    return (
        <div>
            <form action="/POST" className="signup">
                <label htmlFor="Name">
                    Name
                </label>
                <input type="text" className="userNameEntry"/>
            </form>
        </div>
    )
}

export default signup
