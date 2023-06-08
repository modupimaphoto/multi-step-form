import { useState } from 'react';

const YourInfo = () => {
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })
    const handleNameChange = (event) => {
        setPersonalDetails( (prevName) => ({
            ...prevName,
            name: event.target.value
        }));
    }
    const handleEmailChange = (event) => {
        setPersonalDetails( (prevEmail) => ({
            ...prevEmail,
            email: event.target.value
        }));
    }
    const handlePhoneNumberChange = (event) => {
        setPersonalDetails( (prevPhoneNumber) => ({
            ...prevPhoneNumber,
            phoneNumber: event.target.value
        }));
    }
    
    return (
        <>
            <div className="pt-3  mb-4">
                <h4 className="heading">
                    Personal info
                </h4>
                <p className="text-muted">
                    Please provide your name, email address, and phone number.
                </p>
            </div>
            <div className="">
                <form id="form">
                    <div className="mb-4">
                        <label for="name" className="mb-2" >Name</label>
                        <span id="name-error"></span>
                        <input type="text" id="name" placeholder="e.g. Stephen King" 
                            onChange={ handleNameChange } value={ personalDetails.name }/>
                    </div>
                    <div className="mb-4">
                        <label for="email" className="mb-2" >Email Address</label>
                        <span id="email-error"></span>
                        <input type="email" id="email" placeholder="e.g. stephenking@lorem.com"
                            onChange={ handleEmailChange } value={ personalDetails.email } />
                    </div>
                    <div className="mb-5">
                        <label for="phone-number" className="mb-2" >Phone Number</label>
                        <span id="phone-number-error"></span>
                        <input type="text" id="phone-number" placeholder="e.g. +1 234 567 890"
                            onChange={ handlePhoneNumberChange } value={ personalDetails.phoneNumber } />
                    </div>
                </form>
            </div>
        </>
    );
}
export default YourInfo;