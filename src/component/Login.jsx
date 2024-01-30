import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () =>{
      navigate("/upload")
  }
  return (
    <div className="login">
        <div className="login_header">

      <h1>Sign In</h1>
      <p>Sign in your account</p>
        </div>
      <div className="social_sign_in">
        <div className="google_sign">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1163_66)">
              <path
                d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                fill="#4285F4"
              />
              <path
                d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                fill="#34A853"
              />
              <path
                d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                fill="#FBBC05"
              />
              <path
                d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_1163_66">
                <rect
                  width="15.3686"
                  height="15.3686"
                  fill="white"
                  transform="translate(0.0396118 0.287949)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Sign in with Google</span>
        </div>
        <div className="apple_sign">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1163_74)">
              <path
                d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                fill="#999999"
              />
            </g>
            <defs>
              <clipPath id="clip0_1163_74">
                <rect
                  width="12.6242"
                  height="15.3686"
                  fill="white"
                  transform="translate(0.568054 0.190186)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Sign in with Apple</span>
        </div>
      </div>
      <div className="sign_in_box">
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <p className="forget_password">Forget Password?</p>
        <button className="sign_in_button" onClick={handleLogin}>Sign In</button>
      </div>
      <p className="register_link">
        Don&apos;t have an account? <span>Register here</span>
      </p>
    </div>
  );
};

export default Login;
