import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("password")); // watch input value by passing the name of it

  return (
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
              <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
              {errors.password?.type === "required" && <span className="text-red-500">Password field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
