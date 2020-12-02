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
width: ${props => props.widthBrightStripFragmentInPercent}%;
margin-top: ${marginTopStrit}px;
height: 3px;
background-color:#1400EE;
`

const StyledPaleStrip = styled.span`
width: ${props => (100 - props.widthBrightStripFragmentInPercent)}%;
margin-top: ${marginTopStrit}px;
height: 3px;
background-color: #68ABEE;
`

const Strip = ({ widthRangeSlider, step, min, max }) => {

    const [widthBrightStripFragmentInPercent, setWidthBrightStripFragmentInPercent] = useState(0)

    const stepCount = (max - min) / step

    return (
        <Wrapper widthRangeSlider={widthRangeSlider}>
            <Circle
                widthBrightStripFragmentInPercent={widthBrightStripFragmentInPercent}
                setWidthBrightStripFragmentInPercent={setWidthBrightStripFragmentInPercent}
                marginTopStrit={marginTopStrit}
                widthRangeSlider={widthRangeSlider}
                stepCount={stepCount}
                step={step}
                max={max}
                min={min}
            >
                <div>
                    <span style={StyleNumbers}>
                        {Math.round((max - min) * (widthBrightStripFragmentInPercent / 100) + min)}
                    </span>
                </div>
            </Circle>
            <StyledBrightStrip widthBrightStripFragmentInPercent={widthBrightStripFragmentInPercent} id='brightStrip'></StyledBrightStrip>
            <StyledPaleStrip widthBrightStripFragmentInPercent={widthBrightStripFragmentInPercent}></StyledPaleStrip>
        </Wrapper>
    )
}

export default Strip;

