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



function Home() {
    return (
        <>
            <section className="front-intro bg-deepNavyBlue text-white pt-5">
                <div className="container">
                    <div className="row gx-lg-5 gx-sm-2 ">
                        <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1 my-auto">
                            <div className="mt-4 mt-md-4 mt-lg-0">
                                <h1>Citrix Podio</h1>
                                <img src={underlineOrange} alt="" className="underline-head" />
                                <h1 className="mb-4">Customization Services</h1>

                                <p className="fs-3 mb-4">Get your CRM customization done right and maximize your Podio Investment</p>
                                <a href="https://podio.com/webforms/27230732/2095872" className="btn btn-orange me-2 mb-2 col-12" target="blank"><span className="fs-5 fw-bold">Get Started</span></a>

                                <a href="https://calendly.com/meetmehere/30min?month=2022-07" className="btn btn-outline-orange col-12" target="blank"><span className=" fs-5 fw-bold">Schedule a Meeting</span></a>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order-1 order-lg-2 my-auto">
                            <div className="intro-img">
                                <img src={podioIntro} className="img-fluid" alt="" />
                                <div className="shapes">
                                    <img src={podioShape} alt="" />
                                    <img src={globiflowShape} alt="" />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
            <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 220" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(74, 0, 224, 1)" offset="0%"></stop>
                        <stop stopColor="rgba(74, 0, 224, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)"
                    d="M0,88L60,73.3C120,59,240,29,360,36.7C480,44,600,88,720,91.7C840,95,960,59,1080,44C1200,29,1320,37,1440,40.3C1560,44,1680,44,1800,66C1920,88,2040,132,2160,139.3C2280,147,2400,117,2520,95.3C2640,73,2760,59,2880,47.7C3000,37,3120,29,3240,29.3C3360,29,3480,37,3600,51.3C3720,66,3840,88,3960,102.7C4080,117,4200,125,4320,113.7C4440,103,4560,73,4680,58.7C4800,44,4920,44,5040,44C5160,44,5280,44,5400,36.7C5520,29,5640,15,5760,36.7C5880,59,6000,117,6120,139.3C6240,161,6360,147,6480,146.7C6600,147,6720,161,6840,161.3C6960,161,7080,147,7200,139.3C7320,132,7440,132,7560,117.3C7680,103,7800,73,7920,62.3C8040,51,8160,59,8280,55C8400,51,8520,37,8580,29.3L8640,22L8640,220L8580,220C8520,220,8400,220,8280,220C8160,220,8040,220,7920,220C7800,220,7680,220,7560,220C7440,220,7320,220,7200,220C7080,220,6960,220,6840,220C6720,220,6600,220,6480,220C6360,220,6240,220,6120,220C6000,220,5880,220,5760,220C5640,220,5520,220,5400,220C5280,220,5160,220,5040,220C4920,220,4800,220,4680,220C4560,220,4440,220,4320,220C4200,220,4080,220,3960,220C3840,220,3720,220,3600,220C3480,220,3360,220,3240,220C3120,220,3000,220,2880,220C2760,220,2640,220,2520,220C2400,220,2280,220,2160,220C2040,220,1920,220,1800,220C1680,220,1560,220,1440,220C1320,220,1200,220,1080,220C960,220,840,220,720,220C600,220,480,220,360,220C240,220,120,220,60,220L0,220Z">
                </path>

                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(14, 14, 23, 1)" offset="0%"></stop>
                        <stop stopColor="rgba(14, 14, 23, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)"
                    d="M0,40L48,36.7C96,33,192,27,288,40C384,53,480,87,576,96.7C672,107,768,93,864,96.7C960,100,1056,120,1152,110C1248,100,1344,60,1440,36.7C1536,13,1632,7,1728,33.3C1824,60,1920,120,2016,143.3C2112,167,2208,153,2304,146.7C2400,140,2496,140,2592,116.7C2688,93,2784,47,2880,40C2976,33,3072,67,3168,90C3264,113,3360,127,3456,130C3552,133,3648,127,3744,130C3840,133,3936,147,4032,156.7C4128,167,4224,173,4320,173.3C4416,173,4512,167,4608,136.7C4704,107,4800,53,4896,36.7C4992,20,5088,40,5184,63.3C5280,87,5376,113,5472,113.3C5568,113,5664,87,5760,90C5856,93,5952,127,6048,140C6144,153,6240,147,6336,136.7C6432,127,6528,113,6624,106.7C6720,100,6816,100,6864,100L6912,100L6912,200L6864,200C6816,200,6720,200,6624,200C6528,200,6432,200,6336,200C6240,200,6144,200,6048,200C5952,200,5856,200,5760,200C5664,200,5568,200,5472,200C5376,200,5280,200,5184,200C5088,200,4992,200,4896,200C4800,200,4704,200,4608,200C4512,200,4416,200,4320,200C4224,200,4128,200,4032,200C3936,200,3840,200,3744,200C3648,200,3552,200,3456,200C3360,200,3264,200,3168,200C3072,200,2976,200,2880,200C2784,200,2688,200,2592,200C2496,200,2400,200,2304,200C2208,200,2112,200,2016,200C1920,200,1824,200,1728,200C1632,200,1536,200,1440,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z">
                </path>
            </svg>

            <section className="what-do-we-do my-5">
                <div className="container bg-navyBlue py-5  rounded-4">
                    <div className="row text-center mb-3">
                        <div className="col-12">
                            <h1 className="intro-sub-head">WHAT WE DO</h1>
                        </div>
                        <div className="col-12">
                            <h1 className="fs-1">We help you to elevate your Real Estate Business using Podio</h1>

                        </div>
                    </div>
                    <div className="row justify-content-center mx-lg-5 mx-2 gx-lg-3 gy-lg-3 gx-2 gy-2">
                        <div className="col-lg-5 col-md-5 d-flex  ">
                            <div className="bg-white p-4 rounded-3">
                                <div className="icon"><img src={cusstomization} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Customization</span>
                                </h6>
                                <p className="fs-5 mt-3">Modeling your business processes to manage sales channels effectively.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex  ">
                            <div className="bg-white p-4 rounded-3">
                                <div className="icon"><img src={integration} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Integration</span>
                                </h6>
                                <p className="fs-5  mt-3"> Customize and integrate with the best business 3rd party
                                    applications. </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex ">
                            <div className="bg-white p-4 rounded-3">
                                <div className="icon"><img src={automation} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Automation</span>
                                </h6>
                                <p className="fs-5  mt-3">Make your business automated end to end through our services.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex ">
                            <div className="bg-white p-4 rounded-3">
                                <div className="icon"><img src={analysis} alt="" className="mb-3" /></div>
                                <h6 className="fw-bold fs-5"><span>Citrix Podio Analysis</span></h6>
                                <p className="fs-5  mt-3">Analytics help you monitor every aspect of your sales cycle and plan targets in the
                                    future </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="why-choose-us mb-5">
                <div className="container py-5  border">
                    <div className="row gx-lg-5 gx-sm-2">
                        <div className="col-lg-6 col-md-12 col-12 my-auto">
                            <div className="mb-4 mb-md-4 mb-lg-0">
                                <h1 className="intro-sub-head">GET STARTED IN MINUTES</h1>
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
                                                    certified PODIO developers who help clients get powerful solutions to boost
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
                                                <div className="accordion-body fs-5">Our team of PODIO experts delivers the best Podio
                                                    CRM
                                                    application development solutions. We ensure that our clients get the maximum
                                                    ROI with custom PODIO develop services.</div>
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
                                <img src={anujDev} className="img-fluid rounded-circle" alt="" />
                            </div>
                            <div className="say">
                                <img src="https://rei-property-invest.netlify.app/assets/images/icon/26.svg" alt="" />
                                <h2>REI Property Invest unleashes the real power of Podio, and automation that allow you to scale
                                    your Real Estate business quality.</h2>
                                <p className="fs-4 mt-3">Anuj Kumar Kannojia.</p>
                                <p className="fst-italic">CEO & Founder REI Property Invest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industry-specific-solution mb-5 ">
                <div className="container py-5">
                    <div className="row text-center mb-3">
                        <div className="col-12">
                            <h1 className="intro-sub-head">Industry Specific Podio Solutions</h1>
                        </div>
                        <div className="col-12">
                            <h1 className="fs-1">Our developers have vast experience on customizations for various domains.</h1>

                        </div>
                    </div>
                    <div className="row justify-content-center mx-lg-5 mx-2 gx-lg-3 gy-lg-3 gx-2 gy-2">
                        <div className="col-lg-6 col-md-12 d-flex  ">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-start"><img
                                    src={realEstateCRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Real Estate CRM</h4>
                                        <p className="fs-5">Enables businesses to manage and build stronger relationships with our
                                            contacts, such as leads, prospects and existing customers. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex  ">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-start"><img src={retailCRM}
                                    alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Retail CRM</h4>
                                        <p className="fs-5">Organizes all your business's customers and leads so that you can easily stay in touch
                                            with them in a trackable way. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   ">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-start"><img
                                    src={manufactureringCRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Manufacturing CRM</h4>
                                        <p className="fs-5">Helping manufacturers cut the time required to develop a product or service. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   ">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-start"><img
                                    src={field_serviceCRM} alt="icon"
                                    className="icon" />
                                    <div className="text ps-3">
                                        <h4>Field Service Managment CRM</h4>
                                        <p className="fs-5">Helps contact center managers keep operations running smoothly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   ">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-start"><img
                                    src={travel_hos_CRM} alt="icon" className="icon" />
                                    <div className="text ps-3">
                                        <h4>Travel & Hospitality CRM</h4>
                                        <p className="fs-5">Build personalized workflows with automation and manage customer's journeys efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex   ">
                            <div className="bg-white p-4 borderLeft">
                                <div className="d-flex align-items-start"><img
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
                                <h1 className="intro-sub-head">40+ Integrations</h1>
                                <h1 className="mb-4 fs-1">Integrate Podio with the software you use every day</h1>
                                <a href="our-integration-services" target="blank"  className="btn btn-orange me-2 mb-2 col-lg-6 col-md-12 col-12">Check all our
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

            <section className="front-services mb-5">
                <div className="container py-5  ">
                    <div className="row text-center mb-3">
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
                                <img src={enhanceIcon} className="services-icon " width="70" alt="" />
                                <h4 className="mt-3">Enhance and Expand Your Business Processes </h4>
                                <p className="mt-3 fs-5">Our experienced Podio Certified consultants specializes in customized Podio
                                    consulting, integration and implementation to a wide variety of industries that your CRM
                                    strategy is designed and executed professionally, cost-effectively and with minimal disruption
                                    to your business.</p>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1 my-auto mx-auto  ">
                            <div className="services-img">
                                <img src={enhance_expand} className="rounded-4" alt="" />
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
                                <p className="mt-3 fs-5">We know that off-the-shelf Citrix Podio cannot suffice your unique business needs
                                    and not able to give the desired outcome, it has to be customized. Understanding your business
                                    needs, we customize and provide Podio solutions at affordable prices. We guarantee performance
                                    efficiency and automation in your business.</p>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12 order-lg-1 order-md-1 order-1 my-auto mx-auto  ">
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
                        <div className="col-lg-5 col-md-12 col-12 order-lg-2  my-auto  text-white">
                            <div className="mb-4 mb-md-4 mb-lg-0">
                                <img src="https://rei-property-invest.netlify.app/assets/images/icon/26.svg" alt="" />
                                <h1 className="intro-sub-head mt-3">50+ Happy Clients</h1>
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
        </>
    );
}

export default Home;