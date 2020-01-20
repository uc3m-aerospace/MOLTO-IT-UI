import React from 'react';
import './../../styles/main.scss'
import SectionAbout from '../Home/SectionAbout'
import SectionMissions from '../Home/SectionMissions'
import SectionCollaboration from '../Home/SectionCollaboration'

const Home = () =>  {
   
    return (
        <React.Fragment>        
                    <SectionAbout/>
                    <SectionMissions/>
                    <SectionCollaboration/>
        </React.Fragment>
    );
}

export default Home;
