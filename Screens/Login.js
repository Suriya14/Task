import React, { useState }  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions,SafeAreaView } from 'react-native';
import Profile from './Profile';
import Register from './Register';

const {width, height} = Dimensions.get('window');

const Login = ({navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.inputField}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setEmail(password)}
                />
            </View>            
            <View>            
               <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('Profile')}>
                    <Text  style={styles.logintxt} >Login</Text>
                </TouchableOpacity> 
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.newacc}  >Create New Account</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default Login;


const styles = StyleSheet.create({
    container:{flex:1,flexDirection:'column',alignItems:"center",justifyContent:"center",backgroundColor:'#2a322a'},
    inputField: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        width:250,
        height: 40, 
        marginBottom: 10,
        justifyContent:'center',
        
    },
    TextInput: {
        height: 20,
        padding: 0,
        marginLeft:10,
        justifyContent:'flex-start'
    },
    loginbtn:{marginTop:40,backgroundColor:"#0693E3",borderRadius:5},
    logintxt:{padding:6,color:'#FFFFFF',fontWeight:'bold',alignSelf: 'center'},
    
   newacc: {
        marginTop:30,
        marginBottom: 30,
        color:'#FFF',
        alignSelf:'center',
        justifyContent:"center",
        
  }
});

