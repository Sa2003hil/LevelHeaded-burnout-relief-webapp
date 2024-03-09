import React from 'react'

const UserProfilePage = ({ params }) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Profile</h1>
            <hr />
            <p>Profile Page {params.id}</p>
        </div>
    )
}

export default UserProfilePage