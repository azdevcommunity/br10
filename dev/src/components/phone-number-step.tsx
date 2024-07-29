import React, {useEffect, useState} from "react";

interface PhoneNumberStepProps {
    onSubmitPhoneNumber: (phoneNumber: string) => void;
    changeStep: (step: number) => void;
    phoneNumber?: string;
}

export const PhoneNumberStep: React.FC<PhoneNumberStepProps> = ({onSubmitPhoneNumber, changeStep, phoneNumber}) => {
    const [phone, setPhone] = useState<string>(phoneNumber || '');
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const handleOnPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 9) {
            setPhone(event.target.value);
        } else {
            setPhone(event.target.value.slice(0, 9));
        }
    };

    const sendOtp = () => {
        if (phone.length === 9) {
            onSubmitPhoneNumber(phone);
            changeStep(2);
        }
    };

    const handleKeyDown = (event) => {
        if (['e', 'E', '+', '-', '.'].includes(event.key)) event.preventDefault();
    };

    const handleInput = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setPhone(newValue.slice(0, 9));
    };

    useEffect(() => {
        setIsButtonDisabled(phone.length !== 9);
    }, [phone]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className={"text-left"}>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Başlayaq</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Aktiv telefon nömrəni yaz ki, sənə təsdiq mesajı
                        göndərə bilək.</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                            Telefon nömrən
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
              <span
                  className="inline-flex items-center rounded-l-md border border-r-0 border-border bg-muted px-3 text-muted-foreground">
                +994
              </span>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                autoComplete="tel"
                                onKeyDown={handleKeyDown}
                                onInput={handleInput}
                                required
                                value={phone}
                                onChange={handleOnPhoneNumberChange}
                                className="block w-full flex-1 rounded-r-md border bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="(55) 555-55-55"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        disabled={isButtonDisabled}
                        onClick={sendOtp}
                        className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Növbəti
                    </button>
                </form>
            </div>
        </div>
    );
};