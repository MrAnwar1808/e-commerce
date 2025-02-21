
import { useState } from 'react'
import './switch.css'


function Switch() {


    //const [status, setStatus] = useState('guest');

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [number, setNumber] = useState('');

    

    // const handleLogin = () => {
    //    // setStatus('user')
    //     setStatus('admin')
    // }

    const savedStatus = localStorage.getItem('status') || 'guest'
    const [status, setStatus] = useState(savedStatus)

    const savedName = localStorage.getItem('name') || ''
    const savedEmail = localStorage.getItem('email') || ''
    const savedPassword = localStorage.getItem('password') || ''
    const savedconfirmPassword = localStorage.getItem('confirmPassword') || ''
    const savedNumber = localStorage.getItem('number') || ''


    const [name, setName] = useState(savedName)
    const [email, setEmail] = useState(savedEmail)
    const [password, setPassword] = useState(savedPassword)
    const [confirmPassword, setConfirmPassword] = useState(savedconfirmPassword)
    const [number, setNumber] = useState(savedNumber)

     

    const handleCreateaccount = (e) => {
        e.preventDefault();
        setStatus('user');
        setStatus('user');
        //Save form data to localStorage
        localStorage.setItem('status', 'user');
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password)
        localStorage.setItem('ConfirmPassword',confirmPassword)
        localStorage.setItem('number', number);

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

    }

    const handleLogin = () => {
        setStatus('user')
    }

    const userLogin = () => {
        setStatus('homepage')
    }

    const handleAdminlogin = () => {
        //setStatus('newUser')
        setStatus('adminpage')
    }




    const handleAdmin = () => {
        setStatus('admin');
        localStorage.setItem('status', 'admin')
    };

    const handleLogout = () => {
         setStatus('guest');
       
        localStorage.setItem('status', 'guest')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('ConfirmPassword')
        localStorage.removeItem('number')

    };
    



    // const handleSubmit = () => {
    //     setStatus('user');
    //     localStorage.setItem('status', 'user'); 
    // };

    // const handleAdmin = () => {
    //     setStatus('admin');
    //     localStorage.setItem('status', 'admin');
    // };

    // const handleLogout = () => {
    //     setStatus('guest');
    //     localStorage.setItem('status', 'guest');
    // };



    const renderStatusContent = () => {
        //     switch (status) {
        //         case 'guest':
        //             return <button onClick={handleLogin}>Login</button>;
        //         case 'user':
        //             return <h1>Welcome, User!</h1>;
        //         case 'admin':
        //             return <h1>Admin Dashboard</h1>;
        //         default:
        //             return null;
        //     }
        // }

        switch (status) {
            case 'guest':
                return (
                    <div className="guest-container">
                        <h1>Create an Account Here!</h1>
                        <form onSubmit={handleCreateaccount} className="form-container">
                            <div>
                                <label>Name: </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label>Email: </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label>Password: </label>
                                <input
                                    type='text'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label>Confirm Password: </label>
                                <input
                                    type='text'
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label>Contact no: </label>
                                <input
                                    type="text"
                                    value={number}
                                    onChange={(event) => setNumber(event.target.value)}
                                    required
                                />
                            </div>


                            <button type="submit" >Create an Account</button>
                            <button type='login' onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                )
            case 'user':
                return (
                    <div className='user-container'>
                        {/* <h1>Welcome, User!</h1>
                    <button onClick={handleAdmin}>Switch to Admin</button>
                    <button onClick={handleLogout}>Logout</button> */}



                        {/* <h1>Welcome, {name}!</h1>
                    <p>Email: {email}</p>
                    <p>Contact No: {number}</p>
                    <button onClick={handleAdmin}>Switch to Admin</button>
                    <button onClick={handleLogout}>Logout</button> */}

                        <h1>Login Here!</h1>

                    <form onSubmit={userLogin} className="form-container">
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Password: </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>

                        <button type="submit">Login</button>
                    </form>
                    </div>
                )
            case 'admin':
                return (
                    <div className='admin-container'>


                        {/* <h1>Admin Dashboard</h1> */}
                        {/* <button onClick={handleLogout}>Logout</button> */}
                        {/* <button onClick={homepage}>Home</button> */}

                    <h1>Admin Login Here!</h1>

                    <form onSubmit={handleAdminlogin} className="form-container">
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>Password: </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>

                        <button type="submit">Admin Login</button>
                    </form>
                    

                    </div>
                )

            case 'adminpage':
                return (
                    <div className='adminpage'>
                        <h1>Welcome To Khkr Innovators Tech Admin Page</h1>
                        <button onClick={userLogin}>Logout</button>

                    </div>
                )
                case 'homepage':
                    return (
                        <div className='home'>
                             <header className="header">
                             <div className="logo">
                             <img src="/images/amazon.webp" alt="Amazon Logo" />
                             </div>
                            <div className="search-bar">
                            <input type="text" placeholder="Search for products..." />
                            <button className="btn">Search</button>
                            </div>
                            <nav className="nav-links">
                            <a href="/home">Home</a>
                            <a href="/shop">Shop</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/admin" onClick={handleAdmin}>Admin</a>
                            <a href="/cart">Cart</a> 
                            <a href='./logout' onClick={handleLogout}>Logout</a>
                            </nav>
                            </header>
                        </div>
                    )
            default:
                return null;
        }
    }

    return (
        <div>
            {renderStatusContent()}
        </div>
    )
}

export default Switch;
