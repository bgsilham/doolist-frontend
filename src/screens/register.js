  
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {registerUser} from '../redux/action/auth'
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, Alert, ActivityIndicator}
        from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  register = () => {
    const dataSubmit = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.registerUser(dataSubmit).then(() => {
      this.props.navigation.navigate('login')
    }).catch(function () {
      Alert.alert('Ooops!', 'Email has been taken :(')
    })
  }
  render() {
    
    const {email, password} = this.state

    return (
      <>
        <View style={style.fill}>
          <View style={style.titleWrapper}>
            <Text style={style.title}>REGISTER</Text> 
          </View>
          <View style={style.formWrapper}>
            <Text style={style.formTitle}>Email</Text>
            <TextInput 
              style={style.formInput} 
              placeholder='enter your email'
              value={email}
              onChangeText={(e) => {this.setState({email: e})}}
            />
          </View>
          <View style={style.formWrapper}>
            <Text style={style.formTitle}>Password</Text>
            <TextInput 
              style={style.formInput} 
              placeholder='enter your password'
              value={password}
              onChangeText={(e) => {this.setState({password: e})}}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={style.loginBtn} onPress={this.register}>
            <Text style={style.loginText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
            <Text style={style.registerText}>I've already have an account</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {registerUser}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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