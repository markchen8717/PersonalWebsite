import React from "react"
import Footer from "../components/footer"
import Container from "../components/container"
import browser_automation_image from "../images/browser.png"
import data_extraction_image from "../images/data_extraction.jpeg"
import background_image from "../images/background.png"

export default function Index() {
    return (
        <div>
            <Container background={browser_automation_image} >
                <div>
                    <h1>Browser Automation</h1>
                    <p>
                        Get your online tasks automated across major browsers such as Internet Explorer, Firefox, Chrome and Safari.
                        Tasks such as filling out forms, clicking on buttons, and downloading files can be done more efficiently and accurately!
                    </p>
                </div>
            </Container>
            <Container background={background_image} style={{ height: "80%", width: "90%"}}>
                <div style={{ maxWidth: "45%" }}>
                    <img src={data_extraction_image} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{maxWidth: "50%", textAlign: "left", fontSize: "85%", marginTop:"auto",marginBottom:"auto"}}>
                    <h1>Data Extraction</h1>
                    <p>
                        Save the time and effort that you spent on manually migrating data from one repository to another for more meaningfull tasks.
                        Custom processing filters can be easily applied through automation to complete much more complex tasks for less.     
                    </p>
                </div>
            </Container>
        </div >
    );
};