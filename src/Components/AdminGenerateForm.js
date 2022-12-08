import { useState } from 'react'; 
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router';

const AdminGenerateForm = () => {
    // const [value, setValue] = useState();
    const [plateNumber, setPlateNumber] = useState('');
    const navigate = useNavigate();

    return (
        <div className = "generate-from-container">
        <center>
            <br />
            <form>
                <label>Enter Plate Number:</label> <br />
                    <input
                        type="text"
                        value = {plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value)}
                        placeholder = "Search..."
                    />
            </form>

            <br />
            <br />

            {plateNumber && (
            <QRCode
                value = {plateNumber}
            />
            )}

            <br />

            <button
                type = 'button'
                onClick = {() => {
                    if(plateNumber.trim() === ''){
                        alert(`Please input valid plate number`)
                    }else {
                        navigate('/admin-form-list', {state: {plateNumber: plateNumber}})
                    }
                }}
            >Enter</button>
        </center>
	</div>
    )
};

export default AdminGenerateForm;