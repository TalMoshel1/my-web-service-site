'use client';

import React, { useState } from 'react';



const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        names: '',
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      
        const res = await fetch('/api/send-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      
        if (res.ok) {
          alert('Message sent!');
        } else {
            console.log('res: ',res)
          alert('Failed to send message');
        }
      };

    return (
        <form onSubmit={handleSubmit} style={{width: '100%', height: 'fit-content'}}>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="names">Names:</label>
                <input
                    type="text"
                    id="names"
                    name="names"
                    value={formData.names}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;