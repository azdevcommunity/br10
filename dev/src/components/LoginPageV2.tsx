import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp.tsx";

const REGEXP_ONLY_DIGITS_AND_CHARS = /^[0-9a-zA-Z]+$/; // Modify as needed

const LoginPageV2: React.FC = () => {
    const [stage, setStage] = useState(1);
    const [mobileNumber, setMobileNumber] = useState('');
    const [originalNumber, setOriginalNumber] = useState(''); // To track original mobile number
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [timer, setTimer] = useState(30);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    const timerRef = useRef<number | null>(null);

    // Validate if mobile number has exactly 9 digits
    const isMobileValid = mobileNumber.length === 9;

    // Handle timer countdown
    useEffect(() => {
        if (isOtpSent && timer > 0 && !timerRef.current) {
            timerRef.current = window.setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsResendDisabled(false);
            clearInterval(timerRef.current!);
            timerRef.current = null;
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isOtpSent, timer]);

    const handleSendOtp = () => {
        if (isMobileValid) {
            if (mobileNumber === originalNumber && isOtpSent) {
                // If number is the same and OTP was already sent, continue countdown
                setStage(2);
            } else {
                // If number is changed or first OTP, reset countdown
                setOriginalNumber(mobileNumber);
                setIsOtpSent(true);
                setStage(2);
                setIsResendDisabled(true);
                setTimer(30); // Reset timer to 30 seconds for new OTP
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                }
                timerRef.current = window.setInterval(() => {
                    setTimer((prev) => prev - 1);
                }, 1000);
            }
        }
    };

    const handleResendOtp = () => {
        if (!isResendDisabled) {
            // Trigger OTP resend API here
            setIsResendDisabled(true);
            setTimer(30);
            if (!timerRef.current) {
                timerRef.current = window.setInterval(() => {
                    setTimer((prev) => prev - 1);
                }, 1000);
            }
        }
    };

    const handleBack = () => {
        setStage(1);
    };

    const handleOtpChange = (otpValue: string) => {
        setOtp(otpValue); // Handle OTP input
    };

    // Mask phone number except last 2 digits
    const maskedPhoneNumber = `+994 *** *** *${mobileNumber.slice(7)}`;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                {stage === 1 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                        <div className="flex items-center">
                            <span className="border border-r-0 rounded-l-md px-3 py-2 bg-gray-100 text-gray-500">+994</span>
                            <Input
                                type="tel"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value.slice(0, 9))}
                                placeholder="Enter your mobile number"
                                className="rounded-r-md border-gray-300 w-full rounded-l-none"
                            />
                        </div>
                        <Button
                            onClick={handleSendOtp}
                            disabled={!isMobileValid}
                            className={cn('mt-4 w-full', {
                                'opacity-50 cursor-not-allowed': !isMobileValid,
                            })}
                        >
                            Send OTP
                        </Button>
                    </div>
                )}
                {stage === 2 && (
                    <div>
                        <div className="flex items-center mb-4">
                            <ArrowLeft className="cursor-pointer" onClick={handleBack} />
                            <span className="ml-4 text-lg font-semibold">OTP Verification</span>
                        </div>

                        <p className="text-center text-gray-500 mb-4">We sent an OTP to {maskedPhoneNumber}</p>

                        {/* InputOTP component usage */}
                        <InputOTP maxLength={4} onChange={handleOtpChange}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>

                        <Button className="w-full mt-4">Submit</Button>
                        <div className="mt-4 flex justify-between items-center">
              <span
                  className={cn('text-sm cursor-pointer', {
                      'text-gray-500 cursor-not-allowed': isResendDisabled,
                      'text-blue-500': !isResendDisabled,
                  })}
                  onClick={handleResendOtp}
              >
                Resend OTP
              </span>
                            <span className="text-sm text-gray-500">{timer > 0 ? `Resend in ${timer}s` : 'You can resend OTP'}</span>
                        </div>
                        <div
                            className="mt-4 text-sm text-blue-500 cursor-pointer"
                            onClick={handleBack}
                        >
                            Phone number change
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPageV2;