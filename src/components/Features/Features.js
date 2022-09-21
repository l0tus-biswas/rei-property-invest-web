import "./Features.css"

import talkBusiness from "../../assets/images/svg/talk-business.svg"
import pricePackage from "../../assets/images/svg/price-package.svg"
import deliverPodioPack from "../../assets/images/svg/deliver-podio-pack.svg"
import podioSuit from "../../assets/images/features/podio-img-suit.jpg"
import playButton from "../../assets/images/svg/play-button.svg"
import blackTick from "../../assets/images/svg/black-tick.svg"
import easyCustomization from "../../assets/images/svg/easy-customization.svg"
import fastSupport from "../../assets/images/svg/fast-support.svg"
import smsComment from "../../assets/images/podio-crm-apps/sms-comment.png"
import mailComment from "../../assets/images/podio-crm-apps/mail-comment.png"
import followupSequence from "../../assets/images/podio-crm-apps/followup-sequence.png"
import dripCampeign from "../../assets/images/podio-crm-apps/drip-campeign.png"
import streetArielView from "../../assets/images/podio-crm-apps/street-ariel-view.png"
import emailBlast from "../../assets/images/podio-crm-apps/email-blast.png"
import kpi from "../../assets/images/podio-crm-apps/kpi.png"
import setAppointment from "../../assets/images/podio-crm-apps/set-appointment.png"
import reminder from "../../assets/images/podio-crm-apps/reminder.png"
import patlive from "../../assets/images/podio-crm-apps/patlive.png"
import seperateApp from "../../assets/images/podio-crm-apps/seperate-app.png"
import smsLogs from "../../assets/images/podio-crm-apps/sms-logs.png"
import callLogs from "../../assets/images/podio-crm-apps/call-logs.png"
import emailLogs from "../../assets/images/podio-crm-apps/email-logs.png"
import noteLogs from "../../assets/images/podio-crm-apps/note-log.png"
import feedApp from "../../assets/images/podio-crm-apps/feed-app.png"
import { useEffect } from "react";


function Features(){
    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }
    return(
        <>
         <ScrollToTopOnMount />
     <section className="features-intro mb-5">
        <div className="container py-5 ">
            <div className="row gx-lg-5 gx-sm-2 d-flex justify-content-center ">
                <div className="col-lg-7 col-md-10 col-12 my-auto text-center"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
                    <div className="say">
                        <h1>Get effective solution for your business</h1>
                        <p className="fs-4 mt-3">Get all types of corporate solutions to start your adventure with REI
                            Property Invest</p>
                            <a href="/video-demos" target="blank" className="btn btn-orange me-2 mb-2 col-lg-8 col-md-7  col-11"> Watch Our Video Tutorials</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>

    </section>

    <section className="features-started-steps back-img mb-5">
        <div className="container py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className=" text-center">
                        <img src={talkBusiness} className="img-fluid" alt=""/>
                        <p className="fs-4 fw-bold my-3">Let's talk business</p>
                        <p className="fs-5">Discuss with us your Podio business requirements. We will 100% help you to run your business successfully.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 arrow-shape">
                    <div className="text-center">
                        <img src={pricePackage} className="img-fluid" alt=""/>
                        <p className="fs-4 fw-bold my-3">Choose a price package</p>
                        <p className="fs-5">Choose a price package that suits your business. The more features you make available, the more you connect with your clients. </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className=" text-center">
                        <img src={deliverPodioPack} className="img-fluid" alt=""/>
                        <p className="fs-4 fw-bold my-3">We deliver your Podio pack</p>
                        <p className="fs-5">Our Podio customization services guarantee performance, efficiency, and automation in your business.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="podio-crm-suit mb-5">
        <div className="container py-5  border">
            <div className="row gx-lg-5 gx-sm-2">
                <div className="col-lg-6 col-md-12 col-12 my-auto">
                    <div className="mb-4 mb-md-4 mb-lg-0">
                        <h1 className="intro-sub-head">Podio Suite</h1>
                        <h1 className="mb-4 fs-1">The Best Selling Real Estate CRM</h1>
                        <p className="fs-5">Unleash the full potential of the Podio by using our ultimate product. With years of experience and prowess in Podio customization, we bring you the only ready to go, fully functional and customised futuristic solution for your business.</p>
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 col-12 my-auto mx-auto "  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                 <a href="https://www.youtube.com/watch?v=MUmxK-7MKLI" target="blank"> 
                 <div className="intro-img mx-auto">
                        <img src={podioSuit}
                            className="img-fluid rounded-5" alt=""/>
                        <img src={playButton} className="play-button" alt=""/>

                    </div>

                 </a>
                   
                </div>


            </div>

        </div>
    </section>

    <section className="features-podio-crmFeatures  mb-5">
        <div className="container py-5">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-4 mb-4">
                    <div className="border  border-1 rounded-3 p-3">
                        <img src={blackTick} className="img-fluid" alt=""/>
                        <p className="fs-4 fw-bold my-2">100% Reliable</p>
                        <p className="fs-5">We have been providing cost-effective, robust, and high-performing  Podio CRM customization services since its inception.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-4 mb-4">
                    <div className="border border-1 rounded-3 p-3">
                        <img src={easyCustomization} className="img-fluid" alt=""/>
                        <p className="fs-4 fw-bold my-2">Easy Customization</p>
                        <p className="fs-5">Customize fields, layouts, reports, and integrate Podio with other apps with Citrix Podio Workflow Automation.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="border border-1 rounded-3 p-3">
                        <img src={fastSupport} className="img-fluid" alt=""/>
                        <p className="fs-4 fw-bold my-2">Fast Support</p>
                        <p className="fs-5">We are always here to understand your precise needs and act accordingly. We will guide you throughout the journey.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="podio-crm-suit-apps back-img mb-5">
        <div className="container py-5  rounded-4">
            <div className="row text-center mb-5">
                <div className="col-12">
                    <h1 className="intro-sub-head">Podio CRM Suite for Real Estate</h1>
                </div>
                <div className="col-12">
                    <h1 className="fs-1">Imagine being able to perform everything listed below with only a few clicks!</h1>
    
                </div>
            </div>
            <marquee direction="up" height="500px" loop>
                <div className="row justify-content-center mx-lg-5 mx-2 gx-lg-3 gy-lg-3 gx-2 gy-2">
                    <div className="col-lg-5 col-md-5 d-flex ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={smsComment} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>SMS on Comments</span>
                            </h6>
                            <p className="fs-5">SMS on Comments for instant messaging to your Leads/Buyers</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex  ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={mailComment} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Email on Comments</span>
                            </h6>
                            <p className="fs-5"> Email on Comments for instant messaging to your Leads/Buyers</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={followupSequence} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Followup Sequences</span></h6>
                            <p className="fs-5">Followup Sequences to follow your Leads</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={dripCampeign} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Drip Campaign</span></h6>
                            <p className="fs-5">Drip Campaigns for Emails and Texts</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={streetArielView} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Street and Aerial View</span></h6>
                            <p className="fs-5">Street and Aerial View of the property</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={emailBlast} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Email Blasts</span></h6>
                            <p className="fs-5">Email Blasts to send Email Marketing Campaign</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={kpi} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>KPI and Lead Source</span></h6>
                            <p className="fs-5">KPI and Lead Source to track your Campaigns</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={setAppointment} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Set Appointments</span></h6>
                            <p className="fs-5">Set Appointments with your Leads and get tasks made for your Lead Owners automatically</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={reminder} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Send Reminder SMS/Email</span></h6>
                            <p className="fs-5">Send reminder SMS/Email to your Lead for Appointments</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={patlive} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Patlive App</span></h6>
                            <p className="fs-5">Patlive app for your Cold Callers</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={seperateApp} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Separate App</span></h6>
                            <p className="fs-5">Separate app for your Web Leads</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={smsLogs} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>SMS Log App</span></h6>
                            <p className="fs-5">SMS log app for your all Inbound SMS and reference to Leads/Buyers app</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={callLogs} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Call Logs App</span></h6>
                            <p className="fs-5">Call logs app for your all Inbound/Outbound Calls and reference to Leads/Buyers app</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={emailLogs} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Email Logs</span></h6>
                            <p className="fs-5">Email Logs for your Inbound/Outbound Emails</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={noteLogs} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Notes Logs</span></h6>
                            <p className="fs-5">Notes Logs for all the notes you make are keep intact</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex   ">
                        <div className="bg-white p-4 rounded-3 apps-card">
                            <div className="icon"><img src={feedApp} alt=""/></div>
                            <h6 className="fw-bold my-3 fs-5"><span>Feeds App</span></h6>
                            <p className="fs-5">Feeds app and Communication Logs to display all the Communications(Inbound & Outbound)</p>
                        </div>
                    </div>
                </div>
                    
            </marquee>
            
    
        </div>
    </section>

    <section className="faq mb-5">
        <div className="container py-5 ">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-9 col-md-12 col-12 my-auto">
                    <div className="mb-4 mb-md-4 mb-lg-0">
                        <div className="text-center">
                            <h1 className="intro-sub-head">FAQ</h1>
                            <h1 className="mb-4 fs-1">Question & Answer</h1>

                        </div>

                        <div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="true"
                                            aria-controls="flush-collapseOne">
                                            <span className="fs-5 fw-bold"> What services do we need to have? </span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body fs-5">
                                            <ul type="square" className="my-3">
                                                <li>Podio Premium Account</li>
                                                <li>SMS Service like Twilio for SMS</li>
                                                <li>CallRail for Inbound/Outbound Calls</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <span className="fs-5 fw-bold">What assistance will we get from your side? </span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body fs-5">We give free maintenance as per your plan and are ready to take the future work from your side at discounted price.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                            aria-expanded="false" aria-controls="flush-collapseThree">
                                            <span className="fs-5 fw-bold">Is it a monthly or Annual Charge? </span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body fs-5">NO, Its not a monthly or Annual charge. Just take the system from us at 1 fixed price and it is yours for lifetime.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                            aria-expanded="false" aria-controls="flush-collapseFour">
                                            <span className="fs-5 fw-bold"> Can I see this system to other clients?  </span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body fs-5">NO, this system is a Copyright to us and you cannot sell it without our prior permission. But the good news is we do want you to sell it so we offer a referee programme where you get $100 for every Advanced Plan reference.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                            aria-expanded="false" aria-controls="flush-collapseFive">
                                            <span className="fs-5 fw-bold">  What is timing of the support?  </span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body fs-5">The support is 24*7 available to you. We work from IST timezone and will reply to you as soon as possible. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
    
        </>
    );
}

export default Features;