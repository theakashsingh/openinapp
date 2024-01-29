import Login from "../component/Login";
import SocialIcons from "../component/SocialIcons";
import "./loginpage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="left_side">
        <div className="left_inside">
          <div className="login_icon">
            <svg
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
            </svg>
            <svg
              width="87"
              height="30"
              viewBox="0 0 87 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646"
                stroke="#605BFF"
                strokeWidth="6"
              />
            </svg>
          </div>
          <div className="base">BASE</div>
          <SocialIcons />
        </div>
      </div>
      <div className="right_side">
        {" "}
        <Login />{" "}
      </div>
    </div>
  );
};

export default LoginPage;
