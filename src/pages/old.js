import React from "react"
import Footer from "../components/footer"
import Container from "../components/container"
import browser_automation_image from "../images/browser.png"
import data_extraction_image from "../images/data_extraction.jpeg"
import background_image from "../images/background.png"
import forbidden_image from "../images/forbidden.png"
import transparent_image from "../images/transparent.png"
export default function old(){
    return(
        <div>
            <Container background={transparent_image} backgroundColor={{ backgroundImage: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(0,0,0,1) 100%)" }} fullscreen={true}>
                <h2>Save money in your business by automating your business processes</h2>
                {/* <h1>by automating your business processes</h1> */}
            </Container>

            <Container background={browser_automation_image} >
                <div >
                    <h2>Browser Automation</h2>
                    <p>
                        Get your online tasks automated across major browsers such as Internet Explorer, Firefox, Chrome and Safari.
                        Tasks such as filling out forms, clicking on buttons, and downloading files can be done more efficiently and accurately!
                    </p>
                </div>
            </Container>
            <Container background={background_image} style={{ height: "80%", width: "90%" }}>
                <div style={{ maxWidth: "45%", marginTop: "auto", marginBottom: "auto" }}>
                    <Container background={data_extraction_image} style={{ width: "100%", height: "100%" }} >
                        <div data-sal="fade" data-sal-delay="500" data-sal-easing="ease-in-out-bounce">
                            <img src={forbidden_image} alt="no need for hard labor" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                    </Container>
                </div>
                <div style={{ maxWidth: "50%", textAlign: "left", fontSize: "80%", marginTop: "auto", marginBottom: "auto" }}>
                    <h2>Data Extraction</h2>
                    <p>
                        Save the time and effort that you spent on manually migrating data from one repository to another for more meaningfull tasks.
                        Custom processing filters can be easily applied through automation to complete much more complex tasks for less.
                    </p>
                </div>
            </Container>
        </div >
    );
};