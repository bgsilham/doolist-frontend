  
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, Alert, ActivityIndicator}
        from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: this.props.route.params._note,
      created_at: this.props.route.params._created_at,
    }
  }
  login = () => {
    this.props.navigation.navigate('login')
  }
  render() {
    const {note, created_at} = this.state
    return (
      <>
        <View style={style.fill}>
          <Text style={style.title}>Task Detail</Text>
          <Text style={style.taskTitle}>Task :</Text>
          <TextInput 
            style={style.taskInput}
            onChangeText={(e) => {this.setState({note: e})}}
            value={note} 
            multiline
          />
          <Text style={style.taskFooter}>Last modified {created_at}</Text>
          <View style={style.btnWrapper}>
            <TouchableOpacity style={style.btnEdit}>
              <Text style={style.btnText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnDelete}>
              <Text style={style.btnText}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Detail

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#475261',
    paddingRight: 40,
    paddingLeft: 40
  },
  title: {
    alignSelf: 'center',
    color: '#41C8F9',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20
  },
  taskTitle: {
    color: '#E7E8EA',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 40
  },
  taskInput: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E7E8EA',
    borderRadius: 5
  },
  taskFooter: {
    color: '#E7E8EA',
    fontWeight: 'bold',
    marginTop: 10
  },
  btnWrapper: {
    marginTop: 30
  },
  btnEdit: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#c0ca33',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  btnDelete: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#E7E8EA',
    fontWeight: 'bold',
    letterSpacing: 1
  }
});