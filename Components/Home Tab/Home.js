import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar ,ScrollView, TouchableOpactiy } from 'react-native';
import ActionButton from 'react-native-action-button';
import Colors from "../constants/colors"
import UpcomingRideCard from "../constants/UpcomingRideCard"
import HomeRequestCard from "../constants/HomeRequestCard"
import Icon from "react-native-vector-icons/FontAwesome5"
import { TouchableOpacity } from 'react-native-gesture-handler';
class Home extends Component{
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
   <StatusBar  

     barStyle = "default"   
   />  
                <ScrollView style={styles.subContainer}>
                <Text style={styles.title}>
                    Upcoming Rides
                </Text>
                <UpcomingRideCard />
                <UpcomingRideCard />

                <Text style={[styles.title,{marginTop:10}]}>
                    New Cab Request
                </Text>
                <HomeRequestCard/>
                <HomeRequestCard/>

                </ScrollView>
                <ActionButton
                renderIcon={()=>{return <Icon name="plus" solid={true} size={20} color={Colors.red}/> }}
                buttonColor={Colors.tabBg}>
          <ActionButton.Item buttonColor={Colors.red} onPress={() => console.log("notes tapped!")}>
          <Icon name="bell" solid={true} size={25} color={Colors.textColor}/>

                <Text style={{color:Colors.textColor}}> SOS</Text>
              </ActionButton.Item>
              <ActionButton.Item  buttonColor={Colors.tabBg} onPress={() => console.log("notes tapped!")}>
          <TouchableOpacity onPress={()=>{this.props.navigation.push("PoolRequest")}} >
          <Text style={{color:Colors.textColor,fontSize:12,textAlign:'center'}}> Pool Request</Text>
          </TouchableOpacity>
              </ActionButton.Item>


        </ActionButton>
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
  title:{
      fontSize:30,
      fontFamily:"RobotoMedium",
      color:Colors.textColor,
      marginTop:20
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default Home