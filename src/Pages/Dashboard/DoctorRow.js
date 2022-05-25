import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><div class="avatar">
                <div class="w-10 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                {/* <button className='' onClick={() => handleDelete(email)}>Delete</button> */}
            </td>
        </tr>
    );
};

export default DoctorRow;