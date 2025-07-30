import TimelineV1Data from "../../assets/jsonData/timeline/TimelineV1Data.json";

interface DataType {
    sectionClass?: string
}

const TimelineV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`timeline-area ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: 'url(/assets/img/shape/21.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading">
                                <h2 className="title">Our Journey & Vision</h2>
                                <div className="row">
                                    <div className="col-xl-10 offset-xl-2">
                                        <p>
                                            From humble beginnings to a future-focused vision, this is the story of Heritage Fields & Acreage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="timeline-items">
                                {TimelineV1Data.map(item =>
                                    <div className="timeline-item" key={item.id}>
                                        <h2>{item.year}</h2>
                                        <h4>{item.title}</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelineV1;