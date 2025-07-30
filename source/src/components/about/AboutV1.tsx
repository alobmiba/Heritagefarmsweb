import about1 from '/assets/img/about/1.jpg';
import illustration1 from '/assets/img/illustration/1.png';
import AboutV1ListData from '../../assets/jsonData/about/AboutV1ListData.json'
import AboutV1List from './AboutV1List';
import Counter from '../counter/Counter';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {

    useEffect(() => {
        // Set initial position
        gsap.set('.animation-shape', {
            yPercent: 10,
        });

        // Create the animation
        gsap.to('.animation-shape', {
            yPercent: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.animation-shape',
                scrub: 1,
            },
        });
    }, []);

    return (
        <>
            <div className="about-style-one-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="about-style-one-thumb">
                                <img src={about1} alt="Image Not Found" />
                                <div className="animation-shape">
                                    <img src={illustration1} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-style-one-info">
                                <h2 className="title">Cultivating Heritage, <br /> Reclaiming Food Sovereignty</h2>
                                <p>
                                    Ontario’s first Black-led farm to focus on year-round West African and Caribbean greens using sustainable greenhouse, hydroponic, and pasture systems.
                                </p>
                                <div className="fun-fact-style-flex mt-35">
                                    <div className="counter">
                                        <div className="timer"><Counter end={33} /></div>
                                        <div className="operator"></div>
                                    </div>
                                    <span className="medium">Acres of <br /> Reclaimed Farmland</span>
                                </div>
                                <ul className="top-feature">
                                    {AboutV1ListData.map(list =>
                                        <AboutV1List key={list.id} list={list} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;