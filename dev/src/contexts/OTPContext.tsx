import React, { createContext, useContext, useState } from 'react';

const OTPContext = createContext(null);

export const OTPProvider = ({ children }) => {
    const [otp, setOtp] = useState(Array(6).fill(''));

    const updateOtp = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <OTPContext.Provider value={{ otp, updateOtp }}>
            {children}
        </OTPContext.Provider>
    );
};

export const useOTP = () => useContext(OTPContext);