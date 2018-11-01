# react-mobile-number-input


## Install
```javascript
npm i edwinwong90/react-number-input
```

## API

**props**

| Name | Type | Default | Description |
|------|------|---------|-------------|
|value|Number|0|Specifies the value of an InputNumber
|type|String|number|Specifies the <input /> type
|maxLenght|Number|999|Specifies the <input /> max length
|minLenght|Number|0|Specifies the <input /> min length
|pattern|String||Specifies the <input /> pattern attribute
|name|String||Specifies the <input /> name attribute
|required|Boolean|false|Specifies the <input /> required attribute
|min|Number|null|Specifies the min value input
|max|Number|null|Specifies the max value input
|disabled|Boolean|false|Specifies the <input /> disabled attribute
|placeholder|String||Specifies the <input /> placholder attribute
|readOnly|Boolean|false|Specifies the <input /> readonly attribute
|step|Number|1|Specifies the increment and decrement value (triger by +/- button)
|style|String|{}|Specifies the <input /> style attribute
|onChange|Function||Called when value of an InputNumber changed

## Usage

```javascript
import NumberInput from 'react-number-input';
import '../node_modules/react-number-input/assets/numberInput.css'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <NumberInput
        value={this.state.num}
        onChange={() => this.setState({ num: this.state.num + 1 })}
      />
    )
  } 
}
    
```
