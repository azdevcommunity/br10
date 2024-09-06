import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { z } from 'zod';
import { useToast } from "@/components/ui/use-toast.ts";
import { Toaster } from "@/components/ui/toaster.tsx";
import { SpokeSpinner } from "@/components/SpokeSpinner.tsx";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/AuthProvider';

const loginSchema = z.object({
    phoneNumber: z.string().min(10, { message: "Telefon nömrəsi ən azı 10 simvol olmalıdır" }),
    password: z.string().min(4, { message: "Şifrə ən azı 4 simvol olmalıdır" }),
});

export const LoginPageV3: React.FC = () => {
    const { toast } = useToast();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ phoneNumber?: string; password?: string }>({});

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from = location.state?.from?.pathname || "/";

    // Kullanıcı zaten login olmuşsa ana sayfaya yönlendir
    useEffect(() => {
        if (user) {
            navigate('/', { replace: true });
        }
    }, [user, navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const validation = loginSchema.safeParse({ phoneNumber, password });
        if (!validation.success) {
            const fieldErrors = validation.error.format();
            setErrors({
                phoneNumber: fieldErrors.phoneNumber?._errors[0],
                password: fieldErrors.password?._errors[0],
            });
            return;
        }

        setErrors({});

        const loginData = {
            phoneNumberOrUsername: phoneNumber,
            password: password,
        };

        try {
            setLoading(true);

            const response = await fetch(`${import.meta.env.VITE_BR10_API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                const { accessToken } = data.data;

                // Tokeni localStorage'a kaydet ve auth context'te kullanıcıyı giriş yapmış olarak işaretle
                login(accessToken);

                // Başarılı giriş sonrası kullanıcıyı gitmek istediği sayfaya yönlendir
                navigate(from, { replace: true });
            } else {
                const errorData = await response.json();
                toast({
                    title: 'An error occurred',
                    description: errorData.message,
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast({
                title: 'Xəta baş verdi',
                description: 'Daxil olarkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.',
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen flex-col my-auto mx-3">
                <span className={"text-3xl font-bold mb-4"}>Welcome back</span>
                <Card className="w-full max-w-sm p-6 rounded-lg shadow-md">
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <Label htmlFor="phoneNumber">Telefon nömrəsi</Label>
                                <Input
                                    type="number"
                                    id="phoneNumber"
                                    placeholder="0559876543"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm 
                                    focus-visible:ring-cal-button-hover sm:text-sm 
                                    ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="password">Şifrə</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`mt-1 block w-full px-3 py-2 border focus-visible:ring-cal-button-hover rounded-md shadow-sm sm:text-sm ${errors.password ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-cal-button hover:bg-cal-button-hover
                                focus-visible:ring-cal-button-hover py-2 px-4 rounded-md"
                                disabled={loading}
                            >
                                {loading ? <SpokeSpinner /> : "Daxil ol"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                <Toaster />
            </div>
        </>
    );
};

export default LoginPageV3;