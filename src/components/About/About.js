import "./About.css"

import anujDev from "../../assets/images/developers/anuj.jpg"
import jobsSuccess from "../../assets/images/about/jobs-successfull.png"
import activeClients from "../../assets/images/about/active-clients.png"
import happyCustomers from "../../assets/images/about/happy-customers.png"

function About() {
    return (
        <>
         <section class="about-intro mb-5">
        <div class="container py-5 ">
            <div class="row gx-lg-5 gx-sm-2 justify-content-center ">
                <div class="col-lg-7 col-md-10 col-12 my-auto text-center">
                    <div class="say">
                        <h1>About us</h1>
                        <p class="fs-4 mt-3">Learn what define us a team and as a company</p>

                    </div>
                </div>
            </div>
        </div>
        <div class="bubble-one"></div>
        <div class="bubble-two"></div>
        <div class="bubble-three"></div>

    </section>


    <section class="about-us-info back-img  mb-5">
        <div class="container">
            <div class="row py-5">
                <div class="col-lg-5 mx-auto my-auto">
                    <h1 class="intro-sub-head">Over 50+ client</h1>
                    <h1 class="mb-4 fs-1">Best Podio Customization Services Company</h1>
                </div>
                <div class="col-lg-6 mx-auto my-auto">
                    <ul class="nav nav-pills " id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true"><span class=" fw-bold">Our Story</span></button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false"><span class=" fw-bold">Our Mission</span> </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false"><span class="fw-bold">Our Vision</span></button>
                        </li>
                    </ul>
                    <div class="tab-content mt-4" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <p class="fs-5">Our journey started way back 6 years ago when we started struggling with Podio and Podio
                                also kept the pace with the advancement in the technologies.</p>
                            <p class="fs-5">What we discovered at every milestone is to deliver the client best in class service that
                                the client never calls us back for any bug. Today we have reached with more than 80+
                                Active clients who ask for Podio customization with 250+ successful jobs done in just
                                last 2 years.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <p class="fs-5">Our mission is to provide an admirable service to our client. We take their thinking and
                                business models in deep concern and offer them solutions to achieve that.</p>

                            <p class="fs-5">We understand every customer has their own need of system and that is why we are fully
                                service provider of customized solution. After having a 6+ years of experience we
                                believe we understand your business more than you do and will do anything to level it
                                up. 😊</p>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab">
                            <p class="fs-5"><span class="fst-italic fw-bold ">“Team work makes the dream work”</span> is what we consider as our vision for the past, present
                                and future.</p>
                            <p class="fs-5">We don’t work with clients; rather we say we work with partners who continuously strive
                                to scale up their business. It’s just we who put the magic of code and automations to
                                help them achieve so.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="about-achievement mb-5 ">
        <div class="container py-5">

            <div class="row justify-content-center mx-lg-5 mx-2 gx-lg-3 gy-lg-3 gx-2 gy-2">
                <div class="col-lg-4 col-md-12  ">
                    <div class="bg-deepNavyBlue text-white p-4 borderLeft">
                        <div class="text-center"><img
                                src={jobsSuccess}
                                alt="icon" class="icon"/>
                            <div class="text pt-2">
                                <h4 class="fs-2 fw-bold">250 +</h4>
                                <p class="fs-5 fw-bold">Jobs Done Successfully</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12  ">
                    <div class="bg-deepNavyBlue text-white p-4 borderLeft">
                        <div class="text-center"><img
                                src={activeClients}
                                alt="icon" class="icon"/>
                            <div class="text pt-2">
                                <h4 class="fs-2 fw-bold">300+</h4>
                                <p class="fs-5 fw-bold">Active Podio Customization Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12   ">
                    <div class="bg-deepNavyBlue text-white p-4 borderLeft">
                        <div class="text-center"><img
                                src={happyCustomers}
                                alt="icon" class="icon"/>
                            <div class="text pt-2">
                                <h4 class="fs-2 fw-bold">50+</h4>
                                <p class="fs-5 fw-bold">On REI Property Invest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <section class="our-team back-img mb-5 ">
        <div class="container py-5">
            <div class="row text-center mb-3">
                <div class="col-12">
                    <h1 class="intro-sub-head">OUR TEAM</h1>
                </div>
                <div class="col-12">
                    <h1 class="fs-1">Meet the Magicians Who Work their magic Using these Props!</h1>

                </div>
            </div>
            <div class="row  d-flex justify-content-center">

                <div class="col-lg-3 col-md-6 ">
                    <div class="bg-white  devOuter">
                            <img src={anujDev} class="img-fluid " alt="..."/>
                            <div class="py-3 text-center">
                                <h5 class="">Anuj Kumar Kannojia</h5>
                                <p class="">CEO & Founder REI Property Invest</p>
                                <a href="#" class="linkedin" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                            </div>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
        </>
    );
}

export default About;