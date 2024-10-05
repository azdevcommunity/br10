import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {toast} from "@/components/ui/use-toast.ts";
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/redux/store.ts";
import {decrementCountdown, incrementResendAttempts, startTimer} from "@/redux/slices/otpSlice.ts";
import {Toaster} from "@/components/ui/toaster.tsx";

const FormSchema = z.object({
    pin: z.string().min(4, {message: "OTP şifrə 4 rəqəmli olmalıdır"}),
});

export function OTPVerification() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {pin: ""},
    });

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Select Redux state for OTP
    const {countdown, resendAttempts, phoneNumber, timerRunning} = useSelector((state: RootState) => state.otp);

    const formData = location.state?.formData || {};  // Data passed from RegisterV2
    const initialPhoneNumber = formData.phoneNumber;  // Save the initial phone number

    // State to track OTP input values
    const [otpValues, setOtpValues] = useState<string>("");

    useEffect(() => {
        if (phoneNumber === initialPhoneNumber && timerRunning) {
            const interval = setInterval(() => {
                dispatch(decrementCountdown());
            }, 1000);

            return () => clearInterval(interval);
        } else {
            dispatch(startTimer(initialPhoneNumber));  // Start the timer only once
        }
    }, [initialPhoneNumber, dispatch, phoneNumber, timerRunning]);

    const handleResendOTP = () => {
        if (resendAttempts < 3) {
            toast({
                title: 'OTP göndərildi',
                description: 'Yeni OTP göndərildi.',
                variant: 'default',
            });

            dispatch(incrementResendAttempts());
        } else {
            toast({
                title: 'Xəta',
                description: 'Yenidən göndərmə üçün limitə çatdınız.',
                variant: 'destructive',
            });
        }
    };

    const handleChangeNumber = () => {
        // Navigate back to RegisterV2 with form data
        navigate('/register', {state: {formData}});
    };

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const otp = otpValues;
        const requestBody = {
            ...formData,
            otp,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_BR10_API_BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                toast({
                    title: 'Qeydiyyat uğurlu oldu',
                    description: 'Hesabınız uğurla yaradıldı!',
                    variant: 'default',
                });
                navigate('/login');
            } else {
                const errorData = await response.json();
                toast({
                    title: 'Xəta baş verdi',
                    description: errorData.message || 'Qeydiyyat zamanı xəta baş verdi',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Xəta baş verdi',
                description: 'Qeydiyyat zamanı xəta baş verdi',
                variant: 'destructive',
            });
        }
    };

    // Check if all OTP inputs are filled
    const isOtpFilled = otpValues.length === 4;

    const formatCountdown = (seconds: number) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    };

    return (
        <div className="bg-cal-primary flex min-h-screen w-full flex-col items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-56">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold">OTP Şifrə</FormLabel>
                                <FormDescription className="text-sm text-gray-500">
                                    +994 ***
                                    ** {formData.phoneNumber ? formData.phoneNumber.toString().substring(7, 9) : ''} nömrəsinə
                                    göndərilən
                                    4 rəqəmli OTP şifrəni daxil et
                                </FormDescription>
                                <FormControl>
                                    <InputOTP maxLength={4} {...field} onChange={(e) => setOtpValues(e)}
                                              value={otpValues}>
                                        <InputOTPGroup>
                                            {[...Array(4)].map((_, i) => (
                                                <InputOTPSlot
                                                    key={i}
                                                    className="h-14 w-14 text-3xl"
                                                    index={i}
                                                />
                                            ))}
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="w-full text-sm flex justify-between">
                        <span
                            className="hover:underline cursor-pointer"
                            onClick={handleChangeNumber}
                        >
                            Nömrəni dəyiş
                        </span>
                        {countdown > 0 ? (
                            <span className="cursor-default">{formatCountdown(countdown)}</span>
                        ) : (
                            <span
                                className={`cursor-pointer ${resendAttempts >= 3 ? 'text-gray-400 cursor-not-allowed' : 'hover:underline'}`}
                                onClick={handleResendOTP}
                            >
                                Yenidən göndər
                            </span>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={!isOtpFilled}>
                        Təsdiq et
                    </Button>
                </form>
            </Form>
            <Toaster/>
        </div>
    );
}