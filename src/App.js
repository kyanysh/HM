import React, { useState } from 'react';

const RegistrationForm = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [showData, setShowData] = useState(false);

        const handleFirstNameChange = (event) => {
            setFirstName(event.target.value);
        };

        const handleLastNameChange = (event) => {
            setLastName(event.target.value);
        };

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            setShowData(true);
        };

        //     return ( <
        //         div style = {
        //             { display: 'flex', flexDirection: 'column', alignItems: 'center' } } >
        //         <
        //         h2 > Registration Form < /h2> <
        //         form onSubmit = { handleSubmit } >
        //         <
        //         input type = "text"
        //         placeholder = "First Name"
        //         value = { firstName }
        //         onChange = { handleFirstNameChange }
        //         style = {
        //             { margin: '5px', padding: '5px', width: '200px', textAlign: 'center' } }
        //         /> <
        //         input type = "text"
        //         placeholder = "Last Name"
        //         value = { lastName }
        //         onChange = { handleLastNameChange }
        //         style = {
        //             { margin: '5px', padding: '5px', width: '200px', textAlign: 'center' } }
        //         /> <
        //         input type = "email"
        //         placeholder = "Email"
        //         value = { email }
        //         onChange = { handleEmailChange }
        //         style = {
        //             { margin: '5px', padding: '5px', width: '200px', textAlign: 'center' } }
        //         /> <
        //         button type = "submit"
        //         style = {
        //             { margin: '5px', padding: '5px', backgroundColor: 'green', color: 'white', border: 'none' } } >
        //         Register <
        //         /button> <
        //         /form> {
        //             showData && ( <
        //                 div style = {
        //                     { marginTop: '10px', textAlign: 'center' } } >
        //                 <
        //                 p > First Name: { firstName } < /p> <
        //                 p > Last Name: { lastName } < /p> <
        //                 p > Email: { email } < /p> <
        //                 /div>
        //             )
        //         } <
        //         /div>
        //     );
        // }

        export default RegistrationForm;