import {Link} from 'react-router-dom';

const AdminLandingPage = () => {
    return(
        <div>
            <Link to = '/admin-register-form'>
                <button>Register Tricycle Driver</button>
            </Link>
            <br /> <br /> 
            <Link to = '/generate-qrcode'>
                <button>Generate QR Code</button> <br /> <br /> 
            </Link>
            <Link to = '/lists-of-drivers'>
                <button>Lists of Tricycle Driver</button>
            </Link>
        </div>
    )
   
}

export default AdminLandingPage;