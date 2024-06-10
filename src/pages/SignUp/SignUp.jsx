import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.PhotoURL)
          .then((res) => {
            console.log(res?.user);
            Swal.fire({ icon: "success", text: "SignUp successful!" });
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err?.message));
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Bistro Boss</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name?.type === "required" && <span className="text-red-500">Name field is required</span>}
              </div>
              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("PhotoURL", { required: true })} name="PhotoURL" placeholder="Photo URL" className="input input-bordered" />
                {/* handle require error with hook form */}
                {errors.PhotoURL?.type === "required" && <span className="text-red-500">PhotoURL field is required</span>}
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email?.type === "required" && <span className="text-red-500">Email field is required</span>}
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && <span className="text-red-500">Password field is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-500">Password must be at least 6 characters</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-500">Password must be less than or equal 20 characters</span>}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter, and one number</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <p className="text-center text-gray-400">
                <small>
                  Already registered?{" "}
                  <Link className="text-primary hover:underline" to="/login">
                    Go to log in
                  </Link>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
