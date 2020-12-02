import React from 'react'

const diameterCircle = 21

export class Circle extends React.Component {
    state = {
        transformX: 0
    }

    offset = 0

    componentDidMount() {
        const brightStrip = document.getElementById('brightStrip').getBoundingClientRect()

        this.offset = brightStrip.x
        this.setState({
            transformX:
                Math.round(
                    brightStrip.right -
                    brightStrip.x)
        })

    }

    mouseDownHandler = () => {
        document.body.style.userSelect = 'none'
        window.addEventListener('mousemove', this.mouseMoveHandler)
        window.addEventListener('mouseup', this.mouseUpHandler)
    }

    mouseMoveHandler = e => {

        const cursorX = e.clientX - this.offset
        const sliderRangeWithoutCircle = this.props.widthRangeSlider - diameterCircle
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

        this.setState({
            transformX: circleX
        })

        this.props.setWidthBrightStripFragmentInPercent(circleX / (sliderRangeWithoutCircle / 100))

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
                    style: {
                        transform: `translate(${this.state.transformX + diameterCircle / 2}px,
                                ${this.props.marginTopStrit - diameterCircle / 2}px)`,
                        width: `${diameterCircle}px`,
                        height: `${diameterCircle}px`,
                        'border-radius': `50%`,
                        'background-color': `black`,
                    }
                }
            ))
        )
    }
}

export default Circle

