import React from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PasswordField } from "@/components/PasswordField";
import { Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Email, telefon nömrəsi və ya şifrə yalnışdır",
        }),
        password: z.string().min(8, {
            message: "Şifrə ən az 8 simvoldan ibarət olmalıdır",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        fetch(`${import.meta.env.VITE_BR10_API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    localStorage.setItem("token", data.data.accessToken);
                    navigate("/dashboard");
                } else {
                    console.error("Login failed:", data.message);
                }
            })
            .catch((err) => console.error("Error:", err));
    }

    return (
        <div className="h-screen flex lg:flex-row flex-col justify-center items-center bg-on-light-primary text-md">
            <div className="lg:flex flex-1 h-full w-full">
                <img
                    src="/assets/abs_bg.png"
                    alt="login-image"
                    className="object-cover object-center h-[16rem] max-[320px]:h-[12rem] lg:h-auto"
                />
            </div>
            {/*// @ts-ignore*/}
            <Form control={form.control} handleSubmit={form.handleSubmit} formState={form.formState}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3 lg:w-3/5 w-full px-7 mt-6 mb-16 max-[320px]:mt-10 lg:mt-0 lg:mb-0 h-full rounded-3xl lg:px-64 flex flex-col justify-center"
                >
                    <span className="text-3xl font-bold">Daxil ol</span>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Email və ya telefon nömrəsi"
                                        className="text-md h-12"
                                        value={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordField
                                        description={
                                            <Link href="reset" className="font-medium mt-4 mb-2">
                                                Şifrəni unutmusan?
                                            </Link>
                                        }
                                        className="text-md h-12"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="font-medium w-full h-12">
                        Daxil olsd
                    </Button>
                    <div className="text-gray-400 max-[320px]:pb-3">
                        Hesabın yoxdur?{" "}
                        <Link
                            href="/register"
                            onClick={() => navigate("/register")}
                        >
                            Qeydiyyatdan keç!
                        </Link>
                    </div>
                </form>
            </Form>
        </div>
    );
};