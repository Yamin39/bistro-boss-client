import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logIn, googleLogin } = useAuth();
  const captchaRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // captcha validation
    const user_captcha_value = captchaRef.current.value;
    if (!validateCaptcha(user_captcha_value)) {
      toast.error("Captcha Does Not Match"),
        {
          duration: 2000,
        };
      return;
    }

    logIn(email, password)
      .then((res) => {
        console.log(res?.user);
        Swal.fire({ icon: "success", text: "Login successful!" });
        navigate(from || "/");
      })
      .catch((err) => console.log(err?.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res?.user);
        Swal.fire({ icon: "success", text: "Login successful!" });
        navigate(from || "/");
      })
      .catch((err) => console.log(err?.message));
  };

  return (
    <>
      <Helmet>
        <title>Login | Bistro Boss</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input type="text" ref={captchaRef} name="captcha" placeholder="Type here" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              <p className="text-center text-gray-400">
                <small>
                  New Here?{" "}
                  <Link className="text-primary hover:underline" to="/sign-up">
                    Create an account
                  </Link>
                </small>
              </p>
            </form>
            <div className="divider px-8">OR</div>
            <div className="px-8 pb-8">
              <button
                onClick={handleGoogleLogin}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
