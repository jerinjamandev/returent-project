import React from 'react';

const MenuTab = ({ category, isActive, onClick }) => {
    const activeClasses = 'bg-red-700 text-white shadow-lg';
    const inactiveClasses = 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200';

    return (
        <button
            onClick={() => onClick(category)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isActive ? activeClasses : inactiveClasses}`}
        >
            {category}
        </button>
    );
};

export default MenuTab