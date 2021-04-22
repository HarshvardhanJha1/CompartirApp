import React ,{Component} from 'react';
import { StyleSheet, Text, TextInput, View,StatusBar ,ScrollView, TouchableOpacity ,LogBox,KeyboardAvoidingView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GroupCard from "../constants/GroupCard"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Svg, Path} from 'react-native-svg';
import Colors from "../constants/colors"
import SvgUri from "expo-svg-uri"
class GroupChat extends Component{
    data=[{ message:"Tomorrow 6pm Secunderabad?", selfMessage: false},
    { message:"Ok, will wait near mess 1", selfMessage: true},
    { message:"Alright then, I’ll meet you at mess 1", selfMessage: false},]
    constructor(props)
    {
        super(props)
        this.state={
            messageText:""
        }
    }
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }
    handleText=async (text)=>{
        await this.setState({messageText:text})
     }

    render()
    {
        return(
            <View style={styles.container}>
            <StatusBar barStyle="default"/>
              <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{width:"27%"}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}} style = {{marginLeft:10}}>
                        <SvgUri source={require("../../assets/navbtn.svg")} height="50" width="50" />
                    </TouchableOpacity>
                </View>  
                <View> 
                <Text style={{color:Colors.textColor, textAlign:'center',fontSize:26,fontFamily:'RobotoBold'}}>
                        Cab Sharing Group
                </Text>
                <Text style={{color: "#97ADB6", marginLeft:1}}>
                    Pradeep, Vinod and 2 others
                </Text>
                </View>
              </View>
            <View style={{height:"87%"}}>
                <ScrollView style={styles.subContainer}>
                    {
                        this.data.map((it)=>{
                            return(
                                <View>
                                {it.selfMessage== false?(
                                <View style={[styles.item, styles.itemIn]}>    
                                <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
                                <Text style={{paddingTop: 5, color: 'white'}}>{it.message}</Text>
                                <View
                                style={[
                                    styles.arrowContainer,
                                    styles.arrowLeftContainer,
                                ]}
                                >
            
                                <Svg style={styles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.484 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                                        <Path
                                            d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                                            fill="grey"
                                            x="0"
                                            y="0"
                                        />
                                    </Svg>
                                </View>
                                </View>
                                </View>):(<View style={[styles.item, styles.itemOut]}>
                        <View style={[styles.balloon, {backgroundColor: '#EF3651'}]}>
                        <Text style={{paddingTop: 5, color: 'white'}}>Ok, will wait near mess 1</Text>
                        <View
                        style={[
                            styles.arrowContainer,
                            styles.arrowRightContainer,
                        ]}
                        >
                        <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                                <Path
                                    d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                                    fill="#EF3651"
                                    x="0"
                                    y="0"
                                />
                            </Svg>
                        </View>
                        </View>
                    </View>
                        )}
                                
                            </View>
            )
                            
                        })
                    }

                </ScrollView>

                
            </View>
            <View style={{height:40, alignItems:'center'}}>
                    <TextInput 
                    placeholder="Search"
                    onChangeText={this.handleText}
                    value={this.state.messageText}
                    placeholderTextColor={Colors.inactiveGray}
                    style={{fontSize:16, padcolor:Colors.inactiveGray, height:"100%", width:'85%',backgroundColor:"white",fontFamily:'Roboto',borderRadius:50}}/>
                </View>
            
            </View>
        )
    }

}

const styles = StyleSheet.create({
container: {
    backgroundColor: Colors.bgColor,
    justifyContent: 'flex-start',
    color:"white",
    height:'100%'
    },
subContainer:{
    width:'95%',
    alignSelf:'center',
    },
    item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: 'row'
     },
     itemIn: {
         marginLeft: 20
     },
     itemOut: {
        alignSelf: 'flex-end',
        marginRight: 20
     },
     balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
     },
     arrowContainer: {
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         zIndex: -1,
         flex: 1
     },
     arrowLeftContainer: {
         justifyContent: 'flex-end',
         alignItems: 'flex-start'
     },
 
     arrowRightContainer: {
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
     },
 
     arrowLeft: {
         left: moderateScale(-6, 0.5),
     },
 
     arrowRight: {
         right:moderateScale(-6, 0.5),
     }    });

export default GroupChat