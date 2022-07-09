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
                                <img src={podioIntro} class="img-fluid" alt="" />
                                <div class="shapes">
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
        </>
    );
}

export default Home;