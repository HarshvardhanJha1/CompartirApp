import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,KeyboardAvoidingView } from 'react-native';
import Colors from "../constants/colors"
import SearchRequests from "./SearchRequests"
import PoolHome from "./PoolHome"
import PoolCard from "./PoolCard"
import Icon from "react-native-vector-icons/FontAwesome5"
class Pool extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            search:false
        }
    }

    render()
    {
        return(

            <View style={styles.container}> 
            
           <StatusBar  
                barStyle = "default"   
                /> 


            <View style={{width:'98%'}}>
            <View style={{width:'100%',height:"10%",flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:10}}>
            <View style={{height:50,flexDirection:'row',borderRadius:100,alignItems:'center',backgroundColor:Colors.cardBg,width:'85%',justifyContent:'space-around'}}>

                <Icon name="search" size={20} color={Colors.inactiveGray} />
            <TextInput 
            placeholder="Search"
            placeholderTextColor={Colors.textColor}
            style={{width:'85%',fontSize:16,color:"white",height:'80%',backgroundColor:Colors.cardBg,fontFamily:'Roboto',borderRadius:50}}/>
            </View>
            <Icon name="filter" size={30} color={Colors.inactiveGray} />

            </View>
            <View style={{backgroundColor:'red',height:'90%'}}>
                {this.state.search==false?
                <PoolHome/>
                :
                <SearchRequests />
                }
            </View>
            </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: Colors.bgColor,
    alignItems: 'center',
  },
});

export default Pool