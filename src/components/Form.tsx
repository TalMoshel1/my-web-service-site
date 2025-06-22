// 'use client';

// import React, { useState } from 'react';



// const Form: React.FC = () => {
//     const [formData, setFormData] = useState({
//         phoneNumber: '',
//         names: '',
//     });



//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
      
//         const res = await fetch('/api/send-message', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         });
      
//         if (res.ok) {
//           alert('Message sent!');
//         } else {
//             console.log('res: ',res)
//           alert('Failed to send message');
//         }
//       };

//     return (
//         <form onSubmit={handleSubmit} style={{border:'1px solid green', backgroundColor:'white', width: '100%', zIndex:'6'}}>
//             <div>
//                 <label htmlFor="phoneNumber">מספר טלפון</label>
//                 <input
//                     type="text"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="names">שמות</label>
//                 <input
//                     type="text"
//                     id="names"
//                     name="names"
//                     value={formData.names}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">שלח</button>
//         </form>
//     );
// };

// export default Form;

'use client';

import React, { useState } from 'react';

import { Varela_Round } from 'next/font/google'; // Example import for varela font
import AnimatedOnScrollButNotOnLoad from './AnimatedOnScrollButNotOnLoad'


const varela = Varela_Round({ subsets: ['latin'], weight: '400' });

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`נשלח: ${formData.name}, ${formData.phone}`);
  };

  return (
    <AnimatedOnScrollButNotOnLoad threshold={0.1}>

<form 
      onSubmit={handleSubmit}
      style={{
        width: '20rem',
        // maxWidth: '500px',
        margin: '40px auto',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        // borderRadius: '16px',
        // backgroundColor: '#fff',
        direction: 'rtl',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '0',
        left: '100%',
        transform: 'translateX(-50%)',
        zIndex:4
      }}
      data-aos="fade-up"


      className={`${varela.className} `}

    >
      <label 
        htmlFor="name"
        style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white'
        }}
        className={`${varela.className}`}

      >
        שם מלא
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
        required
      />

      <label 
        htmlFor="phone"
        style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white'
        }}
        className={`${varela.className}`}

      >
        מספר טלפון
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '30px',
          border: '1px solid #ccc',
        //   borderRadius: '8px',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
        required
      />

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#FFFF00',
          border: 'none',
        //   borderRadius: '10px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          color:'black'
        }}
        className={`${varela.className}`}

        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#FFDD00')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#FFFF00')}
      >
        שליחה
      </button>
    </form>
    </AnimatedOnScrollButNotOnLoad>

  );
};

export default Form;
