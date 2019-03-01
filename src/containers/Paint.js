import React, {Component} from 'react';

import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image
} from 'react-native';

import {getImageList} from '../utils/fetchImage';

export class Paint extends Component {
    constructor(props){
        super(props);
        this.state = { 
          isLoading: true,
          imageUrl: 'https://images.unsplash.com/photo-1493275396257-7df0f22e0c88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQzMjI0fQ',
        }
    }

    componentDidMount(){
        
    }

    render() {
      return (
        <View style={styles.container}>
          <Image 
            style={{width: 200, height: 200}}
            source={{uri: this.state.imageUrl}}
            key={this.state.imageUrl}
          />
          <Button
            title="hi"
            // onPress={() => updateImage()}
          />
          <Text style={styles.instructions}>this is the boilerplate tester for ...</Text>
          <Text style={styles.instructions}></Text>
        </View>
      );
    }
  }

  // setImageState = (obj) => {
  //   this.setState({imageUrl : obj})
  // }

  const updateImage = () => {
    getImageList()
    .then((res) => {
      const obj = res[0].urls.full;
      console.log(obj);
      if (obj != null){
        this.setImageState(obj)
      } else {
        alert('nothing')
      }
        }
      )
    .catch((err) => {
      console.log('something went wrong');
      throw err;
    })
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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