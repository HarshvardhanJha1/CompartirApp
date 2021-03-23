import React ,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import Colors from "../constants/colors"
import Icon from "react-native-vector-icons/FontAwesome5"
class HomeRequestCard extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        return(
            <View  style={styles.container}>
                <View style={{width:'30%'}}>
               <Image style={{height:80,width:80}} source={require("../../assets/profilepic.png")}/>
                </View>
                <View style={{marginHorizontal:10 ,flexDirection:'column',width:'65%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                    <Text style={{fontSize:16,fontFamily:'RobotoMedium',color:Colors.textColor}}>
                    Shaurya
                    </Text>
                    <Text style={{fontSize:14,fontFamily:'Roboto',color:Colors.inactiveGray}}>
                    Trip to Hussain Sagar
                    </Text>
                    <Text style={{fontSize:14,fontFamily:'Roboto',color:Colors.inactiveGray}}>
                    23-03-2021
                    </Text>
                    </View>
                    <TouchableOpacity style={{}}>
                    <Icon name="times-circle" solid={true} size={25} color={Colors.textColor}/>
                </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginVertical:10}}>
                    <TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.red,marginHorizontal:5}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5}}>Reject </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.textColor,marginHorizontal:5}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.cardBg,paddingHorizontal:20,paddingVertical:5}}>Accept </Text>
                </TouchableOpacity>
                    </View>
                </View>


            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: Colors.cardBg,
    borderRadius:25,
    padding:10,
    marginVertical:5,
    flexDirection:'row',
    justifyContent:"flex-start"

  },
  
});

export default HomeRequestCard