import { useState } from 'react'; 
import QRCode from 'react-qr-code';
import Info from '../Data/Info.json';

const UserPage = () => {
const [value, setValue] = useState();

const infoList = Info;
console.log(infoList);


return (
	<div className="user-container">
        <center>
            <br />
            {value && (
            <QRCode
                title="...Info"
                value={value}
            />
            )}
            <br />
            <br />

            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Input Plate Number"
            />

            <br />

            <button
            value = 'submit'
            type = 'submit'
            >
            SCAN
            </button>
           
            

            
        </center>
	</div>
);
}

export default UserPage;
