import { Link } from "react-router-dom";

function LoginCard () {
    return (
        <>
            <div className="logincard">
                <div className="logincard-container">
                    <div className="login-links">
                        <Link to={"/daxilol"} className="login-link" target="_blank">Daxil Ol</Link>
                        <Link to={"üzvol"} className="login-link signup-link" target="_blank">Üzv Ol</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginCard;