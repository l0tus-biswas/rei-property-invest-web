import "./Pricing.css"
import { useEffect } from "react"

function Pricing() {
    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    }
    return (
        <>
            <ScrollToTopOnMount />
            <section className="pricing-intro mb-5">
                <div className="container py-5 ">
                    <div className="row gx-lg-5 gx-sm-2 d-flex justify-content-center ">
                        <div className="col-lg-7 col-md-10 col-12 my-auto text-center" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
                            <div className="say">
                                <h1>Ultimate Podio CRM Suite For Real Estate</h1>
                                <p className="fs-4 mt-3">Quick installation & Free customization based upon your business</p>
                                <button type="button" className="btn btn-orange me-2 mb-2 col-lg-5 col-md-7  col-10 disabled">One
                                    Time
                                    Investment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>

            </section>


            <section className="pricing-cards">
                <div className="container py-5">
                    <div className="row justify-content-center my-3">
                        <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-md-5 mb-5">
                            <div className="pr-table-wrapper basic-pricing">
                                <div className="upper-sec">
                                    <p className="fs-3 fw-bold text-uppercase">Basic</p>
                                    <p className="fs-1 fw-bold">$500</p>
                                    <p className="fs-5 text-muted ">Billed Per Agent</p>
                                </div>
                                <div className="lower-sec">
                                    <ul className="pr-feature">
                                    <li>SMS on Comments for instant messaging to your Leads/Buyers</li>
                                        <li>Email on Comments for instant messaging to your Leads/Buyers</li>
                                        <li>SMS log app for your all Inbound SMS and reference to Leads/Buyers
                                            app</li>
                                        <li>Call logs app for your all Inbound/Outbound Calls and reference to
                                            Leads/Buyers app</li>
                                        <li>Email Logs for your Inbound/Outbound Emails</li>
                                        <li>Notes Logs for all the notes you make are keep intact</li>
                                        <li>Feeds app and Communication Logs to display all the
                                            Communications(Inbound &amp; Outbound)</li>
                                        <li>Third party integrations for SMS and Calls</li>
                                    </ul>
                                </div>
                                <div>
                                    <a href=" https://podio.com/webforms/27516595/2138771" target="blank" className="btn btn-outline-orange-tdark col-8 mb-3">Choose Plan</a>
                                    <p className="fw-bold"> With free 24 * 7 assistance for 2 months</p>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-md-5 mb-5">
                            <div className="pr-table-wrapper premium-pricing">
                                <div className="upper-sec">
                                    <p className="fs-3 fw-bold text-uppercase">Premium</p>
                                    <p className="fs-1 fw-bold">$750</p>
                                    <p className="fs-5 text-muted ">Billed Per Agent</p>
                                </div>
                                <div className="lower-sec">
                                    <ul className="pr-feature">
                                    <li>SMS on Comments for instant messaging to your Leads/Buyers</li>
                                        <li>Email on Comments for instant messaging to your Leads/Buyers</li>
                                        <li>SMS log app for your all Inbound SMS and reference to Leads/Buyers
                                            app</li>
                                        <li>Call logs app for your all Inbound/Outbound Calls and reference to
                                            Leads/Buyers app</li>
                                        <li>Email Logs for your Inbound/Outbound Emails</li>
                                        <li>Notes Logs for all the notes you make are keep intact</li>
                                        <li>Feeds app and Communication Logs to display all the
                                            Communications(Inbound &amp; Outbound)</li>
                                        <li id="premium">Third party integrations for SMS, Calls and RVM</li>
                                        <li id="premium">Drip Campaigns for Emails and Texts</li>
                                        <li id="premium">Street and Aerial View of the property</li>
                                        <li id="premium">KPIs for tracking different sources</li>

                                    </ul>
                                </div>
                                <div>
                                    <a href=" https://podio.com/webforms/27516595/2138771" target="blank" className="btn btn-outline-orange-tdark col-8 mb-3">Choose Plan</a>

                                    <p className="fw-bold"> With free 24 * 7 assistance for 4 months</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="pr-table-wrapper advanced-pricing">
                                <div className="upper-sec">
                                    <p className="fs-3 fw-bold text-uppercase">Advanced</p>
                                    <p className="fs-1 fw-bold">$1000</p>
                                    <p className="fs-5 text-muted ">Billed Per Agent</p>
                                </div>
                                <div className="lower-sec">
                                    <ul className="pr-feature">
                                        <li>SMS on Comments for instant messaging to your Leads/Buyers</li>
                                        <li>Email on Comments for instant messaging to your Leads/Buyers</li>
                                        <li>SMS log app for your all Inbound SMS and reference to Leads/Buyers
                                            app</li>
                                        <li>Call logs app for your all Inbound/Outbound Calls and reference to
                                            Leads/Buyers app</li>
                                        <li>Email Logs for your Inbound/Outbound Emails</li>
                                        <li>Notes Logs for all the notes you make are keep intact</li>
                                        <li>Feeds app and Communication Logs to display all the
                                            Communications(Inbound &amp; Outbound)</li>

                                        <li >Third party integrations for SMS, Calls and RVM</li>
                                        <li >Drip Campaigns for Emails and Texts</li>
                                        <li >Street and Aerial View of the property</li>
                                        <li >KPIs for tracking different sources</li>
                                        <li id="advanced">Follow Up Sequences to follow your Leads</li>
                                        <li id="advanced">Email Blasts to send Email Marketing Campaign</li>
                                        <li id="advanced">KPI and Lead Source to track your Campaigns</li>
                                        <li id="advanced">Send reminder SMS/Email to your Lead for Appointments</li>
                                        <li id="advanced">Separate app for Cash Buyers data and Followups</li>
                                        <li id="advanced">Patlive app for your Cold Callers</li>
                                        <li id="advanced">Separate app for your Web Leads</li>

                                    </ul>
                                </div>
                                <div>
                                    <a href=" https://podio.com/webforms/27516595/2138771" target="blank" className="btn btn-outline-orange-tdark col-8 mb-3">Choose Plan</a>
                                    <p className="fw-bold"> With free 24 * 7 assistance for 6 months</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
