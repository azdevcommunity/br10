import React, {useEffect, useState} from "react";
import {z} from "zod";
import {useToast} from "@/components/ui/use-toast.ts";
import {useLocation, useNavigate} from "react-router-dom";

const registerSchema = z.object({
    phoneNumber: z
        .string()
        .length(9, {message: "Telefon nömrəsi 9 rəqəmli olmalıdır"})
        .regex(/^\d+$/, "Yalnız rəqəmlər qəbul edilir"),
    password: z
        .string()
        .min(7, {message: "Şifrə ən azı 7 simvol olmalıdır"})
        .regex(/[A-Z]/, "Şifrə ən azı bir böyük hərf içerməlidir")
        .regex(/[a-z]/, "Şifrə ən azı bir kiçik hərf içerməlidir")
        .regex(/\d/, "Şifrə ən azı bir rəqəm içerməlidir"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Şifrələr eyni olmalıdır",
    path: ['confirmPassword'], // Hangi alanın hatalı olduğunu belirtir
});


export const RegisterV2 = () => {

    const {toast} = useToast();
    const navigate = useNavigate();
    const location = useLocation();  // To receive any potential data from OTPVerification

    // Initialize form data, taking into account potential data from OTPVerification
    const initialState = location.state?.formData || {
        username: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    };

    const [formData, setFormData] = useState(initialState);  // Preload from potential state
    const [errors, setErrors] = useState<any>({});

    // Reset resend attempts when phone number changes in OTPVerification and user comes back
    const [resendAttempts, setResendAttempts] = useState(0);  // Track resend attempts

    useEffect(() => {
        if (location.state?.resetAttempts) {
            setResendAttempts(0);  // Reset resend attempts if the user changed their phone number
        }
    }, [location.state]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === 'phoneNumber' && value.length > 9) return;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Form validation
        const validation = registerSchema.safeParse(formData);
        if (!validation.success) {
            const formattedErrors: any = {};
            validation.error.errors.forEach((err) => {
                formattedErrors[err.path[0]] = err.message;
            });
            setErrors(formattedErrors);
            return;
        }

        setErrors({});  // Clear errors if form is valid

        // Redirect to OTPVerification page with form data
        navigate('/otp-verification', {state: {formData, resetAttempts: true}});
    };

    return (
        <div
            className=" bg-cal-primary 2xl:bg-cal-primary flex min-h-screen w-full flex-col items-center justify-center"
        >
            <div
                className="bg-cal-primary 2xl:bg-cal-primary grid w-full max-w-[1440px] grid-cols-1 grid-rows-1 overflow-hidden
                lg:grid-cols-2 2xl:rounded-[20px] 2xl:border 2xl:py-6"
            >
                <div
                    className="ml-auto mr-auto mt-0 flex w-full max-w-xl flex-col px-4 pt-6 sm:px-16 md:px-20 lg:mt-12 2xl:px-28"
                >
                    <div className="flex flex-col gap-2"><h1
                        className="font-bold text-[28px] leading-none">br10 hesabını yarat</h1><p
                        className="text-subtle text-base font-medium leading-5">Zamanını idarə etməyin ən rahat
                        yolu</p></div>
                    <div className="mt-12">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div>
                                <div className=""><label
                                    className="text-emphasis mb-2 block text-sm font-medium leading-none"
                                    htmlFor=":r0:">İstifadəçi adı</label>
                                    <div dir="ltr"
                                         className="focus-within:ring-cal-button-hover group relative mb-1 flex
                                         items-center rounded-md transition focus-within:outline-none focus-within:ring-2"
                                    >
                                        <input data-testid="signup-usernamefield" id=":r0:"
                                               className={`hover:border-emphasis border-default  placeholder:text-muted
                                               text-gray-700 placeholder:text-gray-400 focus:ring-brand-default
                                               focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm
                                               leading-4 transition focus:outline-none focus:ring-2 w-full
                                               disabled:bg-subtle disabled:hover:border-subtle
                                               disabled:cursor-not-allowed border-l-0 !my-0 !ring-0 
                                               ${errors.username ? 'border-red-500' : ''}`}
                                               name="username" type={"text"} onChange={handleChange}
                                               value={formData.username}/>

                                    </div>
                                </div>
                                <div className="text-gray text-default flex items-center text-sm">
                                    <div className="text-sm "></div>
                                </div>
                            </div>
                            <div>
                                <div className=""><label
                                    className="text-emphasis mb-2 block text-sm font-medium leading-none"
                                    htmlFor=":r0:">Telefon nömrən</label>
                                    <div dir="ltr"
                                         className="focus-within:ring-cal-button-hover group relative mb-1 flex
                                         items-center rounded-md transition focus-within:outline-none focus-within:ring-2"
                                    >
                                        <div
                                            className="addon-wrapper border-default [input:hover_+_&amp;]:border-emphasis
                                            [input:hover_+_&amp;]:border-l-default [&amp;:has(+_input:hover)]:border-emphasis
                                            [&amp;:has(+_input:hover)]:border-r-default h-9 border px-3 transition
                                            ltr:rounded-l-md rtl:rounded-r-md"
                                        >
                                            <div
                                                className="min-h-9 flex flex-col justify-center text-sm leading-7 text-default"
                                            ><span
                                                className="flex max-w-2xl overflow-y-auto whitespace-nowrap"
                                                style={{scrollbarWidth: "none"}}>+994</span></div>
                                        </div>
                                        <input data-testid="signup-usernamefield" id=":r0:"
                                               placeholder="Telefon nömrəsi"
                                               className={`hover:border-emphasis border-default  placeholder:text-muted
                                               text-gray-700 placeholder:text-gray-400 focus:ring-brand-default
                                               focus:border-subtle mb-2 block h-9 rounded-md border px-3 py-2 text-sm
                                               leading-4 transition focus:outline-none focus:ring-2 w-full
                                               disabled:bg-subtle disabled:hover:border-subtle
                                               disabled:cursor-not-allowed rounded-l-none border-l-0 !my-0 !ring-0 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                               name="phoneNumber" type={"number"} onChange={handleChange}
                                               value={formData.phoneNumber}/>

                                    </div>
                                </div>
                                <div className="text-gray text-default flex items-center text-sm">
                                    <div className="text-sm "></div>
                                </div>
                            </div>
                            <div className="">
                                <label
                                    className="text-emphasis mb-2 block text-sm font-medium leading-none"
                                    htmlFor=":r2:">Şifrə
                                </label>
                                <div dir="ltr"
                                     className="focus-within:ring-cal-button-hover group relative mb-1 flex items-center
                                     rounded-md transition focus-within:outline-none focus-within:ring-2">
                                    <input data-testid="signup-passwordfield" id=":r2:"
                                           type="password" placeholder="•••••••••••••"
                                           className={`placeholder:text-gray-300 hover:border-emphasis 
                                            border-default bg-default placeholder:text-muted text-emphasis 
                                            focus:ring-brand-default focus:border-subtle block h-9 rounded-md border 
                                            px-3 py-2 text-sm leading-4 transition focus:outline-none focus:ring-2 
                                            w-full addon-wrapper mb-0 ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10 
                                            disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed 
                                            ${errors.password ? 'border-red-500' : ''}
                                            rounded-r-none border-r-0 !my-0 !ring-0`}
                                           name="password" onChange={handleChange}
                                           value={formData.password}/>
                                    <div
                                        className="addon-wrapper border-default [input:hover_+_&amp;]:border-emphasis
                                        [input:hover_+_&amp;]:border-l-default [&amp;:has(+_input:hover)]:border-emphasis
                                        [&amp;:has(+_input:hover)]:border-r-default h-9 border px-3 transition
                                        ltr:rounded-r-md rtl:rounded-l-md">
                                        <div
                                            className="min-h-9 flex flex-col justify-center text-sm leading-7 text-default"
                                        ><span
                                            className="flex max-w-2xl overflow-y-auto whitespace-nowrap"
                                            style={{scrollbarWidth: "none"}}><button className="text-black h-9"
                                                                                     tabIndex={-1} type="button"
                                                                                     data-state="closed">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    <span
                        className="sr-only">Show password</span></button></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-gray text-default mt-2 flex items-center text-sm mb-5"
                                >
                                    <ul className="ml-2">
                                        <li className="">
                                            <svg height="5" width="5"
                                                 className="fill-transparent inline-block ltr:mr-2 rtl:ml-2"
                                                 fill="currentColor" aria-hidden="true">
                                                <use href="#circle"></use>
                                            </svg>
                                            Böyük və kiçik hərflərin qarışığı
                                        </li>
                                        <li className="">
                                            <svg height="5" width="5"
                                                 className="fill-transparent inline-block ltr:mr-2 rtl:ml-2"
                                                 fill="currentColor" aria-hidden="true">
                                                <use href="#circle"></use>
                                            </svg>
                                            Minimum 7 simvol uzunluğunda
                                        </li>
                                        <li className="">
                                            <svg height="5" width="5"
                                                 className="fill-amber-300 inline-block ltr:mr-2 rtl:ml-2"
                                                 fill="none" aria-hidden="true">
                                                <use href="#circle"></use>
                                            </svg>
                                            Ən azı 1 ədəd istifadəsi
                                        </li>
                                    </ul>
                                </div>
                                <label
                                    className="text-emphasis mb-2 block text-sm font-medium leading-none"
                                    htmlFor=":r2:">Təkrar Şifrə
                                </label>
                                <div dir="ltr"
                                     className="focus-within:ring-cal-button-hover group relative mb-1 flex items-center
                                     rounded-md transition focus-within:outline-none focus-within:ring-2">
                                    <input data-testid="signup-passwordfield" id=":r2:"
                                           type="password" placeholder="•••••••••••••"
                                           className={`placeholder:text-gray-300 hover:border-emphasis 
                                           border-default bg-default placeholder:text-muted text-emphasis 
                                           focus:ring-brand-default focus:border-subtle block h-9 rounded-md 
                                           border px-3 py-2 text-sm leading-4 transition focus:outline-none 
                                           focus:ring-2 w-full addon-wrapper mb-0 ltr:border-r-0 ltr:pr-10 
                                           rtl:border-l-0 rtl:pl-10 disabled:bg-subtle disabled:hover:border-subtle 
                                           disabled:cursor-not-allowed rounded-r-none border-r-0 !my-0 !ring-0 
                                           ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                           name="confirmPassword" onChange={handleChange}
                                           value={formData.confirmPassword}/>
                                    <div
                                        className="addon-wrapper border-default [input:hover_+_&amp;]:border-emphasis
                                        [input:hover_+_&amp;]:border-l-default [&amp;:has(+_input:hover)]:border-emphasis
                                        [&amp;:has(+_input:hover)]:border-r-default h-9 border px-3 transition
                                        ltr:rounded-r-md rtl:rounded-l-md">
                                        <div
                                            className="min-h-9 flex flex-col justify-center text-sm leading-7 text-default"
                                        ><span
                                            className="flex max-w-2xl overflow-y-auto whitespace-nowrap"
                                            style={{scrollbarWidth: "none"}}><button className="text-black h-9"
                                                                                     tabIndex={-1} type="button"
                                                                                     data-state="closed">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    <span
                        className="sr-only">Show password</span></button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed hover:bg-cal-button-hover
                                focus-visible:ring-cal-button-hover bg-cal-button text-white disabled:hover:text-brand-default disabled:hover:opacity-40 h-9 px-4 py-2.5 my-2 w-full justify-center"
                                type="submit">Hesab yarat
                            </button>
                        </form>
                    </div>
                    <div className="mt-10 flex h-full flex-col justify-start pb-6 text-xs">
                        <div className="flex flex-col text-sm">
                            <div className="flex gap-1"><p className="text-subtle">Hesabın var?</p><a
                                className="text-emphasis hover:underline" href="/auth/login">Daxil ol</a>
                            </div>
                            <div className="text-subtle ">Qeydiyyatdan keçməklə bizim <a
                                className="text-emphasis hover:underline" target="_blank"
                                href="https://cal.com/terms">Terms</a> və <a className="text-emphasis hover:underline"
                                                                             target="_blank"
                                                                             href="https://cal.com/privacy">Privacy
                                Policy</a> ilə razı olmuş olursan.
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="border-subtle lg:bg-subtle mx-auto mt-24 w-full max-w-2xl flex-col justify-between rounded-l-2xl pl-4 dark:bg-none lg:mt-0 lg:flex lg:max-w-full lg:border lg:py-12 lg:pl-12"
                >
                    <div className="-mt-4 mb-6 mr-12 grid w-full grid-cols-3 gap-5 pr-4 sm:gap-3 lg:grid-cols-4"
                    >
                        <div><img src="https://cal.com/product-cards/product-of-the-day.svg"
                                  className="h-[34px] w-full dark:invert"
                                  alt="Cal.com was Product of the Day at ProductHunt"/></div>
                        <div><img src="https://cal.com/product-cards/product-of-the-week.svg"
                                  className="h-[34px] w-full dark:invert"
                                  alt="Cal.com was Product of the Week at ProductHunt"/></div>
                        <div><img src="https://cal.com/product-cards/product-of-the-month.svg"
                                  className="h-[34px] w-full dark:invert"
                                  alt="Cal.com was Product of the Month at ProductHunt"/></div>
                    </div>
                    <div className="mb-6 mr-12 grid w-full grid-cols-3 gap-5 pr-4 sm:gap-3 lg:grid-cols-4"
                    >
                        <div><img src="https://cal.com/product-cards/producthunt.svg" className="h-[54px] w-full"
                                  alt="ProductHunt Rating of 5 Stars"/></div>
                        <div><img src="https://cal.com/product-cards/google-reviews.svg"
                                  className="h-[54px] w-full"
                                  alt="Google Reviews Rating of 4.7 Stars"/></div>
                        <div><img src="https://cal.com/product-cards/g2.svg" className="h-[54px] w-full"
                                  alt="G2 Rating of 4.7 Stars"/></div>
                    </div>
                    <div
                        className="border-default hidden rounded-bl-2xl rounded-br-none rounded-tl-2xl border border-r-0 border-dashed bg-black/[3%] dark:bg-white/5 lg:block lg:py-[6px] lg:pl-[6px]"
                    ><img className="block dark:hidden" src="https://cal.com/mock-event-type-list.svg"
                          alt="Cal.com Booking Page"/><img className="hidden dark:block"
                                                           src="https://cal.com/mock-event-type-list-dark.svg"
                                                           alt="Cal.com Booking Page"/></div>
                    <div className="mr-12 mt-8 hidden h-full w-full grid-cols-3 gap-4 overflow-hidden lg:grid"
                    >
                        <div className="max-w-52 mb-8 flex flex-col leading-none sm:mb-0">
                            <div className="text-emphasis items-center">
                                <svg height="16" width="16" className="fill-transparent mb-1 h-4 w-4"
                                     aria-hidden="true">
                                    <use href="#calendar-heart"></use>
                                </svg>
                                <span className="text-sm font-medium">Connect all your calendars</span></div>
                            <div className="text-subtle text-sm"><p>Cal.com reads availability from
                                all your existing calendars.</p></div>
                        </div>
                        <div className="max-w-52 mb-8 flex flex-col leading-none sm:mb-0">
                            <div className="text-emphasis items-center">
                                <svg height="16" width="16" className="fill-transparent mb-1 h-4 w-4"
                                     aria-hidden="true">
                                    <use href="#users"></use>
                                </svg>
                                <span className="text-sm font-medium">Set your availability</span></div>
                            <div className="text-subtle text-sm"><p>Set schedules for the times you
                                want to be booked.</p></div>
                        </div>
                        <div className="max-w-52 mb-8 flex flex-col leading-none sm:mb-0">
                            <div className="text-emphasis items-center">
                                <svg height="16" width="16" className="fill-transparent mb-1 h-4 w-4"
                                     aria-hidden="true">
                                    <use href="#link-2"></use>
                                </svg>
                                <span className="text-sm font-medium">Share a link or embed</span></div>
                            <div className="text-subtle text-sm"><p>Share your Cal.com link or
                                embed on your site.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{position: "fixed", zIndex: "9999", inset: "16px", pointerEvents: "none"}}></div>
        </div>
    );
}