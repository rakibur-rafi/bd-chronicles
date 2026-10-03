import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const NavHeader = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    const buttons = <>
        <Link href="/sign-in"><button className="btn btn-sm">সাইন ইন</button></Link>
        <Link href="/sign-up"><button className="btn btn-sm bg-red-700 text-white">সাইন আপ</button></Link>
    </>
    
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
                <Image src="/logo.webp" className="w-10 h-10" alt="logo" width={50} height={50}/>
                <Link href="/">
                <div className="flex flex-col">
                        <h1 className="text-lg font-semibold uppercase tracking-tighter">BD Chronicles</h1>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </Link>
            </div>
            <div className="flex space-x-2">
                {buttons}
            </div>
        </div>
        </div>
    );
};

export default NavHeader;