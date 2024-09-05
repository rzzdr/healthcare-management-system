import axios from "axios";
import React, { useState, useEffect } from "react";

import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import api from "../../utils/api";
import "./AutoCompeteId.css";

const AutoCompeteId = ({ setSelectedId , label, placeholder }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/customers/get-customers/');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }
        , []);

    return (

            <DatalistInput
                label= {label}
                placeholder={placeholder}
                className="auto-compete-group"
                items={
                    data.map((item) => ({
                        id: item.customer_mapping_id,
                        value: item.customer_mapping_id,
                        description: item.name
                    }))
                }
                onSelect={(selectedItem) => {
                    setSelectedId(selectedItem.id);
                }
                }
            />
    );
}

export default AutoCompeteId;
