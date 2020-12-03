import React, { useState } from 'react'
import styled from 'styled-components'
import Circle from './Circle/Circle'

const marginTopStrit = 150

const StyleNumbers = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%,0)'
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
width: ${props => props.widthRangeSlider}px;
margin: auto;
`

const StyledBrightStrip = styled.span`
width: ${props => props.widthBrightStrip}%;
margin-top: ${marginTopStrit}px;
height: 3px;
background-color:#1400EE;
`

const StyledPaleStrip = styled.span`
width: ${props => 100 - props.widthBrightStrip}%;
margin-top: ${marginTopStrit}px;
height: 3px;
background-color: #68ABEE;
`

const Slider = ({ widthRangeSlider, step, min, max, diameterCircle }) => {

    const [circleСoordinate, setCircleСoordinate] = useState(0)
    const widthBrightStrip = (circleСoordinate / ((widthRangeSlider - diameterCircle) / 100))

    const stepCount = (max - min) / step

    return (
        <Wrapper widthRangeSlider={widthRangeSlider}>
            <Circle
                diameterCircle={diameterCircle}
                circleСoordinate={circleСoordinate}
                setCircleСoordinate={setCircleСoordinate}
                marginTopStrit={marginTopStrit}
                widthRangeSlider={widthRangeSlider}
                stepCount={stepCount}
                step={step}
                max={max}
                min={min}
            >
                <div>
                    <span style={StyleNumbers}>
                        {Math.round(
                            (max - min) * (widthBrightStrip / 100) + min)}
                    </span>
                </div>
            </Circle>
            <StyledBrightStrip widthBrightStrip={widthBrightStrip} />
            <StyledPaleStrip widthBrightStrip={widthBrightStrip} />
        </Wrapper>
    )
}

export default Slider

