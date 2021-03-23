import React ,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Colors from "../constants/colors"
class UpcomingRideCard extends Component{
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
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:16}}>
                        Trip to Hussain Sagar
                    </Text>
                    <Text style={{margin:10,fontFamily:'Roboto',color:Colors.inactiveGray,fontSize:14}}>
                    23-3-2021
                    </Text>

                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Trip Number : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                    IW3475453455
                    </Text>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Members : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                        3
                    </Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Total Fare : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                    NA
                    </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-around'}}>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,borderColor:Colors.textColor}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5}}>Chat </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,borderColor:Colors.red}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.red,paddingHorizontal:20,paddingVertical:5}}>Cancel </Text>
                </TouchableOpacity>

                <Text style={{fontFamily:'Roboto' ,color:Colors.statusBlue,paddingHorizontal:10,paddingVertical:5}}>On Sunday </Text>

                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: Colors.cardBg,
    borderRadius:25,
    padding:5,
    marginVertical:5

  },
  
});

export default UpcomingRideCard