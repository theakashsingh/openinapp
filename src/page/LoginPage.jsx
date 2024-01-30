import Login from "../component/Login";
import MobileSocialIcons from "../component/MobileSocialIcons";
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

        <div className="mobile_login_header">
          <div className="mobile_login_icon">
          <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z" fill="#FAFAFB"/>
</svg>
<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z" fill="#605BFF"/>
</svg>

          </div>
          <div className="mobile_login_title">
            Base
          </div>
        </div>
        <Login />
        <MobileSocialIcons/>
      </div>
    </div>
  );
};

export default LoginPage;
