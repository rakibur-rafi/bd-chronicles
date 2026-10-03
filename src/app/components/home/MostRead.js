import Link from 'next/link';
import React from 'react';


const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostRead= data.data
    return (
    <div className="card bg-base-100 shadow-sm p-4">
        <div className="card-body p-0">
            <h2 className="card-title text-red-700">{mostRead[0].category}</h2>
            {
            mostRead.map((item, i) => (
                <Link href={`/article/${item.id}`} key={i}>
                    <div  className="flex py-1 items-start gap-2">
                    <span className="text-md font-bold text-gray-500">{i+1}.</span>
                    <h2 className="text-md font-semibold hover:underline">{item.title}</h2> 
                </div>
                </Link>
            ))
        }
        </div>
        
        </div>
    );
};

export default MostRead;