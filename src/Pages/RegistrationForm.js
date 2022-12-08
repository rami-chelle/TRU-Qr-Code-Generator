import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
    const [plateNumber, setplateNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [barangay, setBarangay] = useState('');
    const [driversLicense, setDriversLicense] = useState('');
    const [confirmation, setConfirmation] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitInfo = () => {
        dispatch({
            type: 'Submit_Info',
            payload: {
                plateNumber: plateNumber,
                firstName: firstName,
                lastName: lastName,
                barangay: barangay,
                driversLicense: driversLicense,
                status: 'pending'
            }});
            alert(`${plateNumber} has been added`);
            navigate('/lists-of-drivers', {state: {plateNumber: plateNumber}});
    }

    return(
        <div>
            <form onSubmit = {(e) => {
                e.preventDefault();
                setConfirmation(!confirmation);
            }}>
                <label>Plate Number:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {plateNumber}
                    onChange = {(e) => setplateNumber(e.target.value)}
                />
                <br /> <br />

                <label>First Name:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                />
                <br /> <br />

                <label>Last Name:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                />
                <br /> <br />

                <label>Barangay:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {barangay}
                    onChange = {(e) => setBarangay(e.target.value)}
                />
                <br /> <br />

                <label>Driver's License:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {driversLicense}
                    onChange = {(e) => setDriversLicense(e.target.value)}
                />
                <br /> <br /> 

                <button type = 'submit'>Register</button>
            </form>

            {
                confirmation &&
                <div className = 'registrationForm-modal-container'>
                    <h1>Driver's Information Summary</h1>
                    <p>Plate Number: <span>{plateNumber}</span></p>
                    <p>First Name: <span>{firstName}</span></p>
                    <p>Last Name: <span>{lastName}</span></p>
                    <p>Barangay: <span>{barangay}</span></p>
                    <p>Driver's License: <span>{driversLicense}</span></p>

                    <div className = 'registrationForm-button-container'>
                        <button 
                            onClick = {() => {
                                setConfirmation(!confirmation)
                            }}>Cancel</button>
                         <button 
                            type = 'submit'
                            onClick = {(e) => {
                                e.preventDefault();
                                submitInfo();
                                setConfirmation(!confirmation);
                            }}>Register</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default RegistrationForm;