import React from 'react';
import Link from 'next/link';

const NavLink = async ({ params}) => {
    const res = await fetch(
        'https://news-api-v2.vercel.app/api/categories'
    );

    const data = await res.json();
    const navs = data.data;

    const filteredNavs = navs.filter(
        nav => nav.scrapable === true
    );


    return (
        <div className="sticky top-0 z-50 bg-[#fafafa] border-y border-gray-200 py-3">
            <div className="flex space-x-4 justify-center">
                <Link
                    href="/"
                    className="text-sm font-medium text-gray-700 hover:text-red-700"
                >
                    হোম
                </Link>

                {filteredNavs.map((nav) => (
                    <Link
                        key={nav.slug}
                        href={`/category/${nav.slug}`}
                        className="text-sm font-medium text-gray-700 hover:text-red-700"
                    >
                        {nav.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavLink;