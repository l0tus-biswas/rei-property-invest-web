import "./Home.css"
import underlineOrange from "../../assets/images/home/underline-orange.svg"
import podioIntro from "../../assets/images/podio-intro.png"
import podioShape from "../../assets/images/podio-shape.png"
import globiflowShape from "../../assets/images/globiflow-shape.jpg"

function Home() {
    return (
        <>
            <section class="front-intro bg-deepNavyBlue text-white pt-5">
                <div class="container">
                    <div class="row gx-lg-5 gx-sm-2 ">
                        <div class="col-lg-6 col-md-12 col-12 order-2 order-lg-1 my-auto">
                            <div class="mt-4 mt-md-4 mt-lg-0">
                                <h1>Citrix Podio</h1>
                                <img src={underlineOrange} alt="" class="underline-head" />
                                    <h1 class="mb-4">Customization Services</h1>

                                    <p class="fs-3 mb-4">Get your CRM customization done right and maximize your Podio Investment</p>
                                    <button type="button" class="btn btn-orange me-2 mb-2 col-12">Get Started</button>
                                    <button type="button" class="btn btn-outline-orange col-12">Schedule a Meeting</button>
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-12 col-12 order-1 order-lg-2 my-auto">
                            <div class="intro-img">
                                <img src={podioIntro} class="img-fluid" alt=""/>
                                    <div class="shapes">
                                        <img src={podioShape} alt=""/>
                                            <img src={globiflowShape} alt=""/>

                                            </div>
                                    </div>
                            </div>


                        </div>
                    </div>

            </section>

        </>
    );
}

export default Home;