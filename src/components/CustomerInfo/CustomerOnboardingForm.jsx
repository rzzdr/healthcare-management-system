import React, {useEffect, useState} from "react";

const BASE_URL = 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io';
const CustomerOnboardingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        city: "",
        past_medical_history: "",
        date_of_birth: "",
        blood_group: "",
        gender: "",
        old_diseases: "",
        whatsapp_number: "",
        weight: "",
        height: "",
        allergies: "",
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

        try {
            const response = await fetch(BASE_URL + "/customers/create-customer/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Failed to create customer");
            }

            const result = await response.json();
            console.log("Customer created successfully:", result);
            // You can also handle the result (e.g., display a success message or navigate)
        } catch (error) {
            console.error("Error creating customer:", error);
            // Handle the error (e.g., display an error message)
        }
    };
    useEffect(() => {
        const fetchCustomerInfo = async () => {
            try {
                const response = await fetch(`${BASE_URL}/customers/{customer_id}/get-customer/`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch customer info");
                }

                const data = await response.json();
                setCustomerInfo(data); // Store fetched data in state
            } catch (error) {
                console.error("Error fetching customer info:", error);
                // Handle the error (e.g., display an error message)
            }
        };

        fetchCustomerInfo();
    }, []);


    return (
        <form onSubmit={handleSubmit}>
            <h2>Customer Onboarding</h2>
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
                name="past_medical_history"
                placeholder="Past Medical History"
                onChange={handleChange}
            />
            <input type="date" name="date_of_birth" onChange={handleChange}/>
            <input
                type="text"
                name="blood_group"
                placeholder="Blood Group"
                onChange={handleChange}
            />
            <input
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
            />
            <input
                type="text"

                name="old_diseases"
                placeholder="Old Diseases"
                onChange={handleChange}
            />
            <input
                type="text"
                name="whatsapp_number"
                placeholder="WhatsApp Number"
                onChange={handleChange}
            />
            <input
                type="text"
                name="weight"
                placeholder="Weight"
                onChange={handleChange}
            />
            <input
                type="text"
                name="height"
                placeholder="Height"
                onChange={handleChange}
            />
            <input
                type="text"
                name="allergies"
                placeholder="Allergies"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerOnboardingForm;

