import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
       setUser ({...user,[e.target.name]:e.target.value})
    };

    const onSubmit =async e =>{
        e.preventDefault();
        await Axios.post('http://localhost:3003/users',user);
        history.push('/');
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={e=> onSubmit(e)}>
                    <div class="form-group">
                        <input type="text"
                            className="form-control"
                            id="name" name="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="form-group">
                        <input type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="form-group">
                        <input type="email"
                            className="form-control"
                            id="emal"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="form-group">
                        <input type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="form-group">
                        <input type="text"
                            className="form-control"
                            id="website"
                            name="website"
                            placeholder="Enter Website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;