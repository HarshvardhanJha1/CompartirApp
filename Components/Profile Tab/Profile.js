import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from "../constants/colors"

class Profile extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={{height:'10%',justifyContent:'center'}}>
                    <Text style={{color:Colors.textColor, textAlign:'center',fontSize:26,fontFamily:'RobotoBold'}}>
                    Profile
                </Text></View>
                <View></View>
                <View style ={{display:"flex", flexDirection:"row", marginLeft: 24}}>
                    <View style={{width:'20%'}}>
                    <Image style={{height:80,width:80}} source={require("../../assets/profilepic.png")}/>
                    </View>
                    <View>
                    <Text style={{color:Colors.textColor, textAlign:'center',fontSize:20,fontFamily:'RobotoBold'}}>Jane Doe</Text>
                    <Text style={{color: "#97ADB6", textAlign:'center',fontFamily:'Roboto', marginLeft: 40}}>janedoe@gmail.com</Text>
                    </View>
                </View>
                <View style={{display:"flex",flexDirection:"row", height:"10%",justifyContent:'space-evenly', marginVertical: 20}}>
                    <View style={{borderRadius:10, height:75, width: 90, backgroundColor:"#FFFFFF", justifyContent:"center"}}>
                        <Text>Rating</Text>
                    </View>
                    <View style={{borderRadius:10,height:75, width: 90, backgroundColor:"#9FF97F"}}>
                        
                    </View>
                    <TouchableOpacity style={{borderRadius:10,height:75, width: 90,backgroundColor:"#FF2156"}}>
                        
                    </TouchableOpacity>
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
        container2: {
            backgroundColor: Colors.bgColor,
            justifyContent: 'flex-start',
            color:"white",
            height:'50%'
            },
    subContainer:{
        width:'95%',
        alignSelf:'center',
        },
  });

export default Profile