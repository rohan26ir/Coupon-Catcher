import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const UpdateProfile = () => {
  const { user, message, setMessage, updateUserProfile } = useContext(AuthContext); 
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!user) {
      setMessage('You must be logged in to update your profile.');
      return;
    }

    updateUserProfile({
      displayName: name || user.displayName,
      photoURL: photoURL || user.photoURL,
    })
      .then(() => {
        setMessage('Profile updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        setMessage('Failed to update profile. Please try again.');
      });
  };

  return (
    <div className='bg-white mt-2 pb-5 rounded-lg p-5'>
      <h2 className='text-center text-2xl font-bold'>Update Profile</h2>
      <form onSubmit={handleUpdate} className=''>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            className="input input-bordered"
            placeholder={user?.displayName || 'Enter new name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            id="photoURL"
            className="input input-bordered"
            placeholder={user?.photoURL || 'Enter new photo URL'}
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Profile</button>
        </div>


      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProfile;