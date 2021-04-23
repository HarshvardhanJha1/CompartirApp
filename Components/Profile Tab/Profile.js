import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,Switch } from 'react-native';
import Colors from "../constants/colors"
import Icon from "react-native-vector-icons/FontAwesome5";

class Profile extends Component{
    constructor(props)
    {
        super(props)
        this.state={
                switch:false
        }
    }
    handleSwitch=()=>{
        this.setState({switch:!this.state.switch})
    }
    render()
    {
        return(
            <View style={styles.container}>
                {/* <View style={{height:'10%',justifyContent:'center'}}>
                    <Text style={{color:Colors.textColor, textAlign:'center',fontSize:26,fontFamily:'RobotoBold'}}>
                    Profile
                </Text></View>
                <View style ={{width:'90%',backgroundColor:'red', flexDirection:"row",justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <View style={{}}>
                    <Image style={{height:80,width:80}} source={require("../../assets/profilepic.png")}/>
                    </View>
                    <View>
                    <Text style={{color:Colors.textColor, textAlign:'center',fontSize:20,fontFamily:'RobotoBold'}}>Jane Doe</Text>
                    <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto', marginLeft: 40}}>janedoe@gmail.com</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", height:"10%",justifyContent:'space-evenly', marginVertical: 20}}>
                    <View style={{borderRadius:10, height:75, width: 90, backgroundColor:"#FFFFFF", justifyContent:"center"}}>
                        <Text>Rating</Text>
                    </View>
                    <View style={{borderRadius:10,height:75, width: 90, backgroundColor:"#9FF97F"}}>
                        
                    </View>
                    <TouchableOpacity style={{borderRadius:10,height:75, width: 90,backgroundColor:"#FF2156"}}>
                        
                    </TouchableOpacity>
                </View>
                 */}
                 <View style={{height:'10%',justifyContent:'center'}}>
                 <Text style={{color:Colors.textColor, textAlign:'center',fontSize:26,fontFamily:'RobotoBold'}}>
                    Profile
                </Text>
                </View>
                <View style={{width:'90%',justifyContent:'center',alignSelf:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                 <Image style={{height:80,width:80}} source={require("../../assets/profilepic.png")}/>
                 <View>
                    <Text style={{color:Colors.textColor, textAlign:'center',fontSize:20,fontFamily:'RobotoBold'}}>Jane Doe</Text>
                    <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto', marginLeft: 40}}>janedoe@gmail.com</Text>
                    </View>
                </View>
                </View>

                <View style={{alignItems:"center",justifyContent:'space-evenly',flexDirection:'row',marginTop:10}}>
                       
                        <View style={{width:'20%',backgroundColor:'#FFFFFF',borderRadius:10,padding:20}}>
                        <View style={{}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:26, textAlign:'center',fontFamily:'RobotoBold'}}>
                              4.5
                        </Text>
                        <Icon name="star" solid={true} size={20} color={"#F0C072"}/>
                        </View>
                        <Text style={{fontSize:16, textAlign:'center',fontFamily:'Roboto'}}>
                            Rating 
                        </Text>
                        </View>
                        </View>

                        <View style={{width:'20%',backgroundColor:"#9FF97F",borderRadius:10,padding:20}}>
                        <View style={{}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:26, textAlign:'center',fontFamily:'RobotoBold',marginHorizontal:5}}>
                            5                        
                        </Text>
                        <Icon name="chevron-right" solid={true} size={15} color={"black"}/>
                        </View>
                        <Text style={{fontSize:16, textAlign:'center',fontFamily:'Roboto'}}>
                            Pending
                        </Text>
                        </View>
                        </View>
                       
                        <TouchableOpacity style={{width:'20%',backgroundColor:'#FF2156',borderRadius:10,padding:20}}>
                        <View style={{}}>
                        <Text style={{fontSize:20, textAlign:'center',fontFamily:'RobotoBold',color:'white'}}>
                        <Icon name="bell" solid={true} size={25} color={Colors.textColor}/>  SOS
                        </Text>

                        </View>
                        </TouchableOpacity>
                </View>
            <View style={{width:'95%',alignSelf:'center'}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.push("RideHistory")}} style={{flexDirection:'row',borderBottomWidth:0,justifyContent:'space-between',alignItems:'center',padding:10,marginTop:5,borderBottomColor:Colors.inactiveGray}}>

                 <View>
                    <Text style={{color:Colors.textColor, textAlign:'left',fontSize:20,fontFamily:'RobotoBold'}}>Ride History</Text>
                    <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto'}}>View your past rides</Text>
                </View>
                     <Icon name="chevron-right" solid={true} size={20} color={"white"}/>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.push("TravelBuddies")}} style={{flexDirection:'row',borderBottomWidth:0,justifyContent:'space-between',alignItems:'center',padding:10,marginTop:5,borderBottomColor:Colors.inactiveGray}}>

                <View>
                <Text style={{color:Colors.textColor, textAlign:'left',fontSize:20,fontFamily:'RobotoBold'}}>Travel Buddies</Text>
                <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto'}}>Manage your travel buddies</Text>
                </View>
                    <Icon name="chevron-right" solid={true} size={20} color={"white"}/>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.push("Feedback")}}  style={{flexDirection:'row',borderBottomWidth:0,justifyContent:'space-between',alignItems:'center',padding:10,marginTop:5,borderBottomColor:Colors.inactiveGray}}>

                <View>
                <Text style={{color:Colors.textColor, textAlign:'left',fontSize:20,fontFamily:'RobotoBold'}}>Feedback</Text>
                <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto'}}>Let us know how we could improve the app!</Text>
                </View>
                    <Icon name="chevron-right" solid={true} size={20} color={"white"}/>

                </TouchableOpacity>
                <View style={{flexDirection:'row',borderBottomWidth:0,justifyContent:'space-between',alignItems:'center',padding:10,marginTop:5,borderBottomColor:Colors.inactiveGray}}>

                <View>
                <Text style={{color:Colors.textColor, textAlign:'left',fontSize:20,fontFamily:'RobotoBold'}}>Share Live Location</Text>
                <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto'}}>Travel Buddies can see your location</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: Colors.red }}
                    thumbColor={this.state.switch ? "white" : "white"}
                    value={this.state.switch}
                    onValueChange={this.handleSwitch}
                />

                </View>
                <View style={{flexDirection:'row',borderBottomWidth:0,justifyContent:'space-between',alignItems:'center',padding:10,marginTop:5,borderBottomColor:Colors.inactiveGray}}>

                <View>
                <Text style={{color:Colors.textColor, textAlign:'left',fontSize:20,fontFamily:'RobotoBold'}}>Settings</Text>
                <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto'}}>Manage your settings</Text>
                </View>
                    <Icon name="chevron-right" solid={true} size={20} color={"white"}/>

                </View>                
                <View style={{flexDirection:'row',borderBottomWidth:0,justifyContent:'space-between',alignItems:'center',padding:10,marginTop:5,borderBottomColor:Colors.inactiveGray}}>

                    <View>
                    <Text style={{color:Colors.textColor, textAlign:'left',fontSize:20,fontFamily:'RobotoBold'}}>Sign Out</Text>
                    <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto'}}>Sign out of the application</Text>
                    </View>
                        <Icon name="chevron-right" solid={true} size={20} color={"white"}/>

                    </View> 
             </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgColor,
        color:"white",
        height:'100%',

        },
    subContainer:{
        width:'95%',
        alignSelf:'center',
        },
  });

export default Profile