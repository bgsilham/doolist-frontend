  
import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, Alert, ActivityIndicator}
        from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Dashboard extends Component {
  detail = (note, created_at) => {
    this.props.navigation.navigate('detail', {_note: note, _created_at: created_at})
  }
  render() {
    
  const data = [
    {
      id: 1,
      note: 'Masak mie',
      created_at: '08-08-2020 17:53'
    },
    {
      id: 2,
      note: 'Mengerjakan project',
      created_at: '08-08-2020 17:53'
    },
    {
      id: 3,
      note: 'Beli tepung di warung',
      created_at: '08-08-2020 17:53'
    },
    {
      id: 4,
      note: 'Mengerjakan project',
      created_at: '08-08-2020 17:53'
    },
    {
      id: 5,
      note: 'Beli tepung di warung',
      created_at: '08-08-2020 17:53'
    },
  ]
    return (
      <>
        <View style={style.fill}>
          <View style={style.headerWrapper}>
            <Text style={style.headerText}>Doolist</Text>
            <TouchableOpacity style={style.logoutBtn}>
              <Text style={style.logoutText}>logout</Text>
            </TouchableOpacity>
          </View>
          <View style={style.searchWrapper}>
            <TextInput style={style.searchInput} placeholder='search task' />
            <TouchableOpacity style={style.searchBtn}>
              <Text style={style.logoutText}>search</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            style={style.flatlist}
            renderItem={({item}) => (
              <TouchableOpacity style={style.todoWrapper} onPress={() => this.detail(item.note, item.created_at)}>
                <Todos
                  note={item.note}
                  created_at={item.created_at}
                />
              </TouchableOpacity>
            )}
          />
          <View style={style.addTodoWrapper}>
            <TextInput style={style.addTodoInput} placeholder='add task' />
            <TouchableOpacity style={style.addTodoBtn}>
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

export default Dashboard

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