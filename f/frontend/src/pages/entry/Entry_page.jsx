// import Jumbotron from 'react-bootstrap/cjs/'; // Correct import statement
// import Button from 'react-bootstrap/Button'; // Import Button component
// import { Jumbotron } from 'react-bootstrap/';


import './entry_style.css'
import { Route, Routes} from 'react-router-dom';
import SignUp from '../../components/SignUp' 
import Login from '../../components/Login'
import Home from '../../pages/entry/Home'

// import {Jumbotron} from 'react-bootstrap';

const Entry_page = () => {
    return (
        <>
            <div className="entry_page">
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            {/* <SignUp />
            <Login/> */}


                {/* <div className='jumbotron form-box'>
                    <Login/>
                </div> */}

                {/* <div className='jumbotron form-box'>
                </div> */}

            </div>
        </>

    )
}

export default Entry_page
