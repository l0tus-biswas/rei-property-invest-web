import "./Home.css"
import underlineOrange from "../../assets/images/home/underline-orange.svg"
import podioIntro from "../../assets/images/podio-intro.png"
import podioShape from "../../assets/images/podio-shape.png"
import globiflowShape from "../../assets/images/globiflow-shape.jpg"
import anujDev from "../../assets/images/developers/anuj.jpg"
import whyus from "../../assets/images/reasons-to-choose-us/whyus.png"
import cusstomization from "../../assets/images/what-do-we-do/cusstomization.png"
import integration from "../../assets/images/what-do-we-do/integration.png"
import automation from "../../assets/images/what-do-we-do/automation.png"
import analysis from "../../assets/images/what-do-we-do/analysis.png"
import realEstateCRM from "../../assets/images/industry-specifc-custom/Real-estate-crm.png"
import retailCRM from "../../assets/images/industry-specifc-custom/Retail-CRM.png"
import manufactureringCRM from "../../assets/images/industry-specifc-custom/Manufacturing-CRM.png"
import field_serviceCRM from "../../assets/images/industry-specifc-custom/Field-service-managment-crm.png"
import travel_hos_CRM from "../../assets/images/industry-specifc-custom/Travel_&_hospitality-crm.png"
import solarCRM from "../../assets/images/industry-specifc-custom/Solar-industry-CRM.png"
import image1 from "../../assets/images/integration/1621276243.png"
import docusign from "../../assets/images/integration/docusign.png"
import globiflow from "../../assets/images/integration/globiflow-shape.jpg"
import image2 from "../../assets/images/integration/UY7DlO0a_400x400.png"
import twilio from "../../assets/images/integration/Twilio_SMS_Logo__1_.jpg"
import image3 from "../../assets/images/integration/social.png"
import integromat from "../../assets/images/integration/Integromat-logo.png"
import mcLogo from "../../assets/images/integration/MC_Logo.jpg"
import image4 from "../../assets/images/integration/KRgw2UkV_400x400.jpg"
import enhanceIcon from "../../assets/images/services/enchance-icon.png"
import enhance_expand from "../../assets/images/services/enhance_expand.png"
import customize_icon from "../../assets/images/services/customize-icon.png"
import customize from "../../assets/images/services/customize.png"
import underline_black from "../../assets/images/svg/line-shape-1.svg"
import quote_img from "../../assets/images/svg/quote.svg"
import { useEffect } from "react"
import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

function Home() {
    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    }
    return (
        <>
            <ScrollToTopOnMount />
           
            <section className="front-intro bg-deepNavyBlue text-white py-5">
                <div className="container">
                    <div className="row gx-lg-5 gx-sm-2 ">
                        <div className="col-lg-5 col-md-12 col-12 order-2 order-lg-1 my-auto">
                            <div className="mt-4 mt-md-4 mt-lg-0">
                                <h1>
                                    <span>Citrix Podio</span>
                                </h1>
                                <h1 className="mb-4">Customization Services</h1>

                                <p className="fs-3 mb-4">Get your CRM customization done right and maximize your Podio Investment</p>
                                <a href="https://podio.com/webforms/27230732/2095872" className="btn btn-orange me-2 mb-2 col-12" target="blank"><span className="fs-5 fw-bold">Get Started</span></a>

                                <a href="https://calendly.com/meetmehere/30min?month=2022-07" className="btn btn-outline-orange col-12" target="blank"><span className=" fs-5 fw-bold">Schedule a Meeting</span></a>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12 order-1 order-lg-2 my-auto" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="intro-img">
                                <img src={podioIntro} className="img-fluid img-shadow" alt="" />
                                <div className="shapes">
                                    <img src={podioShape} alt="" />
                                    <img src={globiflowShape} alt="" />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
           
            <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(48, 213, 199, 1)" offset="0%"></stop><stop stopColor="rgba(78.823, 157.468, 150.795, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,70L34.3,70C68.6,70,137,70,206,71.7C274.3,73,343,77,411,75C480,73,549,67,617,63.3C685.7,60,754,60,823,51.7C891.4,43,960,27,1029,31.7C1097.1,37,1166,63,1234,76.7C1302.9,90,1371,90,1440,78.3C1508.6,67,1577,43,1646,41.7C1714.3,40,1783,60,1851,60C1920,60,1989,40,2057,31.7C2125.7,23,2194,27,2263,30C2331.4,33,2400,37,2469,35C2537.1,33,2606,27,2674,25C2742.9,23,2811,27,2880,30C2948.6,33,3017,37,3086,40C3154.3,43,3223,47,3291,46.7C3360,47,3429,43,3497,36.7C3565.7,30,3634,20,3703,13.3C3771.4,7,3840,3,3909,6.7C3977.1,10,4046,20,4114,31.7C4182.9,43,4251,57,4320,66.7C4388.6,77,4457,83,4526,86.7C4594.3,90,4663,90,4731,81.7C4800,73,4869,57,4903,48.3L4937.1,40L4937.1,100L4902.9,100C4868.6,100,4800,100,4731,100C4662.9,100,4594,100,4526,100C4457.1,100,4389,100,4320,100C4251.4,100,4183,100,4114,100C4045.7,100,3977,100,3909,100C3840,100,3771,100,3703,100C3634.3,100,3566,100,3497,100C3428.6,100,3360,100,3291,100C3222.9,100,3154,100,3086,100C3017.1,100,2949,100,2880,100C2811.4,100,2743,100,2674,100C2605.7,100,2537,100,2469,100C2400,100,2331,100,2263,100C2194.3,100,2126,100,2057,100C1988.6,100,1920,100,1851,100C1782.9,100,1714,100,1646,100C1577.1,100,1509,100,1440,100C1371.4,100,1303,100,1234,100C1165.7,100,1097,100,1029,100C960,100,891,100,823,100C754.3,100,686,100,617,100C548.6,100,480,100,411,100C342.9,100,274,100,206,100C137.1,100,69,100,34,100L0,100Z"></path></svg>
            <section className="what-do-we-do my-5">
                <div className="container bg-navyBlue py-5  rounded-4">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h1 className="intro-sub-head">
                                <span>
                                WHAT WE DO
                                </span>
                            </h1>
                        </div>
                        <div className="col-12">
                            <h1 className="fs-1">We help you to elevate your Real Estate Business using Podio</h1>

                        </div>
                    </div>
                    <div className="row justify-content-center mx-lg-5 mx-2 gx-lg-3 gy-lg-3 gx-2 gy-2">
                        <div className="col-lg-5 col-md-5 d-flex  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div className="bg-white shadowEff p-4 rounded-3">
                                <div className="icon"><img src={cusstomization} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Customization</span>
                                </h6>
                                <p className="fs-5 mt-3">Modeling your business processes to manage sales channels effectively.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="bg-white shadowEff p-4 rounded-3">
                                <div className="icon"><img src={integration} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Integration</span>
                                </h6>
                                <p className="fs-5  mt-3"> Customize and integrate with the best business 3rd party
                                    applications. </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            <div className="bg-white shadowEff p-4 rounded-3">
                                <div className="icon"><img src={automation} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Automation</span>
                                </h6>
                                <p className="fs-5  mt-3">Make your business automated end to end through our services.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <div className="bg-white shadowEff p-4 rounded-3">
                                <div className="icon"><img src={analysis} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Analysis</span></h6>
                                <p className="fs-5  mt-3">Analytics help you monitor every aspect of your sales cycle and plan targets in the
                                    future.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="why-choose-us mb-5">
                <div className="container py-5  border">
                    <div className="row gx-lg-5 gx-sm-2">
                        <div className="col-lg-6 col-md-12 col-12 my-auto mx-auto" >
                            <div className="mb-4 mb-md-4 mb-lg-0">
                                <h1 className="intro-sub-head">
                                    <span>GET STARTED IN MINUTES</span>
                                </h1>
                                <h1 className="mb-4 fs-1">3 main Reasons to choose us.</h1>

                                <div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne" aria-expanded="true"
                                                    aria-controls="flush-collapseOne">
                                                    <span className="fs-5 fw-bold">High Skilled Developers</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body fs-5">We are backed up with a team of experienced and
                                                    certified Podio developers who help clients get powerful solutions to boost
                                                    their business productivity.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                    aria-controls="flush-collapseTwo">
                                                    <span className="fs-5 fw-bold">On Time Delivery</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body fs-5">Our team ensures timely delivery of the projects.
                                                    You
                                                    can get cost efficient and fast-paced custom solutions to help you achieve your
                                                    business objectives.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                    aria-controls="flush-collapseThree">
                                                    <span className="fs-5 fw-bold">Maximum ROI</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body fs-5">Our team of Podio experts delivers the best Podio
                                                    CRM
                                                    application development solutions. We ensure that our clients get the maximum
                                                    ROI with custom Podio develop services.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-12 my-auto mx-auto  ">
                            <div className="intro-img">
                                <img src={whyus} alt="" />
                            </div>
                        </div>


                    </div>

                </div>
            </section>



            <section className="ceo-say back-img mb-5">
                <div className="container py-5 ">
                    <div className="row gx-lg-5 gx-sm-2 d-flex justify-content-center ">
                        <div className="col-lg-6 col-md-12 col-12 my-auto text-center">
                            <div className="intro-img mb-4">
                                <img src={anujDev} className="img-fluid rounded-circle " alt="" />
                            </div>
                            <div className="say">
                                <img src={quote_img} alt="" />
                                <h2>REI Property Invest unleashes the real power of Podio, and automation that allow you to scale
                                    your Real Estate business quality.</h2>
                                <p className="fs-4 mt-3 ">Anuj Kumar Kannojia.</p>
                                <p className="fst-italic">CEO & Founder REI Property Invest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industry-specific-solution mb-5 ">
                <div className="container py-5">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h1 className="intro-sub-head">
                                <span>
                                Industry Specific Podio Solutions
                                </span>
                            </h1>
                        </div>
                        <div className="col-12">
                            <h1 className="fs-1">Our developers have vast experience on customizations for various domains.</h1>

                        </div>
                    </div>
                    <div className="row justify-content-center gx-lg-3 gy-lg-3 gx-2 gy-2">
                        <div className="col-lg-6 col-md-12 d-flex  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" >
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-center"><img
                                    src={realEstateCRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Real Estate CRM</h4>
                                        <p className="fs-5">Enables businesses to manage and build stronger relationships with our
                                            contacts, such as leads, prospects and existing customers. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-center"><img src={retailCRM}
                                    alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Retail CRM</h4>
                                        <p className="fs-5">Organizes all your business's customers and leads so that you can easily stay in touch
                                            with them in a trackable way. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-center"><img
                                    src={manufactureringCRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Manufacturing CRM</h4>
                                        <p className="fs-5">Helping manufacturers cut the time required to develop a product or service. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-center"><img
                                    src={field_serviceCRM} alt="icon"
                                    className="icon" />
                                    <div className="text ps-3">
                                        <h4>Field Service Managment CRM</h4>
                                        <p className="fs-5">Helps contact center managers keep operations running smoothly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-center"><img
                                    src={travel_hos_CRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Travel & Hospitality CRM</h4>
                                        <p className="fs-5">Build personalized workflows with automation and manage customer's journeys efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-center"><img
                                    src={solarCRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Solar CRM</h4>
                                        <p className="fs-5">Helps you keep track of the contacts and projects in your sales pipeline.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="front-integration bg-deepNavyBlue text-white mb-5">
                <div className="container py-5">
                    <div className="row gx-lg-5 gx-sm-2">
                        <div className="col-lg-6 col-md-12 col-12 my-auto">
                            <div className="mb-4 mb-md-4 mb-lg-0">
                                <h1 className="intro-sub-head"><span>
                                40+ Integrations</span></h1>
                                <h1 className="mb-4 fs-1">Integrate Podio with the software you use every day</h1>
                                <Link to='/our-integration-services' target="blank" className="btn btn-orange me-2 mb-2 col-lg-6 col-md-12 col-12">Check all our
                                    integrations</Link>

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

            <section className="front-services mb-5">
                <div className="container py-5  ">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h1 className="intro-sub-head">
                                <span>
                                SERVICES
                                </span>
                            </h1>
                        </div>
                        <div className="col-12">
                            <h1 className="fs-1">We help you to drive growth at your business</h1>

                        </div>
                    </div>
                    <div className="row gx-lg-5 gx-sm-2">
                        <div className="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2 my-auto" >
                            <div className="mt-4 mt-md-4 mt-lg-0">
                                <img src={enhanceIcon} className="services-icon " width="70" alt="" />
                                <h4 className="mt-3">Enhance and Expand Your Business Processes </h4>
                                <p className="mt-3 fs-5">Our experienced Podio Certified consultants specialise in customised Podio consulting, integration, and implementation for a wide variety of industries, ensuring that your CRM strategy is designed and executed professionally, cost-effectively, and with minimal disruption to your business.</p>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1 my-auto mx-auto  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            <div className="services-img">
                                <img src={enhance_expand} className="rounded-4 " alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="separated my-5">
                        <img src={underline_black} alt="" />
                    </div>
                    <div className="row gx-lg-5 gx-sm-2">
                        <div className="col-lg-5 col-md-12 col-12 order-lg-2 order-md-2 order-2 my-auto">
                            <div className="mt-4 mt-md-4 mt-lg-0">
                                <img src={customize_icon} className="services-icon" width="70" alt="" />
                                <h4 className="mt-3">Customize, Optimize and Fine-Tune Your Podio</h4>
                                <p className="mt-3 fs-5">We know that off-the-shelf Citrix Podio cannot satisfy your unique business needs and is not able to give the desired outcome. It has to be customized. Upon understanding your business needs, we customise and provide Podio solutions at affordable prices. We guarantee operational efficiency and automation in your business.</p>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12 order-lg-1 order-md-1 order-1 my-auto mx-auto  " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <div className="services-img">
                                <img src={customize} className="rounded-4" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <svg id="wave" style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(74, 0, 224, 1)" offset="0%"></stop><stop stopColor="rgba(74, 0, 224, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,10L48,15C96,20,192,30,288,38.3C384,47,480,53,576,46.7C672,40,768,20,864,16.7C960,13,1056,27,1152,35C1248,43,1344,47,1440,53.3C1536,60,1632,70,1728,75C1824,80,1920,80,2016,81.7C2112,83,2208,87,2304,80C2400,73,2496,57,2592,41.7C2688,27,2784,13,2880,21.7C2976,30,3072,60,3168,61.7C3264,63,3360,37,3456,31.7C3552,27,3648,43,3744,41.7C3840,40,3936,20,4032,11.7C4128,3,4224,7,4320,11.7C4416,17,4512,23,4608,30C4704,37,4800,43,4896,38.3C4992,33,5088,17,5184,11.7C5280,7,5376,13,5472,15C5568,17,5664,13,5760,21.7C5856,30,5952,50,6048,55C6144,60,6240,50,6336,45C6432,40,6528,40,6624,36.7C6720,33,6816,27,6864,23.3L6912,20L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path></svg>
            <section className="testimonials bg-deepNavyBlue mb-5">
                <div className="container py-5">
                    <div className="row gx-lg-5 gx-sm-2">
                        <div className="col-lg-5 col-md-12 col-12 order-lg-2  my-auto  text-white" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
                            <div className="mb-4 mb-md-4 mb-lg-0">
                                <img src={quote_img} alt="" width={100} />
                                <h1 className="intro-sub-head mt-3"><span>
                                50+ Happy Clients</span></h1>
                                <h1 className="fs-1">What’s
                                    Our Client Say
                                    About Us</h1>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12  order-lg-1 my-auto my-auto mx-auto right-content ">

                            <marquee direction="up" scrollamount={3} height="300px" loop>
                                <div className="row justify-content-center mx-lg-5 mx-2 gx-lg-3 gy-lg-3 gx-2 gy-2">
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Edward</h5>

                                            <p className="text">Anuj completed the job on time and delivered what we asked for.
                                                He actually did additional work from the initial job description and made sure
                                                we were completely satisfied. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex  ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">

                                            <h5 className="title fw-bold my-2">Shad Nojumi</h5>
                                            <p className="text">"Exceptionally excellent job loading my list in the CRM. I will
                                                hire him again for the automation. Particularly good responsive person and
                                                always available to respond to the customer." </p>      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Jorge</h5>
                                            <p className="text">Anuj is very communicative, he had great ideas that saved me
                                                money and made the automations less complex, and he worked very quickly and was
                                                quite proactive. </p> </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Steve</h5>

                                            <p className="text">Anuj did what he promised in Klipfolio which was
                                                technically
                                                quite hard. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Michael</h5>
                                            <p className="text">Anuj has great ideas... and is great to work with. Has a great
                                                sense of business processes and how to implement these with Podio. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Jorge</h5>
                                            <p className="text"> "Hire Anuj for any Podio-related development. He is
                                                knowledgeable, kind and does his work efficiently. I will 1000% hire him again!
                                                Thank you Anuj. Until next time." </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Tina</h5>
                                            <p className="text">Great communication and completed the work with very little
                                                direction, fast turnaround. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Mike Theisen </h5>
                                            <p className="text">Anuj did an excellent job and completed the job fast and
                                                efficiently while also walking me through his process working with podio. Will
                                                definitely recommend . </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 d-flex ">
                                        <div className="bg-white p-4 rounded-3 apps-card fs-5">
                                            <h5 className="title fw-bold my-2">Gal Shani </h5>
                                            <p className="text">Nice job, thanks for adding the Real Estate app for Podio. </p>
                                        </div>
                                    </div>

                                </div>
                            </marquee>                        </div>

                    </div>

                </div>
            </section>

            <CookieConsent
                location="bottom"
                buttonText="I Accept"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#164969" }}
                buttonStyle={{  background: "#eb5e2a", color: "#fff"}}
                expires={150}
            >
                By using our site, you acknowledge that you have read, understand and agree our <a href="/terms-and-privacy" target="blank">Terms & Privacy.</a> 
            </CookieConsent>
        </>
    );
}

export default Home;