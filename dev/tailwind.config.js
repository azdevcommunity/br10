/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const {nextui} = require("@nextui-org/react");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        flowbite.content()
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'spin-words': 'spinWords 6s infinite',
            },
            keyframes: {
                spinWords: {
                    '10%': {transform: 'translateY(-112%)'},
                    '25%': {transform: 'translateY(-100%)'},
                    '35%': {transform: 'translateY(-212%)'},
                    '50%': {transform: 'translateY(-200%)'},
                    '60%': {transform: 'translateY(-312%)'},
                    '75%': {transform: 'translateY(-300%)'},
                    '85%': {transform: 'translateY(-412%)'},
                    '100%': {transform: 'translateY(-400%)'}
                }
            },
            colors: {
                customTeal: '#1e5a4c', // Add custom teal color
            },
            sizes: {
                22: "87.5px"
            },
            boxShadow: {
                'outline-teal': '0 0 0 1.5px rgba(20, 184, 166, 1)',
            }
        },
        colors: {
            "custom-primary": {
                "900": "#00254D",
                "800": "#003166",
                "700": "#0055B2",
                "600": "#005CE5",
                "500": "#0166FF",
                "400": "#3395FF",
                "300": "#66AFFF",
                "200": "#B2D7FF",
                "100": "#E5F2FF"
            },
            "custom-success": {
                "900": "#064E3B",
                "800": "#065F46",
                "700": "#047857",
                "600": "#059669",
                "500": "#10B978",
                "400": "#34D399",
                "300": "#6EE7B7",
                "200": "#A7F3D0",
                "100": "#D1FAE5",
                "050": "#ECFDF5"
            },
            "error": {
                "900": "#790C0C",
                "800": "#B01111",
                "700": "#DE1212",
                "600": "#F62C2C",
                "500": "#FF4D4D",
                "400": "#FF6666",
                "300": "#FF8585",
                "200": "#FFA3A3",
                "100": "#FFC2C2",
                "050": "#FFE5E5"
            },
            "custom-gray": {
                "900": "#141C25",
                "800": "#1A232D",
                "750": "#27313F",
                "700": "#344051",
                "600": "#414E62",
                "500": "#637083",
                "400": "#97A1AF",
                "300": "#CED2DA",
                "200": "#E4E7EC",
                "100": "#F2F4F7",
                "050": "#F9FAFB"
            }
        }
    },
    variants: {
        extend: {
            borderColor: ['focus'], // Ensure focus variant is available for borderColor
            ringWidth:
                ['focus'],
            backgroundColor: ['dark'],
            textColor: ['dark']
        }
        ,
    }
    ,
    plugins: [
        flowbite.plugin(),
        nextui()
    ],
}

