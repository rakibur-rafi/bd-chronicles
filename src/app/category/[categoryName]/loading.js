import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col gap-4 animate-pulse">
            <div className="my-4">
                <div className="card-body p-0">

                    <div className="h-8 w-48 bg-gray-300 rounded mb-4"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="card bg-base-100 shadow-sm h-full"
                            >
                                {/* Image skeleton */}
                                <div className="w-full h-48 bg-gray-300"></div>

                                <div className="card-body p-4">

                                    {/* Category */}
                                    <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>

                                    {/* Title */}
                                    <div className="h-6 w-full bg-gray-300 rounded mb-2"></div>
                                    <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>

                                    {/* Description */}
                                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                                    <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>

            

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Loading;
