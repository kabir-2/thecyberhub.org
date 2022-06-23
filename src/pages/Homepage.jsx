import React, {useState} from 'react';
import {
    Navbar,
    Sidebar,
    Hero,
    Info,
    Services,
    Contribute,
    Footer
} from '../components'
import {homeObjOne, homeObjTwo, homeObjThree, ContributeObj} from "../components/Info/Data";

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Services/>
            <Info {...homeObjThree}/>
            <Contribute {...ContributeObj}/>
            <Footer />
        </>
    );
};

export default Homepage;
