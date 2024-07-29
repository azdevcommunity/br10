import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp.tsx";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const otpSchema = z.object({
    otp: z.string().length(6, "OTP must be exactly 6 digits")
});

interface OtpFormValues {
    otp: string;
}

interface OtpVerificationProps {
    phoneNumber: string;
    onChangePhoneNumber: () => void;
    onResendOtp: () => void; // Function to handle OTP resend
}

export const OtpVerification: React.FC<OtpVerificationProps> = ({ phoneNumber, onChangePhoneNumber, onResendOtp }) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<OtpFormValues>({
        resolver: zodResolver(otpSchema),
        mode: "onChange"
    });

    const [otp, setOtp] = useState<string>("");
    const [timeLeft, setTimeLeft] = useState<number>(30); // Countdown timer in seconds
    const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setIsResendDisabled(false); // Enable resend button
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        // Cleanup timer on component unmount
        return () => clearInterval(timer);
    }, []);

    const handleResendOtp = () => {
        setIsResendDisabled(true);
        setTimeLeft(30); // Reset timer
        onResendOtp(); // Call resend OTP function
    };

    const onSubmit: SubmitHandler<OtpFormValues> = (data) => {
        console.log("OTP Submitted: ", data.otp);
        // Handle OTP verification logic here
    };

    return (
        <div className="flex min-h-[100vh] flex-col items-center justify-center bg-background px-4 py-12 max-sm:py-0 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-6 text-center">
                <div className="space-y-2 text-left">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Telefon nömrəni təsdiq et</h1>
                    <div className="text-muted-foreground">Sonu <span className={"font-bold text-sm"}>{phoneNumber.slice(-4)}</span> olan nömrənə 6 rəqəmli təsdiq kodu göndərildi.</div>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className={"flex justify-center items-center"}>
                        <InputOTP maxLength={6}
                                  value={otp}
                                  onChange={(value) => setOtp(value)}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} {...register("otp")} className={"h-14 w-14 text-2xl"}/>
                                <InputOTPSlot index={1} {...register("otp")} className={"h-14 w-14 text-2xl"} />
                                <InputOTPSlot index={2} {...register("otp")} className={"h-14 w-14 text-2xl"} />
                                <InputOTPSlot index={3} {...register("otp")} className={"h-14 w-14 text-2xl"} />
                                <InputOTPSlot index={4} {...register("otp")} className={"h-14 w-14 text-2xl"} />
                                <InputOTPSlot index={5} {...register("otp")} className={"h-14 w-14 text-2xl"} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>Yenidən göndər:</span>
                            <span className="font-medium">{`00:${timeLeft.toString().padStart(2, '0')}`}</span>
                        </div>
                        <span className="cursor-pointer text-sm font-medium text-primary hover:underline" onClick={onChangePhoneNumber}>
              Telefon nömrəni dəyiş
            </span>
                    </div>
                    <Button type="submit" className="w-full" disabled={!isValid}>
                        Təsdiq et
                    </Button>
                </form>
            </div>
        </div>
    );
};