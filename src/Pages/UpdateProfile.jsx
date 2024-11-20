import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, message, setMessage, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("You must be logged in to update your profile.");
      return;
    }

    const updatedData = {
      displayName: name || user.displayName,
      photoURL: photoURL || user.photoURL,
    };

    updateUserProfile(updatedData)
      .then(() => {
        setMessage("Profile updated successfully!");

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Profile updated successfully, ${updatedData.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          setMessage("")
          navigate("/my-profile");
        }, 1600);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);

        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Failed to update profile.",
          text: "Please try again later.",
          showConfirmButton: true,
        });

        setMessage("Failed to update profile. Please try again.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#2C3E50] py-16">
        <div className="bg-white bg-opacity-30 mt-2 max-w-md w-full mx-auto pb-5 rounded-lg p-5">
          <h2 className="text-center text-2xl font-bold">Update Profile</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered"
                placeholder={user?.displayName || ""}
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
                placeholder={user?.photoURL || ""}
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </form>
          {message && (
            <p
              className={`text-center mt-4 ${
                message.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProfile;