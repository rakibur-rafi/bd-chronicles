import React from 'react';
import MainNews from './MainNews';
import MostRead from './MostRead';
import OtherNews from './OtherNews';


const Home = async() => {
    const res = fetch('https://news-api-v2.vercel.app/api/news/sections')
    const data = await (await res).json()
    const sections = data.data

    const mainSection= sections[0].articles
    const otherSections= sections.slice(1).filter((_, index) => ![1, 3, 9].includes(index))
    const filteredOut= sections.slice(1).filter((_, index) => [1, 3, 9].includes(index))

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6">
                <div className="col-span-2">
                    <MainNews articles={mainSection} />
                    <OtherNews sections={otherSections} />
                </div>
                <div className="col-span-1"><MostRead /></div>
            </div>
            
        </div>
    );
};

export default Home;