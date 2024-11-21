import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ForgetPass = () => {
  const { handleForgetPass } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location?.state?.email || "");
  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Email Required",
        text: "Please provide a valid email address!",
      });
      return;
    }

    handleForgetPass(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Sent",
          text: `A reset password link has been sent to ${email}. Please check your inbox.`,
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          window.open("https://mail.google.com", "_blank");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-none p-6">
        <h2 className="text-center text-lg font-bold">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
