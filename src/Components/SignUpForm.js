import React, { useState } from 'react';

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');

    const containerStyle = {
        maxWidth: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginTop: '50px'
    };

    const labelStyle = {
        display: 'block',
        margin: '10px 0',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        marginBottom: '10px',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAddressLine1Change = (e) => {
        setAddressLine1(e.target.value);
    };

    const handleAddressLine2Change = (e) => {
        setAddressLine2(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform signup logic here
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Address Line 1:', addressLine1);
        console.log('Address Line 2:', addressLine2);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Country:', country);
        console.log('Zipcode:', zipcode);

        // Reset the form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setAddressLine1('');
        setAddressLine2('');
        setCity('');
        setState('');
        setCountry('');
        setZipcode('');
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    First Name:
                    <input type="text" value={firstName} onChange={handleFirstNameChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Last Name:
                    <input type="text" value={lastName} onChange={handleLastNameChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Address Line 1:
                    <input type="text" value={addressLine1} onChange={handleAddressLine1Change} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Address Line 2:
                    <input type="text" value={addressLine2} onChange={handleAddressLine2Change} style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    State:
                    <input type="text" value={state} onChange={handleStateChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Country:
                    <input type="text" value={country} onChange={handleCountryChange} required style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Zipcode:
                    <input type="text" value={zipcode} onChange={handleZipcodeChange} required style={inputStyle} />
                </label>
                <button type="submit" style={buttonStyle}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
