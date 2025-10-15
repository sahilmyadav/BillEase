import {useState} from "react";
import {addUser} from "../../Service/UserService.js";
import toast from "react-hot-toast";

const UserForm = ({setUsers}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        role: "ROLE_USER"
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await addUser(data);
            setUsers((prevUsers) => [...prevUsers, response.data]);
            toast.success("User Added");
            setData({
                name: "",
                email: "",
                password: "",
                role: "ROLE_USER",
            })
        } catch (e) {
            console.error(e);
            toast.error("Error adding user");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-2 mt-2">
            <div className="form-container-modern">
                <div className="form-header-modern">
                    <h3><i className="bi bi-person-plus"></i> Add New User</h3>
                    <p>Register a new user to your system</p>
                </div>
                
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group-modern">
                        <label htmlFor="name" className="form-label-modern">
                            <i className="bi bi-person"></i>
                            Full Name
                            <span className="required">*</span>
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            className="form-input-modern"
                            placeholder="John Doe"
                            onChange={onChangeHandler}
                            value={data.name}
                            required
                        />
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="email" className="form-label-modern">
                            <i className="bi bi-envelope"></i>
                            Email Address
                            <span className="required">*</span>
                        </label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            className="form-input-modern"
                            placeholder="user@example.com"
                            onChange={onChangeHandler}
                            value={data.email}
                            required
                        />
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="password" className="form-label-modern">
                            <i className="bi bi-lock"></i>
                            Password
                            <span className="required">*</span>
                        </label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            className="form-input-modern"
                            placeholder="Enter a secure password"
                            onChange={onChangeHandler}
                            value={data.password}
                            minLength="6"
                            required
                        />
                        <div className="form-help-text">
                            <i className="bi bi-info-circle"></i>
                            Minimum 6 characters
                        </div>
                    </div>

                    <div className="form-group-modern">
                        <label htmlFor="role" className="form-label-modern">
                            <i className="bi bi-shield"></i>
                            User Role
                        </label>
                        <select 
                            name="role" 
                            id="role" 
                            className="form-select-modern"
                            onChange={onChangeHandler}
                            value={data.role}
                        >
                            <option value="ROLE_USER">User</option>
                            <option value="ROLE_ADMIN">Admin</option>
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        className="btn-modern btn-primary-modern btn-block-modern btn-lg-modern" 
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-modern"></span>
                                Creating User...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check-circle"></i>
                                Create User
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserForm;