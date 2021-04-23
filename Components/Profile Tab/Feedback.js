import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar ,ScrollView, TouchableOpacity ,LogBox,Image,TextInput} from 'react-native';
import Colors from "../constants/colors"
import SvgUri from "expo-svg-uri"
import Icon from "react-native-vector-icons/FontAwesome5"
import {Picker} from '@react-native-picker/picker';


class Feedback extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            index:0,
            selectedValue:'java'
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
                <View style={{width:'100%',alignSelf:'center',height:'10%'}}>
                <View style={{ width:'100%',flexDirection:'row',justifyContent:'flex-start',alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}} style = {{alignItems:'flex-end'}}>
                        <SvgUri source={require("../../assets/navbtn.svg")} height="80" width="80" />
                    </TouchableOpacity>
                    
                    <Text style={{alignSelf:'center',color:Colors.textColor, textAlign:'center',fontSize:36,fontFamily:'RobotoBold',width:'80%'}}>
                        Feedback
                </Text>
                </View>  
              </View>
              <View style={{width:'90%',alignSelf:'center'}}>
                <View style={{borderWidth:1,borderColor:Colors.red
                    ,borderRadius:10}}>
                <Picker
                mode="dropdown"
                    selectedValue={this.state.selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedValue:itemValue})
                    }
                    style={{height:50,color:'white',borderWidth:2,borderColor:Colors.red
                    ,borderRadius:10}}

                    >
                    <Picker.Item label="UI Bug" value="java" />
                    <Picker.Item label="Perfomance Issue" value="js" />
                    </Picker>
                </View>

                </View>
             
              <View style={{height:'40%',width:'90%',alignSelf:'center',marginTop:10}}>
               <Text style={{color:'#ABB4BD',fontSize:16}}>
               Your Feedback Here
                </Text>
                <TextInput 
                 placeholder="Your Feedback"
                 multiline={true}
                 placeholderTextColor="#ABB4BD"
                 style={{padding:10,height:'90%',backgroundColor:'#2A2C36',borderRadius:20,textAlignVertical:'top',fontSize:16,marginTop:10}}
                />
                
                </View>
                <View style={{marginTop:10,alignItems:'flex-end',width:'90%',alignSelf:'center'}}>
                <TouchableOpacity style={{width:'50%'}}>
                <Text style={{fontSize:20,backgroundColor:Colors.red,color:'white'
            ,padding:10,borderRadius:50}}><Icon name="pencil-alt" size={20} color={"white"} />{"  "} Submit Feedback</Text>
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
subContainer:{
    width:'95%',
    alignSelf:'center',
    },
    card: {

        backgroundColor: Colors.cardBg,
        borderRadius:25,
        padding:10,
        marginTop:10,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    
      },
      
});

export default Feedback