import './Select.css'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

class Select extends React.PureComponent {
  state = {
    visible: false,
  }

  ref = React.createRef()

  toggleOption = () => {
    this.setState(state => ({
      visible: !state.visible
    }))
  }

  hideOption = (e) => {
    if (!e.path.includes(this.ref.current)) {
      this.setState({
        visible: false
      })
    }
  }

  componentDidMount(){
    document.body.addEventListener('click', this.hideOption)
  }
  componentWillUnmount(){
    document.body.removeEventListener('click', this.hideOption)
  }

  render() {
    return (
      <div className="gleb_select">
        <div ref={this.ref} onClick={this.toggleOption} className="gleb_select_header">
          <span>{this.props.options.includes(this.props.value) ? this.props.value : ''}</span>
          <span className="gleb_icon"><AiFillCaretDown /></span>
        </div>
        {this.state.visible ? <div className="gleb_options">
          {
            this.props.options.map(color => (
              <div key={color} onClick={() => this.props.onChange(color)} className="gleb_option">{color}</div>
            ))
          }
        </div> : null}
      </div>
    )
  }
}

export default Select
