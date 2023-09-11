import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Buttons from './src/components/Buttons'
import Display from './src/components/display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  count:1
}

class App extends Component {

  state = { ...initialState}

  addDigit = (n: any) => {
    if (this.state.count === 1){
      this.setState({displayValue : n})
      this.state.count++
    } else {
       this.setState({ displayValue: (this.state.displayValue + n) })
    }
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
    this.setState({count : 1})
  }

  setOperation = (operation: any) => {

  }

  render() {
    return (
      <View style={styles.sectionContainer}>

        <Display valueDisplay={this.state.displayValue} />

        <View style={styles.sectionContainerButton} >
          <Buttons label='AC' onClick={this.clearMemory} />
          <Buttons label='-/+' onClick={ this.setOperation} />
          <Buttons label='%' onClick={ this.setOperation} />
          <Buttons label='/' color2 onClick={ this.setOperation} />
          <Buttons label='7' onClick={ this.addDigit} />
          <Buttons label='8' onClick={ this.addDigit} />
          <Buttons label='9' onClick={ this.addDigit} />
          <Buttons label='x' color2 onClick={ this.setOperation} />
          <Buttons label='4' onClick={ this.addDigit} />
          <Buttons label='5' onClick={ this.addDigit} />
          <Buttons label='6' onClick={ this.addDigit} />
          <Buttons label='-' color2 onClick={ this.setOperation} />
          <Buttons label='1' onClick={ this.addDigit} />
          <Buttons label='2' onClick={ this.addDigit} />
          <Buttons label='3' onClick={ this.addDigit} />
          <Buttons label='+' color2 onClick={ this.setOperation} />
          <Buttons label='0' onClick={ this.addDigit} />
          <Buttons label='.' onClick={ this.addDigit} />
          <Buttons label='=' color2 onClick={ this.setOperation} />
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
