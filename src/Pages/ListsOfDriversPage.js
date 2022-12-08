import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import AdminRegistrationPage from "../Components/AdminRegistrationPage";

const ListsOfDrivers = () => {
    const lists = useSelector(state => state);

    const [selectedInfo, setSelectedInfo] = useState();

    const pendingApproval = lists.filter(info => info.status === 'pending');
    const approvedInfo = lists.filter(info => info.status === 'approved');
 

    return(
        <div>
            <div>
                <Link to = '/'>
                    <button>Logout</button>
                </Link>
            </div>

            <div>
                <button
                    className={ selectedInfo === 1 ? 'List-status-active' : 'List-status-inactive'}
                    onClick={() => {
                        setSelectedInfo(1);
                    }}
                >Pending</button> <br />

                 <button
                    className={ selectedInfo === 2 ? 'List-status-active' : 'List-status-inactive'}
                    onClick={() => {
                        setSelectedInfo(2);
                    }}
                >Approved</button> 
            </div>

            <div>
                {
                    selectedInfo === 1 && 
                    <>
                        <span>Request: {pendingApproval.length} </span>
                        {
                            pendingApproval.map(list => {
                                return <AdminRegistrationPage key = {list.plateNumber}
                                info = {list}
                                />
                            })
                        }
                    </>
                }

                {
                    selectedInfo === 2 && 
                    <>
                        <span>Request: {approvedInfo.length} </span>
                        {
                            approvedInfo.map(list => {
                                return <AdminRegistrationPage key = {list.plateNumber}
                                info = {list}
                                />
                            })
                        }
                    </>
                }
            </div>
        </div>
    )
}


export default ListsOfDrivers;
