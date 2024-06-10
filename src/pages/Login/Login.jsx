import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logIn } = useAuth();
  const captchaRef = useRef();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // captcha validation
    const user_captcha_value = captchaRef.current.value;
    if (!validateCaptcha(user_captcha_value)) {
      toast.error("Captcha Does Not Match"),   {
        duration: 2000,
      }
    ;
      return;
    }

    logIn(email, password)
      .then((res) => {
        console.log(res?.user);
        Swal.fire({ icon: "success", text: "Login successful!" });
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
            <form onSubmit={handleLogin} className="card-body">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
