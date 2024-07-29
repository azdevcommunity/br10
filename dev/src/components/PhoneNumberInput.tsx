import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Input } from "@/components/ui/input.tsx";

interface PhoneNumberInputProps {
    onValidPhoneNumber: (phoneNumber: string | null) => void;
    className?: string;
}

const PhoneNumberInput = forwardRef(({ className, onValidPhoneNumber }: PhoneNumberInputProps, ref) => {
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleKeyDown = (event) => {
        if (['e', 'E', '+', '-', '.'].includes(event.key)) {
            event.preventDefault();
        }
    };

    const handleInput = (event) => {
        let newValue = event.target.value.replace(/[^0-9]/g, '');
        if (newValue.length > 9) {
            newValue = newValue.slice(0, 9);
        }
        setValue(newValue);
    };

    const validateInput = () => {
        if (value.length !== 9) {
            setErrorMessage('Phone number must be exactly 9 digits.');
            onValidPhoneNumber(null);
            return false;
        } else {
            setErrorMessage('');
            onValidPhoneNumber(value);
            return true;
        }
    };

    useImperativeHandle(ref, () => ({
        validateInput
    }));

    return (
        <div className={`w-full ${className}`}>
            <div className={"flex flex-row items-center h-10"}>
                <div
                    className={`bg-background border border-input h-full border-1 inline-flex 
                                items-center px-2 rounded-tl-xl rounded-bl-xl w-fit`}>+994
                </div>
                <Input
                    placeholder="501234567"
                    type="number"
                    value={value}
                    onKeyDown={handleKeyDown}
                    onInput={handleInput}
                    className="rounded-tr-xl text-md rounded-br-xl rounded-tl-none rounded-bl-none border-l-0"
                />
            </div>
            {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
        </div>
    );
});

export default PhoneNumberInput;