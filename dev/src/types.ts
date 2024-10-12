export type Section = {
    name: string;
    path: string;
};

export interface ColumnMapping {
    sourceColumn: string;
    targetColumn: string;
    sourceDataType: string;
    targetDataType: string;
}

export interface MappingComponentProps {
    columns: ColumnMapping[];
    onBack: () => void;
    onReset: () => void;
    onMigrate: (mappings: ColumnMapping[]) => void;
    transformationPreviewData: any[];
    messages: string[];
}

export interface UserRegister {
    phoneNumber?: string;
    otp?: string;
    username?: string;
    password?: string;
    birthDate?: string;
    gender: string;
}

export interface RegisterData {
    confirmPassword: string
    password:string
    phoneNumber:string
    registerType: 1
    username:string
}

export type DeviceInfo = {
    deviceId: string;
    clientType: number;
    operatingSystem: string;
    osVersion: string;
    appVersion: string;
    brand: string;
    model: string;
};

export type OtpRequest = {
    otp: number;
    phoneNumber: string;
    deviceInfo: DeviceInfo;
};

export type RegisterResponseData = {
    id: number;
    username: string;
    phoneNumber: string;
    otp: number;
    otpExpireDate: number;
};

export type RegisterResponse = {
    data: RegisterData;
    code: number;
    message: string;
    activityId: string;
};

