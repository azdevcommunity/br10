import React, { useState } from "react";
import {PhoneNumberStep} from "@/components/phone-number-step.tsx";
import {OtpVerification} from "@/components/otp-verification.tsx";

const StepManager = () => {
    const [step, setStep] = useState<number>(1);
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handlePhoneNumberSubmit = (phone: string) => {
        setPhoneNumber(phone);
    };

    const handleEditPhoneNumber = () => {
        setStep(1);
    };

    return (
        <div>
            {step === 1 ? (
                <PhoneNumberStep onSubmitPhoneNumber={handlePhoneNumberSubmit} changeStep={setStep} phoneNumber={phoneNumber} />
            ) : (
                <OtpVerification phoneNumber={phoneNumber} onChangePhoneNumber={handleEditPhoneNumber}
                                 onResendOtp={function (): void {
                                     throw new Error("Function not implemented.");
                                 }} otpSent={false} />
            )}
        </div>
    );
};

export default StepManager;