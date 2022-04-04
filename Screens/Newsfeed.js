import React from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const Newsfeed = ({ }) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.posalign1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.postavatar}
                            source={require('../Img/cover.jpg')}
                        />
                        <Text style={styles.postxt}>Panther updated her Bike Photo</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/ninjja.jpg')}
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
                        <Text style={styles.postxt}>Gangubai Kathiawadi Shared Post</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/ggbhai.jpg')}
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
                            source={require('../Img/panther.jpg')}
                        />
                        <Text style={styles.postxt}>Panther Shared About Education</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/edu.jpg')}
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
                            source={require('../Img/trade.jpg')}
                        />
                        <Text style={styles.postxt}>TradeCenter Shared about war</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/ukrusia.png')}
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
                            source={require('../Img/cover.jpg')}
                        />
                        <Text style={styles.postxt}>This is not good time to buy</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/trade.jpg')}
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
                            source={require('../Img/edu.jpg')}
                        />
                        <Text style={styles.postxt}>Tn Education going to next level</Text>
                    </View>
                    <View>
                        <Ionicons name='ellipsis-horizontal' size={20} style={{ color: 'white' }} />
                    </View>
                </View>
                <Image
                    style={styles.coverImg}
                    source={require('../Img/tngov.jpg')}
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
            
        </View>
    )
}

export default Newsfeed;


const styles = StyleSheet.create({

    container: {
        flex: 1, backgroundColor: '#2a322a', padding: 0, marginTop: 10
    },
   
    horizontalLine: {
        width: "100%", height: 0.5, marginTop: 10, backgroundColor: "#E0E0E0",
    },
    postavatar: {
        height: 30, width: 30, borderRadius: 75,
    },   
    posalign1: {
        flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'
    },
    postxt: {
        marginLeft: 10, fontSize: 12, color: 'white', alignSelf: 'center'
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