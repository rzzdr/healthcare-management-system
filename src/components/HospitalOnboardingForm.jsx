import React, {useState} from "react";

const HospitalOnboardingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        city: "",
        website: "",
        logo: "",
        description: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send a POST request to API
        console.log("Hospital Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Hospital Onboarding</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="website"
                placeholder="Website"
                onChange={handleChange}
            />
            <input
                type="text"
                name="logo"
                placeholder="Logo URL"
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default HospitalOnboardingForm;
