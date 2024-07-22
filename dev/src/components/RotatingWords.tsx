import React from 'react';

const RotatingWords: React.FC = () => {
    return (
        <div className="flex items-center p-12 rounded-lg h-10 text-base sm:text-lg md:text-2xl lg:text-4xl">
            <div className="overflow-hidden ml-3 sm:h-5 md:h-7 lg:h-10 h-6">
                <span
                    className="block text-xl sm:text-lg md:text-2xl lg:text-4xl h-full text-blue-600 animate-spin-words">Bir kliklə</span>
                <span
                    className="block text-xl sm:text-lg md:text-2xl lg:text-4xl h-full text-blue-600 animate-spin-words">Rahatca</span>
                <span
                    className="block text-xl sm:text-lg md:text-2xl lg:text-4xl h-full text-blue-600 animate-spin-words">Bir kliklə</span>
                <span
                    className="block text-xl sm:text-lg md:text-2xl lg:text-4xl h-full text-blue-600 animate-spin-words">Rahatca</span>
                <span
                    className="block text-xl sm:text-lg md:text-2xl lg:text-4xl h-full text-blue-600 animate-spin-words">Bir kliklə</span>
            </div>
            <p className="font-medium ml-2 text-xl sm:text-lg md:text-2xl lg:text-4xl">rezervasiya et!</p>
        </div>
    );
};

export default RotatingWords;