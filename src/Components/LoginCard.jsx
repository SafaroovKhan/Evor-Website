import { Link } from "react-router-dom";

function LoginCard () {
    return (
        <>
            <div className="logincard">
                <div className="logincard-container">
                    <div className="login-links">
                        <Link to={"/daxilol"} className="login-link" >Daxil Ol</Link>
                        <Link to={"üzvol"} className="login-link signup-link" >Üzv Ol</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginCard;