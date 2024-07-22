export const HamburgerButtonClose = () => {
    return (
        <div
            className="flex items-center justify-center w-10 h-9 bg-transparent rounded-lg border border-custom-gray-700">
            <div className="relative top-2.5 w-6 h-6">
                <div className="absolute inset-0 w-full h-[0.12rem] bg-gray-800 transform rotate-45 rounded dark:bg-custom-gray-050"></div>
                <div className="absolute inset-0 w-full h-[0.12rem] bg-gray-800 transform -rotate-45 rounded dark:bg-custom-gray-050"></div>
            </div>
        </div>
    );
}