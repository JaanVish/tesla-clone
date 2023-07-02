import React from 'react'
import Section from "./Section"
import styled from "styled-components"

function Home() {
  return (
    <Container>
        <Section 
            title = "Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title = "Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title = "Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title = "Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title = "Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title = "Solar Roof"
            description="Solar Roof Cost Less than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title = "Accessories"
            description="Order Online for Touchless Delivery"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`