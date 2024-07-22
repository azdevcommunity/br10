export const HamburgerButton = () => {
    return (
        <div className="flex items-center justify-center w-10 h-9 bg-transparent rounded-lg border border-custom-gray-700 focus:border-none">
            <div className="space-y-1">
                <div className="w-5 h-0.5 bg-gray-800 dark:bg-custom-gray-050 rounded"></div>
                <div className="w-5 h-0.5 bg-gray-800 dark:bg-custom-gray-050 rounded"></div>
                <div className="w-5 h-0.5 bg-gray-800 dark:bg-custom-gray-050 rounded"></div>
            </div>
        </div>
    );
}