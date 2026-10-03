import React from "react";

const Loading = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-red-700 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;
