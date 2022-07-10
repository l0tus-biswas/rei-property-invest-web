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

function Services(){
    return(
        <>
     <section class="services-intro mb-5">
        <div class="container py-5 ">
            <div class="row gx-lg-5 gx-sm-2 justify-content-center ">
                <div class="col-lg-7 col-md-10 col-12 my-auto text-center">
                    <div class="say">
                        <h1 class="">Our Services</h1>
                        <p class="fs-4 mt-3">We are a creative company that focuses on establishing long-term relationships with customers</p>

                    </div>
                </div>
            </div>
        </div>
        <div class="bubble-one"></div>
        <div class="bubble-two"></div>
        <div class="bubble-three"></div>

    </section>


    <section class="services-integration back-img  mb-5">
        <div class="container p-5">
            <div class="row gx-lg-5 gx-sm-2">
                <div class="col-lg-6 col-md-12 col-12 my-auto">
                    <div class="mb-4 mb-md-4 mb-lg-0">
                        <h1 class="intro-sub-head">You think we integrate</h1>
                        <h1 class="mb-4 fs-1">We are the Podio Integration Experts</h1>
                        <p class="fs-5">We will customize and integrate Podio with the best business applications/system through REST
                            /SOAP based web services.</p>
                        <button type="button" class="btn btn-orange me-2 mb-2 col-lg-6 col-md-12 col-12">Check all our
                            integration</button>

                    </div>

                </div>
                <div class="col-lg-6 col-md-12 col-12 my-auto mx-auto right-img ">
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

    <section class="contact-separation  mb-5">
        <div class="container p-5">
            <div class="row gx-lg-5 gx-sm-2 d-flex justify-content-center">
                <div class="col-lg-7 col-md-12 col-12 my-auto text-center">
                    <div class="mb-4 mb-md-4 mb-lg-0">
                        <h1 class="mb-4 fs-1">Convinced to work on a new project ?</h1>
                        <button type="button" class="btn btn-outline-orange-tdark col-lg-6 col-md-12 col-12 mb-3">Choose
                            Plan</button>

                    </div>

                </div>
            </div>

        </div>
    </section>

    <section class="services-product back-img mb-5">
        <div class="container p-5  ">
            <div class="row text-center mb-3">
                <div class="col-12">
                    <h1 class="intro-sub-head">SERVICES</h1>
                </div>
                <div class="col-12">
                    <h1 class="fs-1">We help you to drive growth at your business</h1>

                </div>
            </div>
            <div class="row gx-lg-5 gx-sm-2">
                <div class="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2 my-auto">
                    <div class="mt-4 mt-md-4 mt-lg-0">
                        <h4 class="mt-3">PODIO SUITE FOR REAL ESTATE</h4>

                        <h4 class="fs-1 mt-3">Customizable 25+ Podio in built feature</h4>
                        <p class="fs-5 mt-3">The only Podio dashbaard you need to get started with your business with power
                            pack features only at <span class="fw-bold">$1500</span>. This is a one time payment with 3 months free of service on our
                            product.</p>
                    </div>

                </div>
                <div class="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1 my-auto mx-auto  ">
                    <div class="services-img">
                        <img src={crmSuit} alt="" />
                    </div>
                </div>
            </div>
            <div class="separated my-5">
                <img src={underline_black} alt=""/>
            </div>
            <div class="row gx-lg-5 gx-sm-2">
                <div class="col-lg-5 col-md-12 col-12 order-lg-2 order-md-2 order-2 my-auto">
                    <div class="mt-4 mt-md-4 mt-lg-0">
                        <h4 class="mt-3">KPI TRACKER</h4>

                        <h4 class="fs-1 mt-3">Analytical performance of your business sales</h4>
                        <p class="fs-5 mt-3">KPI Tracker available only at <span class="fw-bold">$49 /- month </span>to track all the activities of the
                            people working in your organization. To know more <a href="https://www.youtube.com/watch?v=57CkQMqwuAw&feature=youtu.be">click here.</a> </p>
                    </div>

                </div>
                <div class="col-lg-7 col-md-12 col-12 order-lg-1 order-md-1 order-1 my-auto mx-auto  ">
                    <div class="services-img">
                        <img src={kpiTracker} alt=""/>
                    </div>
                </div>
            </div>
            <div class="separated my-5">
                <img src={underline_black} alt=""/>
            </div>
            <div class="row gx-lg-5 gx-sm-2">
                <div class="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2 my-auto">
                    <div class="mt-4 mt-md-4 mt-lg-0">
                        <h4 class="mt-3">
                            BLUK SMS PLATFORM</h4>

                        <h4 class="fs-1 mt-3">Powerful and Quick delivery of SMS</h4>
                        <p class="fs-5 mt-3">You don’t need to purchase any other system when you can directly do the Bulk
                            SMS Campaigns from Podio itself only at <span class="fw-bold">$49 /- month</span>. You just need a Twilio account and an
                            Amazon EC-2 server.</p>
                    </div>

                </div>
                <div class="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1 my-auto mx-auto  ">
                    <div class="services-img">
                        <img src={smsBlast} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Services;