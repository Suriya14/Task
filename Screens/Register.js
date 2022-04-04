import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions,SafeAreaView } from 'react-native';
import Profile from './Profile';
import Login from './Login';

const { width, height } = Dimensions.get('window');

const Register = ({ navigation }) => {
    const [nameAbt, setName] = useState("");
    const [mobnoAbt, setMobno] = useState("");
    const [emailAbt, setEmail] = useState("");
    const [WorkAbt, setWork] = useState("");
    const [passwordAbt, setPassword] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    };
    const mobnoHandler = (event) => {
        setMobno(event.target.value);
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    const workHandler = (event) => {
        setWork(event.target.value);
    };
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const profileData = {
            name: nameAbt,
            mobno: mobnoAbt,
            email: emailAbt,
            Work: WorkAbt,
            password: passwordAbt,
        }
        // setName("");
        // setMobno("");
        // setEmail("");
        // setWork("");
        // setPassword("");
        // props.getProfiledata(profileData)
    }
    return (
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.inputField}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={nameHandler}
                />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Mobile No"
                    placeholderTextColor="#003f5c"
                    onChangeText={mobnoHandler}
                />
            </View>   
            <View style={styles.inputField}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={emailHandler}
                />
            </View> 
            <View style={styles.inputField}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Work"
                    placeholderTextColor="#003f5c"
                    onChangeText={workHandler}
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
                    <Text  style={styles.logintxt} >Register</Text>
                </TouchableOpacity> 
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.newacc}  >Have an account? Login</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>     
        
    )
}

export default Register;


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

