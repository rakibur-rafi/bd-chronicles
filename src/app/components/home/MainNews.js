import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainNews = ({ articles }) => {
    const [firstArticle, ...otherNews] = articles;

    const date = new Date(firstArticle.lastPublished).toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    const time = new Date(firstArticle.lastPublished).toLocaleTimeString('bn-BD', {
        timeStyle: 'short',
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

            {/* Main News */}
            <Link
                href={`/article/${firstArticle.id}`}
                className="h-full"
            >
                <div className="card bg-base-100 shadow-sm h-full">
                    <figure className="h-64">
                        <Image
                            src={firstArticle.imageUrl}
                            alt={firstArticle.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    <div className="card-body p-4">
                        <p className="text-red-700">
                            {firstArticle.category}
                        </p>

                        <h2 className="card-title text-2xl font-bold hover:underline">
                            {firstArticle.title}
                        </h2>

                        <p className="text-sm text-gray-600">
                            {firstArticle.description.split(" ").slice(0, 25).join(" ")}
                            {firstArticle.description.split(" ").length > 25 ? "..." : ""}
                        </p>

                        <p className="text-xs text-gray-500">
                            {date}, {time}
                        </p>
                    </div>
                </div>
            </Link>

            {/* Other News */}
            <div className="grid grid-rows-4 gap-2 h-full">
                {otherNews.slice(0, 4).map((article) => (
                    <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        className="h-full"
                    >
                        <div className="card bg-base-100 shadow-sm p-4 h-full flex justify-center">
                            <div>
                                <p className="text-red-700 text-sm mb-1">
                                    {article.category}
                                </p>

                                <h3 className="font-semibold hover:underline">
                                    {article.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default MainNews;