import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Home extends Component<Props> {
    // state = {
    //     value: 20,
    // }

    // onIncrement() {
    //     this.setState({
    //         ...this.state,
    //         value: this.state.value + 1
    //     })
    // }

    // onDecrement() {
    //     this.setState({
    //         ...this.state,
    //         value: this.state.value - 1 
    //     })
    // }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.onIncrement()} title='increment'/>
        <Text style={styles.welcome}>Count: {this.props.value}</Text>
        <Button onPress={() => this.props.onDecrement()} title='decrement'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type:'DECREMENT'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)