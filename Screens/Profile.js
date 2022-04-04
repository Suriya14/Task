import React from 'react';
import {
    View, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, Image, ImageBackground,
    TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Post from './Post';


const { width, height } = Dimensions.get('window');


const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            {/* <ScrollView style={{ padding: 0}}> */}
            <View >
                <Image
                    style={styles.coverImg}
                    source={require('../Img/cover.jpg')}
                />
                <View style={styles.profilemount}>
                    <Image
                        style={styles.profileImg}
                        source={require('../Img/panther.jpg')}
                    //   source={{uri:'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' }}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.profilename}> Profile Name </Text>
            </View>
            <View style={styles.protouch}>
                <TouchableOpacity style={styles.probtn}>
                    <Ionicons name='add-circle-outline' size={13} style={{ color: 'white' }}> Add to Story</Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.probtn1}>
                    <Ionicons name='pencil' size={13} style={{ color: 'white' }}> Edit Profile</Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.probtn2}>
                    <Ionicons name='ellipsis-horizontal' size={13} style={{ color: 'white' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='briefcase' size={24} style={{ color: '#999999', }} />
                    <Text style={styles.protxt}>Fashion & Design</Text>
                </View>
                <View style={styles.iconalign}>
                    <Ionicons name='home' size={24} style={{ color: '#999999', }} />
                    <Text style={styles.protxt}>Lives in Chennai, India</Text>
                </View>
                <View style={styles.iconalign}>
                    <Ionicons name='heart' size={24} style={{ color: '#999999', }} />
                    <Text style={styles.protxt}>Single</Text>
                </View>
                <View style={styles.iconalign}>
                    <Ionicons name='school' size={24} style={{ color: '#999999', }} />
                    <Text style={styles.protxt}>School or universiity</Text>
                </View>
                <View style={styles.iconalign}>
                    <Ionicons name='location' size={24} style={{ color: '#999999', }} />
                    <Text style={styles.protxt}>Home town</Text>
                </View>
                <View style={styles.iconalign}>
                    <Ionicons name='ellipsis-horizontal' size={24} style={{ color: '#999999', }} />
                    <Text style={styles.protxt}>See Your About Info</Text>
                </View>  
                <TouchableOpacity style={{marginTop:15,backgroundColor:'#295882',borderRadius:5}}>
                    <Text style={{alignSelf:'center',padding:6,color:'#ccdeee',fontWeight:'bold',alignSelf: 'center'}}>Edit Public Details</Text>
                </TouchableOpacity>      
                <View style={styles.horizontalLine} />      
                <Text style={styles.profriends}>Friends</Text>
                <View style={styles.horizontalLine} />      
             <View>
               <Post />  
             </View>   
                
            </View>
        </ScrollView>
        // </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#2a322a', padding: 15
    },
    coverImg: {
        height: 150, width: '100%', borderRadius: 5, // position:'absolute',
    },
    profilemount: {
        height: 150, width: 150, borderRadius: 75, position: 'absolute',
        alignSelf: 'center', marginTop: 80
    },
    profileImg: {
        height: 150, width: 150, borderRadius: 75,
    },
    profilename: {
        alignSelf: 'center', marginTop: 90, fontSize: 20, fontWeight: 'bold', color: 'white'
    },
    protouch: {
        justifyContent: "space-between", flexDirection: "row", marginTop: 10,
    },
    probtn: {
        alignItems: "center", backgroundColor: "#0693E3", alignSelf: 'center',
        padding: 12, width: '38%', borderRadius: 5
    },
    probtn1: {
        alignItems: "center", backgroundColor: "#555555", alignSelf: 'center',
        padding: 12, width: '38%', borderRadius: 5
    },
    probtn2: {
        alignItems: "center", backgroundColor: "#555555", alignSelf: 'center',
        padding: 12, width: '18%', borderRadius: 5
    },
    horizontalLine: {
        width: "100%", height: 0.5, marginTop: 10, backgroundColor: "#E0E0E0",
    },
    protxt:{ marginLeft: 10, fontSize: 18, color: 'white',alignSelf:'center' 
    },
    iconalign:{ flexDirection: 'row',marginTop: 10 
    },
    profriends:{marginTop:10,marginBottom:0,fontSize:18,color:'#ffffff',fontWeight:'bold'
    }
});
