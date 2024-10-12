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
import {useActivateUserVerifyOtpMutation} from "@/redux/slices/activateUserVerifyOtpSlice.ts";
import {DeviceInfo} from "@/types.ts";
import {useAuth} from "@/AuthProvider.tsx";
import {data} from "autoprefixer";
import {useResendOtpMutation} from "@/redux/slices/resendOtpSlice.ts";

const FormSchema = z.object({
    pin: z.string().min(4, {message: "OTP şifrə 4 rəqəmli olmalıdır"}),
});

export function OTPVerification() {
    const [activateUserVerifyOtp] = useActivateUserVerifyOtpMutation();
    const [resendOtp] = useResendOtpMutation();
    const [otpValues, setOtpValues] = useState<string>("");
    const [activityId, setActivityId] = useState<string>("");
    const {login} = useAuth();



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {pin: ""},
    });

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const registerResult = location.state?.registerResult || {};  // Data passed from RegisterV2
    const registerResult = JSON.parse(localStorage.getItem("registerResult" ) );  // Data passed from RegisterV2
    const initialPhoneNumber = registerResult.phoneNumber;  // Save the initial phone number

    useEffect(() => {
        if (!location.state?.fromRegister) {
            // Redirect back to the register page if the user didn't come from there
            navigate('/');
        }

        console.log('qwe: ', registerResult)

        setActivityId(registerResult?.activityId);

        toast({
            title: 'OTP',
            description: registerResult?.data?.otp,
            variant: 'default',
            duration: 3000
        });


    }, [location.state, navigate]);

    // Select Redux state for OTP
    const {countdown, resendAttempts, phoneNumber, timerRunning} = useSelector((state: RootState) => state.otp);


    // State to track OTP input values

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

    const handleResendOTP = async () => {
        if (resendAttempts < 3) {
            toast({
                title: 'OTP göndərildi',
                description: 'Yeni OTP göndərildi.',
                variant: 'default',
            });

            try {

                const data = {
                    phoneNumber: registerResult?.data?.phoneNumber,
                }

                const result = await resendOtp({data}).unwrap();
                console.log("result", result);
                toast({
                    title: 'OTP',
                    description: result.data?.otp,
                    variant: 'default',
                });

                setActivityId(result.activityId)

            } catch (error) {
                console.error('Error resend OTP:', error);
            }

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
        navigate('/register', {state: {formData: registerResult}});
    };

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const otp = otpValues;
        // const requestBody = {
        //     ...registerResult,
        //     otp,
        // };

        console.log('formData otp: ', registerResult);

        const otpData = {
            otp: otp,
            phoneNumber: registerResult?.data?.phoneNumber,
            deviceInfo: {
                deviceId: "e1986237-1a60-4b2d-a836-50176d2d1947",
                clientType: 1,
                operatingSystem: "ios",
                osVersion: "14",
                appVersion: "12",
                brand: "iphone",
                model: "se2",
            },
        };

        setActivityId(registerResult?.activityId)

        try {
            // Pass both otpData and activityId as separate parameters
            const result = await activateUserVerifyOtp({otpData, activityId}).unwrap();
            console.log('Result:', result);
            login(result.data.accessToken)
            navigate('/', {replace: true});
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    // Check if all OTP inputs are filled
    const isOtpFilled = otpValues.length === 4;

    const formatCountdown = (seconds: number) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    };

    const handleOTPChange = (value: string) => {
        setOtpValues(value);
        form.setValue('pin', value);  // Synchronize with form's pin field
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
                                    ** {registerResult.phoneNumber ? registerResult.phoneNumber.toString().substring(7, 9) : ''} nömrəsinə
                                    göndərilən
                                    4 rəqəmli OTP şifrəni daxil et
                                </FormDescription>
                                <FormControl>
                                    <InputOTP maxLength={4} {...field} onChange={handleOTPChange}
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