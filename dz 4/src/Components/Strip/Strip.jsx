import React, { useState } from 'react'
import styled from 'styled-components'
import Circle from './Circle/Circle'

const marginTopStrit = 150

const Strip = ({ widthRangeSlider }) => {

    const step = 1
    const min = -100
    const max = 200
    const stepCount = (max - min) / step

    const [widthBrightStripInPercent, setWidthBrightStripInPercent] = useState(0)
    const [widthPaleStripInPercent, setWidthPaleStripInPercent] = useState(100 - widthBrightStripInPercent)
    const [numbers, setNumbers] = useState(widthBrightStripInPercent + min)

    const StyledBrightStrip = styled.span`
    width: ${widthBrightStripInPercent}%;
    margin-top: ${marginTopStrit}px;
    height: 3px;
    background-color:#1400EE;
`

    const StyledPaleStrip = styled.span`
    width: ${widthPaleStripInPercent}%;
    margin-top: ${marginTopStrit}px;
    height: 3px;
    background-color: #68ABEE;
`

    const StyleNumbers = {
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%,0)'
    }

    return (
        <>
            <Circle setWidthBrightStripInPercent={setWidthBrightStripInPercent}
                widthBrightStripInPercent={widthBrightStripInPercent}
                setWidthPaleStripInPercent={setWidthPaleStripInPercent}
                marginTopStrit={marginTopStrit}
                widthRangeSlider={widthRangeSlider}
                setNumbers={setNumbers}
                stepCount={stepCount}
                step={step}
                max={max}
                min={min}
            >
                <div>
                    <span style={StyleNumbers}>{Math.round(numbers)}</span>
                </div>
            </Circle>
            <StyledBrightStrip id='styledBrightStrip'></StyledBrightStrip>
            <StyledPaleStrip></StyledPaleStrip>
        </>
    )
}

export default Strip;

