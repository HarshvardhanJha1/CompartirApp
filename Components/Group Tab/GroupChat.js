import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar ,ScrollView, TouchableOpacity ,LogBox} from 'react-native';
import GroupCard from "../constants/GroupCard"

import Colors from "../constants/colors"
import SvgUri from "expo-svg-uri"
class GroupChat extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }
  
    render()
    {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="default"/>
              <TouchableOpacity onPress={()=>{this.props.navigation.pop()}} >
                  <SvgUri source={require("../../assets/navbtn.svg")} height="50" width="50" />
              </TouchableOpacity>
                <Text style={{color:'white'}}>
                    Group Chat
                </Text>
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
    }
});

export default GroupChat