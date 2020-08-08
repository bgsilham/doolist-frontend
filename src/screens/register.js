  
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, Alert, ActivityIndicator}
        from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Register extends Component {
  login = () => {
    this.props.navigation.navigate('login')
  }
  render() {
    return (
      <>
        <View style={style.fill}>
          <View style={style.titleWrapper}>
            <Text style={style.title}>REGISTER</Text> 
          </View>
          <View style={style.formWrapper}>
            <Text style={style.formTitle}>Email</Text>
            <TextInput style={style.formInput} placeholder='enter your email'/>
          </View>
          <View style={style.formWrapper}>
            <Text style={style.formTitle}>Password</Text>
            <TextInput 
              style={style.formInput} 
              placeholder='enter your password' 
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={style.loginBtn} onPress={this.login}>
            <Text style={style.loginText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.registerText}>I've already have an account</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Register

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#475261',
    paddingRight: 40,
    paddingLeft: 40
  },
  titleWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 30,
    color: '#41C8F9',
    marginBottom: 30
  },
  subtitleWrapper: {
    marginTop: 30,
    marginBottom: -10
  },
  subtitle1: {
    color: '#E7E8EA',
    fontSize: 20,
  },
  subtitle2: {
    color: '#7A818A',
    fontSize: 15,
  },
  formWrapper: {
    backgroundColor: '#3E4A58',
    height: 60,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    marginTop: 20
  },
  formTitle: {
    color: '#E7E8EA',
  },
  formInput: {
    color: '#E7E8EA'
  },
  loginBtn: {
    backgroundColor: '#41C8F9',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50
  },
  loginText: {
    color: '#E7E8EA',
    fontWeight: 'bold',
    fontSize: 17
  },
  registerBtn: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#41C8F9',
    marginTop: 30
  },
  registerText: {
    color: '#41C8F9',
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 20
  },
});