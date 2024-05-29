import React from 'react';
import Hero from '../Components/Hero/Hero';
import Business from '../Components/Business/Business';
import Interior from '../Components/Interior/Interior';
import Project from '../Components/Project/Project';

import Guide from '../Components/Guide/Guide';

const Home = () => {
    return (
        <div>
         <Hero/>
         <Business/>
         <Interior/>
         <Project/>
         <Guide/>
        </div>
    );
};

export default Home;