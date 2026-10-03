import React from 'react';
import Image from 'next/image';

const page = async ({ params }) => {
    const { articleID } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${articleID}`
    );

    const data = await res.json();
    const article = data.data;

    const date = new Date(article.lastPublished);

    return (
        <article className="max-w-4xl mx-auto py-8 px-4">

            <p className="text-red-700 font-semibold mb-3">
                {article.topics?.[0]?.name}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                {article.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-8 mb-6">
                {article.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
            </p>

            <div className="border-y border-gray-200 py-4 mb-6">
                <div className="flex flex-wrap justify-between gap-3 text-sm text-gray-500">

                    <div>
                        {article.byline?.map((author, index) => (
                            <p key={index}>
                                <span className="font-semibold text-gray-700">
                                    {author.name}
                                </span>
                                {' - '}
                                {author.role}
                            </p>
                        ))}
                    </div>

                    <p>
                        {date.toLocaleDateString('bn-BD', {
                            dateStyle: 'full',
                        })}
                        ,{' '}
                        {date.toLocaleTimeString('bn-BD', {
                            timeStyle: 'short',
                        })}
                    </p>

                </div>
            </div>

          

            {/* Article Body */}
            <div className="space-y-6 text-lg leading-9 text-gray-800">

                {article.body?.map((block, index) => {

                    if (block.type === 'image') {
                        return (
                            <figure key={index} className="my-8">
                                <Image
                                    src={block.url}
                                    alt={block.altText || article.title}
                                    width={block.width || 1200}
                                    height={block.height || 675}
                                    className="w-full h-auto object-cover"
                                />

                                {block.caption && (
                                    <figcaption className="text-sm text-gray-500 mt-2">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    if (block.type === 'subheading') {
                        return (
                            <p key={index} className="text-2xl font-bold">
                                {block.text}
                            </p>
                        );
                    }

                    if (block.type === 'text') {
                        return (
                            <p key={index} className="whitespace-pre-line">
                                {block.text}
                            </p>
                        );
                    }

                    

                    return null;
                })}

            </div>

            {article.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-200">
                    {article.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            )}

            {/* Source */}
            <div className="mt-6 text-sm text-gray-500">
                Source: {article.source}
            </div>

        </article>
    );
};

export default page;