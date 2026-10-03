import React from 'react';
import Link from 'next/link';

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const news= data.data
    return (
         <div className="w-full overflow-hidden bg-red-700 text-white mt-4">
            <div className="flex h-10 items-center">

        {/* Label */}
                <div className="z-10 flex h-full shrink-0 items-center bg-red-800 px-5 text-xs font-bold">
                    সর্বশেষ
                </div>

                {/* Marquee */}
                <div className="relative flex-1 overflow-hidden">
                <div className="flex w-max animate-marquee whitespace-nowrap">
                    {news.map((item, i) => (
                        <div key={i} className="flex items-center text-sm">
                            <span className="mx-4 font-bold text-gray-300 ">•</span>
                            <Link href={`/article/${item.id}`} className="hover:underline">{item.title}</Link>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;