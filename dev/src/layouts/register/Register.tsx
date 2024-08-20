import React, { useState} from "react";
import {OtpVerification} from "@/components/otp-verification.tsx";
import {PhoneNumberStep} from "@/components/phone-number-step.tsx";

export const Register: React.FC = () => {

    const [step, setStep] = useState<number>(1);
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handlePhoneNumberSubmit = (phone: string) => {
        setPhoneNumber(phone);
        setStep(2);
    };

    const handleEditPhoneNumber = () => {
        setStep(1);
    };

    return (
        <>
            {/*<Navbar/>*/}
            <div className="h-screen flex lg:flex-row flex-col justify-end  text-md">
                {/*left side image*/}
                <div className="lg:flex flex-1 h-full w-full">
                    <img src="/assets/abs_bg.png" alt="login-image" className={`object-cover object-center h-[25rem]
                    max-[320px]:h-[18rem] lg:h-auto`}/>
                </div>
                <div
                    className="space-y-3 lg:w-1/2 w-full px-7  max-sm:px-0 max-sm:mb-16 max-[320px]:mt-10 lg:mt-0 lg:mb-0 h-full
                           rounded-3xl  flex flex-col justify-center ">
                    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                        {step === 1 ? (
                            <PhoneNumberStep onSubmitPhoneNumber={handlePhoneNumberSubmit} changeStep={setStep} phoneNumber={phoneNumber} />
                        ) : (
                            <OtpVerification phoneNumber={phoneNumber} onChangePhoneNumber={handleEditPhoneNumber}
                                             onResendOtp={function (): void {
                                                 throw new Error("Function not implemented.");
                                             }} otpSent={false} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};