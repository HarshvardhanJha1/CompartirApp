import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from "../constants/colors"
class PoolRequest extends Component{
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
            <Text style={{color:'white'}}>
            Pool PoolRequest
            </Text>
            <View style={{flexDirection:'row',marginBottom:10,justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{borderWidth:1,borderRadius:50,borderColor:Colors.textColor}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5}}>Chat </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,borderColor:Colors.red}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.red,paddingHorizontal:20,paddingVertical:5}}>Cancel </Text>
                </TouchableOpacity>


                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: Colors.bgColor,
    justifyContent:'flex-start',
    flexDirection:'column'

  },
});

export default PoolRequest