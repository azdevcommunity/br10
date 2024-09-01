import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const [phoneNumberOrUsername, setPhoneNumberOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

           fetch(`${import.meta.env.VITE_BR10_API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumberOrUsername, password }),
            }).then((response) => response.json())
            .then((data) => {
                    localStorage.setItem("token", data.data.accessToken);
                    navigate("/main");
            })
            .catch((err) => console.log(err.message));

    };

    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription>Enter your username or phone number and password to sign in to your account.</CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="phoneNumberOrUsername">Username or Phone Number</Label>
                            <Input
                                id="phoneNumberOrUsername"
                                type="text"
                                placeholder="Username or phone number"
                                required
                                value={phoneNumberOrUsername}
                                onChange={(e) => setPhoneNumberOrUsername(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="text-sm font-medium text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-end items-end">
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                        <p className="mt-2 text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="font-medium text-primary hover:underline">
                                Register
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
