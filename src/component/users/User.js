import Axios from "axios";
import React, { useState ,useEffect} from "react";
import { Link, useHistory , useParams} from "react-router-dom";

const User = ()=>{
    let history = useHistory();
    const {id} =useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    useEffect (()=>{
        loadUser();
    },[]);

    const loadUser = async ()=>{
        const result = await Axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };


    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
    <h1 className="display-4">User id : {id}</h1>
    <hr/>
    <ul className="list-group w-50">
        <li className="list-group-item">Name : {user.name}</li>
        <li className="list-group-item">User Name : {user.username}</li>
        <li className="list-group-item">Email : {user.email}</li>
        <li className="list-group-item">Phone : {user.phone}</li>
        <li className="list-group-item">Website : {user.website}</li>
    </ul>
        </div>
    );
}

export default User;