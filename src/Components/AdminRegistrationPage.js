import {useDispatch} from 'react-redux';


const AdminRegistrationPage = ({info}) => {
    const dispatch = useDispatch();
    console.log({info});
    return (
        <div className = 'AdminRegisterPage-container'>
            <p>Plate Number: {info.plateNumber}</p>
            <p>Name: {info.firstName} {info.lastName}</p>
            <p>Barangay: {info.barangay}</p>
            <p>License Number: {info.driversLicense}</p>

            {
                info.status === 'pending' &&
                <button 
                    onClick = {() => dispatch({type: 'MOVE_TO_APPROVE', payload: {plateNumber: info.plateNumber}})
                    }
                    >Register
                </button>
            }

            {
                info.status === 'approved' &&
                <button 
                    onClick = {() => dispatch({type: 'MOVE_TO_APPROVE', payload: {plateNumber: info.plateNumber}})}
                    >Move to approve
                </button>
            }

            <button 
                onClick = {() => dispatch({type: 'DELETE', payload: {plateNumber: info.plateNumber}})}
                >Delete
                </button>
        </div>
    )
}

export default AdminRegistrationPage;