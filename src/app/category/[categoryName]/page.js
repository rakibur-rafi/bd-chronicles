import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const page = async ({params}) => {

    const {categoryName} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryName}`);
    const data = await res.json();
    const newsTopics= data.title
    const news= data.data

    return (
        <div className="flex flex-col gap-4">
                <div className="my-4">
                                <div className="card-body p-0">
                                    <h2 className="card-title border-b-2 border-red-700 py-2">{newsTopics}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                        {
                                        news.map((item, j) => (
                                            <Link href={`/article/${item.id}`} key={j} className="card bg-base-100 shadow-sm h-full">
                                                <figure>
                                                    <Image
                                                        src={item.imageUrl}
                                                        alt="News"
                                                        width={500}
                                                        height={500}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                </figure>
                                            
                                                <div className="card-body p-4">
                                                <p className="text-red-700">{item.category}</p>
                                                <h2 className="card-title">{item.title}</h2>
                                            
                                              <p className="text-sm text-gray-600">
                                                    {item.description
                                                        ? item.description.split(" ").slice(0, 20).join(" ")
                                                        : ""}
                                                    {item.description?.split(" ").length > 20 ? "..." : ""}
                                                </p>
                                            
                                                <div className="card-actions justify-end">
                                                    <p className="text-xs text-gray-500">
                                                    {new Date(item.lastPublished).toLocaleDateString('bn-BD', {
                                                        dateStyle: 'full',
                                                    })}, {new Date(item.lastPublished).toLocaleTimeString('bn-BD', {
                                                        timeStyle: 'short',
                                                    })}
                                                </p>
                                                </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>    
        </div>
    );
};

export default page;