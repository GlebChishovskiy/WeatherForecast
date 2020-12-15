import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { observer } from "mobx-react"
import Circle from './Circle/Index'
import Weather from '../../../Store/Index'

const marginTopStrit = 0

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

const Slider = ({ widthRangeSlider, step, min, max, diameterCircle, onChange }) => {

    const [circleСoordinate, setCircleСoordinate] = useState(((Weather.temp - min) * (widthRangeSlider - diameterCircle)) / (max - min))
    useEffect(() => {
        setCircleСoordinate(((Weather.temp - min) * (widthRangeSlider - diameterCircle)) / (max - min))
    }, [Weather.temp])
    const widthBrightStrip = (circleСoordinate / ((widthRangeSlider - diameterCircle) / 100))

    const stepCount = (max - min) / step
    const colors = ['#2B2FD0', '#0448C2', '#0368CB', '#1A9BC3', '#1EA7B1', '#00BE5B', '#98D512', '#FCA800', '#FF7000', '#FF1200', '#D9024A']

    useEffect(() => {
        onChange(colors[Math.round(widthBrightStrip / 10)])
    }, [Math.round(widthBrightStrip / 10)])

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
                        {Math.round((
                            (max - min) * (widthBrightStrip / 100) + min) * 10) / 10}℃
                    </span>
                </div>
            </Circle>
            <StyledBrightStrip widthBrightStrip={widthBrightStrip} />
            <StyledPaleStrip widthBrightStrip={widthBrightStrip} />
        </Wrapper>
    )
}

export default observer(Slider)

