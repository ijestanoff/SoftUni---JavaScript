import { useEffect, useState } from 'react';

export default function ControlledForm() {
    const [user, setUser] = useState({
        _id: '',
        username: 'defaultUsername',
        email: '',
        age: '',
    });

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const profile = await response.json();

            console.log(profile);
            setUser(profile);
        })();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const usernameChangeHandler = (e) => {
        setUser(oldUser => ({...oldUser, username: e.target.value}));
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={usernameChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}