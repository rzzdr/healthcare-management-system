import React, {useEffect, useState} from "react";

const BASE_URL = "https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io";
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
        try {
            const idToken = await auth.currentUser?.getIdToken();
            const response = await fetch(BASE_URL + '/hospital/onboard-hospital/', { // Replace with your actual endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${idToken}`
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Success:', data);
            alert('Hospital onboarding successful!');

            // Reset form data after submission
            setFormData({
                name: "",
                address: "",
                phone: "",
                email: "",
                city: "",
                website: "",
                logo: "",
                description: "",
            });

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to onboard hospital. Please try again.');
        }
    };
    useEffect(() => {
        const fetchHospitalInfo = async () => {
            try {
                const idToken = await auth.currentUser?.getIdToken();
                const response = await fetch(`${BASE_URL}/hospital/get-hospital-info/`, { // Replace with your actual endpoint
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${idToken}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setHospitalInfo(data); // Store fetched data in state

            } catch (error) {
                console.error('Error fetching hospital info:', error);
                // Handle the error (e.g., display an error message)
            }
        };

        fetchHospitalInfo();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="h2">Hospital Onboarding</h2>
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
