import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminForm = () => {
    const forms = useSelector(state => state.driversInformation);
    const location = useLocation();
    const plateID = forms.map(form => form.plateNumber)


    return(
        <div>
            <h1>Plate Number: {location.state.plateNumber}</h1>
            {
                plateID.includes(location.state.plateNumber) &&
                forms.filter(form => form.plateNumber === location.state.plateNumber).map(form => {
                    return <p key = {form.plateNumber}>Hello! the status of your submission is {form.status}</p>
                })
            }
            {
                !plateID.includes(location.state.plateNumber) && 
                <p>Plate Number is not found</p>
            }

             <Link to='/'><span>Return to homepage</span></Link>
        </div>
    )
}

export default AdminForm;