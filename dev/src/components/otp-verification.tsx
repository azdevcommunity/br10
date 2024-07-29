import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp.tsx";
import React, {useEffect, useState} from "react";
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
}

export const OtpVerification: React.FC<OtpVerificationProps> = ({ phoneNumber, onChangePhoneNumber }) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<OtpFormValues>({
        resolver: zodResolver(otpSchema),
        mode: "onChange"
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const[otp, setOtp] = useState<string>("");


    const onSubmit: SubmitHandler<OtpFormValues> = (data) => {
        console.log("OTP Submitted: ", data.otp);
        // Handle OTP verification logic here
    };

    useEffect(() => {
        if(otp.length === 6) {
            setIsButtonDisabled(false);
        }else{
            setIsButtonDisabled(true);
        }
    }, [otp]);

    return (
        <div className="flex min-h-[100vh] flex-col items-center justify-center bg-background px-4 py-12 max-sm:py-0 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-6 text-center">
                <div className="space-y-2 text-left">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Telefon nömrəni təsdiq et</h1>
                    <p className="text-muted-foreground">Sonu {phoneNumber.slice(-4)} olan nömrənə 6 rəqəmli təsdiq kodu göndərildi.</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <InputOTP maxLength={6}
                              value={otp}
                              onChange={(value) => setOtp(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} {...register("otp")} />
                            <InputOTPSlot index={1} {...register("otp")} />
                            <InputOTPSlot index={2} {...register("otp")} />
                            <InputOTPSlot index={3} {...register("otp")} />
                            <InputOTPSlot index={4} {...register("otp")} />
                            <InputOTPSlot index={5} {...register("otp")} />
                        </InputOTPGroup>
                    </InputOTP>
                    {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>Yenidən göndər:</span>
                            <span className="font-medium">00:30</span>
                        </div>
                        <span className="cursor-pointer text-sm font-medium text-primary hover:underline" onClick={onChangePhoneNumber}>
              Telefon nömrəni dəyiş
            </span>
                    </div>
                    <Button type="submit" className="w-full" disabled={isButtonDisabled}>
                        Təsdiq et
                    </Button>
                </form>
            </div>
        </div>
    );
};