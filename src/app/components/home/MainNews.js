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
            <Link href={`/article/${firstArticle.id}`}>
                <div className="card bg-base-100 shadow-sm h-full">
                <figure className="h-64">
                    <Image
                        src={firstArticle.imageUrl}
                        alt="News"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="card-body p-4">
                    <p className="text-red-700">{firstArticle.category}</p>

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
            <div className="grid grid-cols-1 gap-2">
                {otherNews.slice(0, 4).map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`}>
                        <div
                        
                        className="card shadow-sm p-4 justify-center"
                    >
                        <div className="p-0">
                            <p className="text-red-700 text-sm">
                                {article.category}
                            </p>

                            <Link
                                href={`/article/${article.id}`}
                                className="text-md font-semibold hover:underline"
                            >
                                {article.title}
                            </Link>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default MainNews;