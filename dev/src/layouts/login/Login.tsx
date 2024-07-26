import React, {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {PasswordField} from "@/components/PasswordField.tsx";
import {Link, Spacer} from "@nextui-org/react";
import Navbar from "@/components/Navbar.tsx";


export const Login: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Email, telefon nömrəsi və ya şifrə yalnışdır"
        }),
        password: z.string().min(8, {
            message: "Şifrə ən az 8 simvoldan ibarət olmalıdır"
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <>
            <Navbar/>
            <div className="h-screen flex lg:flex-row flex-col justify-center items-center bg-on-light-primary text-md">
                {/*left side image*/}
                <div className="lg:flex flex-1 h-full w-full">
                    <img src="/assets/abs_bg.png" alt="login-image" className={"object-cover object-center h-[16rem] max-[320px]:h-[25rem] lg:h-auto"}/>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-3 lg:w-3/5 w-full px-7 mt-6 mb-16 max-[320px]:mt-10 lg:mt-0 lg:mb-0 h-full
                           rounded-3xl lg:px-64  flex flex-col justify-center ">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormMessage/>
                                    <FormControl>
                                        <Input placeholder="Email və ya telefon nömrəsi" className={"text-md h-12"} {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        {/*<Input placeholder="Email" {...field} />*/}
                                        <PasswordField
                                            description={<Link href="reset" className={"font-medium mt-4 mb-2"}>Şifrəni unutmusan?</Link>} className={"text-md h-12"} {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className={"font-medium w-full h-12"}>Daxil ol</Button>

                        {/*"or" section (sign in with google or apple*/}
                        <div className="flex items-center space-x-2 mt-4">
                            <hr className="w-full border-t border-gray-400"/>
                            <p className="text-gray-400">or</p>
                            <hr className="w-full border-t border-gray-400"/>
                        </div>
                        <Button className="w-full h-12" variant={"outline"} type={"button"}>Google ilə daxil ol</Button>
                        <Button className="w-full h-12" variant={"outline"} type={"button"}>Apple ilə daxil ol</Button>
                        <Spacer y={3}/>

                        <div className="text-gray-400 max-[320px]:pb-3">Hesabın yoxdur? <Link href="/register">Qeydiyyatdan keç!</Link>
                        </div>
                    </form>

                </Form>

            </div>
        </>
    );
};