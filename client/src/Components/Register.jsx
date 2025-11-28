import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Register() {
     const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        mobile: "",
        address: "",
        gender: ""
    })
    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        axios.post("http://localhost:2000/api/register", formData)
            .then((res) => {
                if(res.sttus===1)
                alert("Registered Successfully!");
                console.log(res.data);
                navigate("/login")
            })

            .catch((err) => {
                console.error(err);
                alert("Registration Failed!");
            });
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} /><br />

                <input type="text"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} /><br />

                <input type="text"
                    placeholder="enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} /><br />

                <input type="text"
                    placeholder="enter confirmpassword"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange} /><br />


                <input type="text"
                    placeholder="enter mobile"
                    name="mobile"
                    value={formData.mobilenumber}
                    onChange={handleChange} /><br />

                <input type="text"
                    placeholder="enter address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange} /><br />

                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        checked={formData.gender == "male"}
                    />Male
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={formData.gender == "female"}

                        onChange={handleChange}
                    />female

                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}