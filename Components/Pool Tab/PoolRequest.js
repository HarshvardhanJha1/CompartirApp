import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from "../constants/colors"
import SvgUri from "expo-svg-uri";
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'text-field-rn';
class PoolRequest extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            search:false,
            groupName:'',
            date:'',
            time:'',
            pick:'',
            drop:""
        }
    }

    render()
    {
        return(
            <View style={styles.container}> 
           <StatusBar  
                barStyle = "dark"   
                /> 
                <View style={{height:"10%",flexDirection:'row',alignItems:'center'}}>
           <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
            <SvgUri width="80" height="80" source={require("../../assets/navbtn.svg")} style={{marginTop:10}}/>
            </TouchableOpacity>
            <Text style={{color:Colors.textColor,fontSize:20,fontFamily:'Roboto',alignSelf:'center',textAlign:'center'}}>
            Create Pool Request
            </Text>
            </View>
            <View style={{height:'80%',width:'95%',alignSelf:'center'}}>
            <OutlinedTextField
        label='Group Name'
        textColor={Colors.textColor}
        value={this.state.groupName}
         onChangeText={(text)=>{this.setState({groupName:text})}}   
        ref={this.fieldRef}
        tintColor={Colors.red}
        baseColor={Colors.red}	
        containerStyle={{marginTop:15}}
      />
                        <OutlinedTextField
        label='Date'
        textColor={Colors.textColor}
        value={this.state.date}
         onChangeText={(text)=>{this.setState({date:text})}}   
        ref={this.fieldRef}
        tintColor={Colors.red}
        baseColor={Colors.red}	
        containerStyle={{marginTop:15}}
      />
                  <OutlinedTextField
        label='Time'
        textColor={Colors.textColor}
        value={this.state.time}
         onChangeText={(text)=>{this.setState({time:text})}}   
        ref={this.fieldRef}
        tintColor={Colors.red}
        baseColor={Colors.red}	
        containerStyle={{marginTop:15}}
      />
                        <OutlinedTextField
        label='Pick Up'
        textColor={Colors.textColor}
        value={this.state.pick}
         onChangeText={(text)=>{this.setState({pick:text})}}   
        ref={this.fieldRef}
        tintColor={Colors.red}
        baseColor={Colors.red}	
        containerStyle={{marginTop:15}}
      />
            
            <OutlinedTextField
        label='Drop Off'
        textColor={Colors.textColor}
        value={this.state.drop}
         onChangeText={(text)=>{this.setState({drop:text})}}   
        ref={this.fieldRef}
        tintColor={Colors.red}
        baseColor={Colors.red}	
        containerStyle={{marginTop:15}}
      />
            
            </View>
            <View style={{height:"10%",justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                <Text style={{backgroundColor:Colors.red,width:'80%',alignSelf:'center',textAlign:'center',paddingVertical:10,borderRadius:20,color:Colors.textColor}}>
                    Add Request
                </Text>
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