import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate=useNavigate();
    const Page=()=>{
        navigate('/myProfile')
    }
    return (
        <div>
            <button className='btn btn-accent' onClick={Page}> Edit Profile</button>
        </div>
    );
};

export default Profile;