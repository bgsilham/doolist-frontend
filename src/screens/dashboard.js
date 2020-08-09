  
import React, {Component} from 'react';
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getTodo, createTodo, pushTodo} from '../redux/action/todo'
import {logout} from '../redux/action/auth'
import {Text, View, FlatList, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, Alert, ActivityIndicator}
        from 'react-native';
const URL = 'http://54.144.221.209:8100/'
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.auth.dataLogin.id,
      note: '',
      search: '',
      token: this.props.auth.token
    }
  }
  detail = (note, created_at, id) => {
    this.props.navigation.navigate('detail', {_note: note, _created_at: created_at, _id:id})
  }
  fetchTodo = () => {
    const {id, search} = this.state
    
    this.props.getTodo(id, search).then(() => {
      this.setState({search: ''})
    })
  }
  postTodo = () => {
    const dataSubmit = {
      user: this.state.id,
      note: this.state.note
    }
    const token = this.state.token

    this.props.createTodo(dataSubmit, token).then(() => {
      this.setState({note: ''})
    })
  }
  signout = () => {
    this.props.logout()
  }

  componentDidMount() {
    this.io = io(`${URL}`)
    this.io.on('data', (todo) => {
      this.props.pushTodo(todo)
    })
    this.io.on('delete', (todo) => {
      this.fetchTodo()
    })
    this.io.on('update', (todo) => {
      this.fetchTodo()
    })
    this.fetchTodo()
  }
  render() {
  
    const dataTodo = this.props.todo.dataTodo ? this.props.todo.dataTodo : []

    return (
      <>
        <View style={style.fill}>
          <View style={style.headerWrapper}>
            <Text style={style.headerText}>Doolist</Text>
            <TouchableOpacity style={style.logoutBtn} onPress={this.signout}>
              <Text style={style.logoutText}>logout</Text>
            </TouchableOpacity>
          </View>
          <View style={style.searchWrapper}>
            <TextInput 
              style={style.searchInput} 
              placeholder='search task' 
              value={this.state.search}
              onChangeText={(e) => {this.setState({search: e})}}
            />
            <TouchableOpacity style={style.searchBtn} onPress={this.fetchTodo}>
              <Text style={style.logoutText}>search</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataTodo}
            style={style.flatlist}
            renderItem={({item}) => (
              <TouchableOpacity style={style.todoWrapper} onPress={() => this.detail(item.note, item.created_at, item.id)}>
                <Todos
                  note={item.note}
                  created_at={item.created_at}
                />
              </TouchableOpacity>
            )}
          />
          <View style={style.addTodoWrapper}>
            <TextInput 
              style={style.addTodoInput} 
              placeholder='add task' 
              onChangeText={(e) => {this.setState({note: e})}}
              value={this.state.note}
            />
            <TouchableOpacity style={style.addTodoBtn} onPress={this.postTodo}>
              <Text style={style.logoutText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

class Todos extends Component {
  render(){
    return(
      <>
        <Text style={style.todoTitle}>{this.props.note}</Text>
        <Text style={style.todoSubTitle}>Modified at {this.props.created_at}</Text>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  todo: state.todo
})
const mapDispatchToProps = {getTodo, createTodo, pushTodo, logout}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#475261',
    paddingRight: 40,
    paddingLeft: 40
  },
  headerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#41C8F9'
  },
  logoutBtn: {
    width: 70,
    height: 30,
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  logoutText: {
    color: '#E7E8EA'
  },
  searchWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  searchInput: {
    width: deviceWidth-170,
    height: 40,
    backgroundColor: '#3E4A58',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#E7E8EA'
  },
  searchBtn: {
    width: 70,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#41C8F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatlist: {
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 350
  },
  todoWrapper: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#3E4A58',
    borderRadius: 5,
    justifyContent: 'space-between'
  },
  todoTitle: {
    color: '#E7E8EA',
    fontSize: 20,
    fontWeight: 'bold'
  },
  todoSubTitle: {
    color: '#E7E8EA',
    fontSize: 15,
    marginTop: 10
  },
  addTodoWrapper: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addTodoInput: {
    width: deviceWidth-170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  addTodoBtn: {
    width: 70,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#41C8F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
});