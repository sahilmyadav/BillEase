import './Login.css';
import {useContext, useState} from "react";
import toast from "react-hot-toast";
import {login} from "../../Service/AuthService.js";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../context/AppContext.jsx";

const Login = () => {
    const {setAuthData} = useContext(AppContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data) => ({...data, [name]: value}));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await login(data);
            if (response.status === 200) {
                toast.success("Login successfull");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                setAuthData(response.data.token, response.data.role);
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
            toast.error("Email/Password Invalid");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-background">
            <div className="login-card fade-in">
                <div className="login-card-header">
                    <div className="text-center mb-4">
                        <div className="login-logo-container">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="loginGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{stopColor:'#6366F1',stopOpacity:1}} />
                                        <stop offset="100%" style={{stopColor:'#8B5CF6',stopOpacity:1}} />
                                    </linearGradient>
                                </defs>
                                <circle cx="40" cy="40" r="38" fill="url(#loginGradient)" fillOpacity="0.1"/>
                                <circle cx="40" cy="40" r="32" fill="url(#loginGradient)"/>
                                <path d="M30 35 L36 40 L50 28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                <circle cx="36" cy="48" r="3" fill="white"/>
                            </svg>
                        </div>
                        <h1 className="login-title">Welcome Back</h1>
                        <p className="login-subtitle">
                            Sign in to access your BillEase account
                        </p>
                    </div>
                </div>
                <div className="login-card-body">
                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label-modern">
                                <i className="bi bi-envelope-fill me-2"></i>
                                Email Address
                            </label>
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="yourname@example.com" 
                                className="form-control-modern" 
                                onChange={onChangeHandler} 
                                value={data.email}
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label-modern">
                                <i className="bi bi-lock-fill me-2"></i>
                                Password
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                className="form-control-modern" 
                                onChange={onChangeHandler} 
                                value={data.password}
                                required 
                            />
                        </div>
                        <div className="d-grid mt-4">
                            <button type="submit" className="btn-gradient-login" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Sign In
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="login-card-footer">
                    <p className="text-center text-secondary mb-0">
                        <i className="bi bi-shield-check me-2"></i>
                        Secure Login
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;