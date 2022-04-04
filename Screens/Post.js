import React from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Newsfeed from './Newsfeed';

const { width, height } = Dimensions.get('window');

const Post = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.posttxt}>Posts</Text>
                <Text style={styles.filtertxt}>Filters</Text>
            </View>
            <View style={styles.posalign}>
                <Image
                    style={styles.postavatar}
                    source={require('../Img/cover.jpg')}
                />
                <Text style={styles.postxt}>What's on your mind?</Text>
            </View>
            <View style={{marginBottom:20}}>
            <TouchableOpacity style={styles.touchboxalign}>
                <Ionicons name='chatbox-ellipses' size={18} style={styles.touchboxicon} />
                <Text style={styles.touchboxtxt}>Manage Posts</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.borderline} />
            <View>
                <View style={styles.posalign1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.postavatar}
                            source={require('../Img/cover.jpg')}
                        />
                        <Text style={styles.postxt}>Panther updated her cover photo</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/cover.jpg')}
                />
                <View style={styles.horizontalLine} />
                <View style={styles.protouch}>
                    <TouchableOpacity style={styles.probtn}>
                        <Ionicons name='thumbs-up-outline' size={14} style={{ color: 'white' }}> Like</Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.probtn}>
                        <Ionicons name='chatbox-outline' size={14} style={{ color: 'white', alignSelf: 'center' }}> Comment</Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.probtn}>
                        <Ionicons name='arrow-redo-outline' size={14} style={{ color: 'white' }}> Share</Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={styles.borderline} />
            </View>

            <View>
                <View style={styles.posalign1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.postavatar}
                            source={require('../Img/ggbhai.jpg')}
                        />
                        <Text style={styles.postxt}>GGbhai shred a photo</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/kgf.jpg')}
                />
                <View style={styles.horizontalLine} />
                <View style={styles.protouch}>
                    <TouchableOpacity style={styles.probtn}>
                        <Ionicons name='thumbs-up-outline' size={14} style={{ color: 'white' }}> Like</Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.probtn}>
                        <Ionicons name='chatbox-outline' size={14} style={{ color: 'white', alignSelf: 'center' }}> Comment</Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.probtn}>
                        <Ionicons name='arrow-redo-outline' size={14} style={{ color: 'white' }}> Share</Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={styles.borderline} />
            </View>
            <View>
                <Newsfeed />
            </View>
        </View>
    )
}

export default Post;


const styles = StyleSheet.create({

    container: {
        flex: 1, backgroundColor: '#2a322a', padding: 0, marginTop: 10
    },
    posttxt: {
        marginTop: 10, marginBottom: 0, fontSize: 16, color: '#ffffff', fontWeight: 'bold'
    },
    filtertxt: {
        marginTop: 10, marginBottom: 0, fontSize: 16, color: "#0693E3",
    },
    horizontalLine: {
        width: "100%", height: 0.5, marginTop: 10, backgroundColor: "#E0E0E0",
    },
    postavatar: {
        height: 30, width: 30, borderRadius: 75,
    },
    posalign: {
        flexDirection: 'row', marginTop: 10,
    },
    posalign1: {
        flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'
    },
    postxt: {
        marginLeft: 10, fontSize: 12, color: 'white', alignSelf: 'center'
    },
    touchboxalign: {
        marginTop: 15, backgroundColor: "#555555", borderRadius: 5, flexDirection: 'row', justifyContent: 'center'
    },
    touchboxicon: {
        color: '#ffffff', alignSelf: 'center',
    },
    touchboxtxt: {
        padding: 6, color: '#FFFFFF', fontWeight: 'bold', alignSelf: 'center',
    },
    coverImg: {
        marginTop: 15, height: 200, width: '100%', borderRadius: 5, // position:'absolute',
    },
    protouch: {
        justifyContent: "space-around", flexDirection: "row", marginTop: 8,
    },
    probtn: {
        alignItems: "center", alignSelf: 'center',
        padding: 12, borderRadius: 5
    },
    borderline: {
        width: "100%", height: 6, marginTop: 0, backgroundColor: "#000000",
    },
})