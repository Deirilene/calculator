import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Buttons from './src/components/Buttons'
import Display from './src/components/display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

class App extends Component {

  state = { ...initialState }

  addDigit = (n: any) => {

    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    //constante recebe o resultado da validação logica
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue

    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      //current represeta a posição do array
      values[this.state.current] = newValue
      this.setState({ values: values })
    }

  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = (operation: any) => {
    if (this.state.current === 0) {
      this.setState({ operation:operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        //eval verifica a expressão
        values[0] = eval(`${values[0]} ${operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      })

    }
  }

  render() {
    return (
      <View style={styles.sectionContainer}>

        <Display valueDisplay={this.state.displayValue} />

        <View style={styles.sectionContainerButton} >
          <Buttons label='AC' onClick={this.clearMemory} />
          <Buttons label='/' color2 onClick={this.setOperation} />
          <Buttons label='7' onClick={this.addDigit} />
          <Buttons label='8' onClick={this.addDigit} />
          <Buttons label='9' onClick={this.addDigit} />
          <Buttons label='*' color2 onClick={this.setOperation} />
          <Buttons label='4' onClick={this.addDigit} />
          <Buttons label='5' onClick={this.addDigit} />
          <Buttons label='6' onClick={this.addDigit} />
          <Buttons label='-' color2 onClick={this.setOperation} />
          <Buttons label='1' onClick={this.addDigit} />
          <Buttons label='2' onClick={this.addDigit} />
          <Buttons label='3' onClick={this.addDigit} />
          <Buttons label='+' color2 onClick={this.setOperation} />
          <Buttons label='0' onClick={this.addDigit} />
          <Buttons label='.' onClick={this.addDigit} />
          <Buttons label='=' color2 onClick={this.setOperation} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
  sectionContainerButton: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

});

export default App;
