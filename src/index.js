import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      quantity: props.value
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        quantity: this.props.value
      })
    }
  }

  handleDecrement() {
    const { step, min } = this.props
    const q = Number(this.state.quantity) - step
    this.setState({
      quantity: (min !== null && q < min) ? min : q
    })
  }

  handleIncrement() {
    const { step, max } = this.props
    const q = Number(this.state.quantity) + step
    this.setState({
      quantity: (max !== null && q > max) ? max : q
    })
  }

  render() {
    const {
      onChange, pattern, type,
      maxLength, minLength, disabled,
      name, required, placeholder,
      readOnly
    } = this.props
    const { quantity } = this.state
    return (
      <React.Fragment>
        <span className="react-number-input">
          <input
            className="react-number-input__input"
            name={name}
            type={type}
            value={quantity}
            onChange={onChange}
            pattern={pattern}
            maxLength={maxLength}
            minLength={minLength}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            readOnly={readOnly}
          />
          <b
            className="react-number-input__btn-increment"
            onClick={this.handleIncrement.bind(this)}
          >
            +
          </b>
          <b
            className="react-number-input__btn-decrement"
            onClick={this.handleDecrement.bind(this)}
          >
            -
          </b>
        </span>
      </React.Fragment>
    )
  }
}

NumberInput.defaultProps = {
  value: 0,
  onChange: () => {},
  pattarn: '',
  type: 'number',
  maxLength: 999,
  minLength: 0,
  disabled: false,
  name: null,
  required: false,
  placeholder: null,
  readOnly: false,
  step: 1,
  min: null,
  max: null
}

NumberInput.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  step: PropTypes.number,
  min: PropTypes.any,
  max: PropTypes.any
}

export default NumberInput;
