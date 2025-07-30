import ChooseListV4Data from "../../assets/jsonData/whyChoose/ChooseListV4Data.json"
import SingleChooseV4 from "./SingleChooseV4";
import illustration18 from "/assets/img/illustration/18.png"
import shape29 from "/assets/img/shape/29.png"
import Counter from "../counter/Counter";

const WhyChooseV4 = () => {
    return (
        <>
            <div className="choose-us-style-four-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-3 col-lg-12">
                            <div className="feature-style-three-item">
                                <ul>
                                    {ChooseListV4Data.slice(0, 2).map(list =>
                                        <SingleChooseV4 list={list} key={list.id} />
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12">
                            <div className="thumb-style-three">
                                <img className="animate" data-animate="pulse" src={illustration18} alt="Image Not Found" />
                                <div className="ex-badge animated animate" data-animate="fadeInUp">
                                    <img src={shape29} alt="Image Not Found" />
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><Counter end={150} /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Dairy Products</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-12">
                            <div className="feature-style-three-item text-end">
                                <ul>
                                    {ChooseListV4Data.slice(2, 4).map(list =>
                                        <SingleChooseV4 list={list} key={list.id} />
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

export default WhyChooseV4;