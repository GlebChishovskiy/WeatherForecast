import React from 'react'

export class Circle extends React.Component {

    offset = 0

    refOnBrightStrip = React.createRef()

    componentDidMount() {
        const brightStrip = this.refOnBrightStrip.current
        this.offset = brightStrip.offsetLeft + brightStrip.clientWidth
    }

    mouseDownHandler = () => {
        document.body.style.userSelect = 'none'
        window.addEventListener('mousemove', this.mouseMoveHandler)
        window.addEventListener('mouseup', this.mouseUpHandler)
    }

    mouseMoveHandler = e => {

        const cursorX = e.clientX - this.offset
        const sliderRangeWithoutCircle = this.props.widthRangeSlider - this.props.diameterCircle
        const stepLength = sliderRangeWithoutCircle / this.props.stepCount
        const stepNumber = Math.floor(cursorX / stepLength)
        let currentStepNumber

        if (cursorX >= 0 && cursorX <= sliderRangeWithoutCircle) {
            if (cursorX - stepNumber * stepLength >= stepLength / 2) {
                currentStepNumber = stepNumber + 1
            } else {
                currentStepNumber = stepNumber
            }
        } else if (cursorX < 0) {
            currentStepNumber = 0
        } else {
            currentStepNumber = this.props.stepCount
        }

        let circleX = stepLength * currentStepNumber

        this.props.setCircleСoordinate(circleX)

    }


    mouseUpHandler = () => {
        document.body.style.userSelect = 'auto'
        window.removeEventListener('mousemove', this.mouseMoveHandler)
        window.removeEventListener('mouseup', this.mouseUpHandler)
    }

    componentWillUnmount() {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', this.mouseMoveHandler)
        window.removeEventListener('mouseup', this.mouseUpHandler)
    }

    render() {
        return (
            React.Children.only(React.cloneElement(
                this.props.children,
                {
                    onMouseDown: this.mouseDownHandler,
                    ref: this.refOnBrightStrip,
                    style: {
                        transform: `translate(${this.props.circleСoordinate + this.props.diameterCircle / 2}px,
                                ${this.props.marginTopStrit - this.props.diameterCircle / 2}px)`,
                        width: `${this.props.diameterCircle}px`,
                        height: `${this.props.diameterCircle}px`,
                        'border-radius': `50%`,
                        'background-color': `black`,
                    }
                }
            ))
        )
    }
}

export default Circle

