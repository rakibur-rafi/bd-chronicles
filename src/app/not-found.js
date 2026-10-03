import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-bold text-red-700">
                ৪০৪
            </h1>

            <h2 className="text-xl font-semibold mt-2">
                এই পাতাটি পাওয়া যায়নি।
            </h2>

            <p className="text-gray-500 text-sm mt-2">
                আপনি যে পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে বা পাওয়া যায়নি।
            </p>

            <Link
                href="/"
                className="btn bg-red-700 text-white mt-4"
            >
                হোমপেজে ফিরুন
            </Link>
        </div>
    );
};
export default NotFound;
