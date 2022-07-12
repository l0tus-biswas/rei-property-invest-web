import "./Services.css"
import image1 from "../../assets/images/integration/1621276243.png"
import docusign from "../../assets/images/integration/docusign.png"
import globiflow from "../../assets/images/integration/globiflow-shape.jpg"
import image2 from "../../assets/images/integration/UY7DlO0a_400x400.png"
import twilio from "../../assets/images/integration/Twilio_SMS_Logo__1_.jpg"
import image3 from "../../assets/images/integration/social.png"
import integromat from "../../assets/images/integration/Integromat-logo.png"
import mcLogo from "../../assets/images/integration/MC_Logo.jpg"
import image4 from "../../assets/images/integration/KRgw2UkV_400x400.jpg"
import crmSuit from "../../assets/images/services-product/crm-suit.png"
import kpiTracker from "../../assets/images/services-product/kpi-tracker.png"
import smsBlast from "../../assets/images/services-product/sms-blast.png"
import underline_black from "../../assets/images/svg/line-shape-1.svg"
import { useEffect } from "react"

function Services(){
    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }
    return(
        <>
        <ScrollToTopOnMount />
     <section className="services-intro mb-5">
        <div className="container py-5 ">
            <div className="row gx-lg-5 gx-sm-2 justify-content-center ">
                <div className="col-lg-7 col-md-10 col-12 my-auto text-center"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
                    <div className="say">
                        <h1 className="">Our Services</h1>
                        <p className="fs-4 mt-3">We are a creative company that focuses on establishing long-term relationships with customers</p>

                    </div>
                </div>
            </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>

    </section>


    <section className="services-integration back-img  mb-5">
        <div className="container p-5">
            <div className="row gx-lg-5 gx-sm-2">
                <div className="col-lg-6 col-md-12 col-12 my-auto">
                    <div className="mb-4 mb-md-4 mb-lg-0">
                        <h1 className="intro-sub-head">You think we integrate</h1>
                        <h1 className="mb-4 fs-1">We are the Podio Integration Experts</h1>
                        <p className="fs-5">We will customise and integrate Podio with the best business applications and systems through REST/SOAP based web services.</p>
                            <a href="our-integration-services" target="blank" className="btn btn-orange me-2 mb-2 col-lg-6 col-md-12 col-12">Check all our
                            integrations</a>
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 col-12 my-auto mx-auto right-img ">
                <div className="marquee">
                                <div className="marquee-content">
                                    <div className="marquee-item">
                                        <img src={image1} alt="" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src={docusign} alt="" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src={globiflow} alt="" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src={image2} alt="" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src={twilio} alt="" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src={image3} alt="" />
                                    </div>


                                    <div className="marquee-item">
                                        <img src={integromat} alt="" />
                                    </div>


                                    <div className="marquee-item">
                                        <img src={mcLogo} alt="" />
                                    </div>

                                    <div className="marquee-item">
                                        <img src={image4} alt="" />
                                    </div>
                                </div>
                            </div>
                </div>



            </div>

        </div>
    </section>

    <section className="contact-separation  mb-5">
        <div className="container p-5">
            <div className="row gx-lg-5 gx-sm-2 d-flex justify-content-center">
                <div className="col-lg-7 col-md-12 col-12 my-auto text-center">
                    <div className="mb-4 mb-md-4 mb-lg-0">
                        <h1 className="mb-4 fs-1">Convinced to work on a new project ?</h1>
                        <a href="pricing" className="btn btn-outline-orange-tdark col-lg-6 col-md-12 col-12 mb-3">Choose
                            Plan</a>
                        
                    </div>

                </div>
            </div>

        </div>
    </section>

    <section className="services-product back-img mb-5">
        <div className="container p-5  ">
            <div className="row text-center mb-5">
                <div className="col-12">
                    <h1 className="intro-sub-head">SERVICES</h1>
                </div>
                <div className="col-12">
                    <h1 className="fs-1">We help you to drive growth at your business</h1>

                </div>
            </div>
            <div className="row gx-lg-5 gx-sm-2">
                <div className="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2 my-auto">
                    <div className="mt-4 mt-md-4 mt-lg-0">
                        <h4 className="mt-3">PODIO SUITE FOR REAL ESTATE</h4>

                        <h4 className="fs-1 mt-2">25+ Podio built-in features that can be customised</h4>
                        <p className="fs-5 mt-3">The only Podio dashboard you need to get started with your business with power pack features is only <span className="fw-bold">$1500</span>. This is a one-time payment with 3 months of free service on our product.</p>
                    </div>

                </div>
                <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1 my-auto mx-auto  "  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <div className="services-img ">
                        <img src={crmSuit} className="rounded-4" alt="" />
                    </div>
                </div>
            </div>
            <div className="separated my-5">
                <img src={underline_black} alt=""/>
            </div>
            <div className="row gx-lg-5 gx-sm-2">
                <div className="col-lg-5 col-md-12 col-12 order-lg-2 order-md-2 order-2 my-auto">
                    <div className="mt-4 mt-md-4 mt-lg-0">
                        <h4 className="mt-3">KPI TRACKER</h4>

                        <h4 className="fs-1 mt-2">Analytical sales performance of your company</h4>
                        <p className="fs-5 mt-3">The KPI Tracker is available only at <span className="fw-bold">$49/month </span>to track all the activities of the people working in your organization. To learn more, <a href="https://www.youtube.com/watch?v=57CkQMqwuAw&feature=youtu.be">click here.</a> </p>
                    </div>

                </div>
                <div className="col-lg-7 col-md-12 col-12 order-lg-1 order-md-1 order-1 my-auto mx-auto  "  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                    <div className="services-img">
                        <img src={kpiTracker} alt="" className="rounded-4"/>
                    </div>
                </div>
            </div>
            <div className="separated my-5">
                <img src={underline_black} alt=""/>
            </div>
            <div className="row gx-lg-5 gx-sm-2">
                <div className="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2 my-auto">
                    <div className="mt-4 mt-md-4 mt-lg-0">
                        <h4 className="mt-3">
                            BLUK SMS PLATFORM</h4>

                        <h4 className="fs-1 mt-2">Powerful and Quick delivery of SMS</h4>
                        <p className="fs-5 mt-3">You don’t need to purchase any other system when you can directly do the Bulk SMS Campaigns from Podio itself for only <span className="fw-bold">$49/month</span>. You just need a Twilio account and an Amazon EC-2 server.
                            </p>
                    </div>

                </div>
                <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1 my-auto mx-auto  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                    <div className="services-img">
                        <img src={smsBlast} className="rounded-4" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Services;