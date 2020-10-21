import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput , KeyboardAvoidingView,
   TouchableOpacity,AsyncStorage,Alert} from 'react-native';
import  firebase from '@firebase/app'
import  '@firebase/auth'
import "@firebase/firestore";
export default class Signup extends React.Component {
  state={
    username:''
  }
  componentDidMount(){
    AsyncStorage.getItem('login').then(user=>{
      if(user){
        console.log(JSON.parse(user) )
        const currentuser=JSON.parse(user) 
        this.setState({username:currentuser.name})
      }
      else{
        console.log('no user')
      }
    })
  }
  userLogout(){
    firebase.auth().signOut()
    .then(()=>{
       AsyncStorage.removeItem('login',()=>{
          console.log("deleted")
       });
      this.props.navigation.navigate("Login")
    })
  }
    render(){ 
    return (
        <View style={styles.container}>
            <Text style={{marginTop:340,alignSelf:'center'}}>Welcome to home {this.state.username}</Text>
            <TouchableOpacity onPress={()=>this.userLogout()}>
            <View style={{borderWidth:1,borderRadius:20,backgroundColor:'#ffffff'
            ,width:280,height:40,alignSelf:'center',marginTop:10}}>
                  <Text  
                  style={{color:'black',alignSelf:'center',marginTop:7,fontSize:17}}>Logout</Text>
            </View>
            </TouchableOpacity>
       </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
