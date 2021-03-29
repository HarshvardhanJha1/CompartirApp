import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,KeyboardAvoidingView } from 'react-native';
import Colors from "../constants/colors"
import SearchRequests from "./SearchRequests"
import PoolHome from "./PoolHome"
import PoolCard from "./PoolCard"
import ActionButton from 'react-native-action-button';
import Icon from "react-native-vector-icons/FontAwesome5"

const DATA = [
    {
      id: '1',
      name:'Shaurya',
      date:"12/03/2021",
      pickup:"BITS Pilani",
      drop:'Airport',
      members:'3'
    },
    {
      id: '2',
      name:'Depak',
      date:"13/03/2021",
      pickup:"Airport",
      drop:'BITS',
      members:'2'
    },    
    {
      id: '3',
      name:'Sanath',
      date:"12/03/2021",
      pickup:"BITS Pilani",
      drop:'Golconda',
      members:'1'
    },    
    {
      id: '4',
      name:'John',
      date:"14/03/2021",
      pickup:"BITS Pilani",
      drop:'Secundar',
      members:'3'
    },    
    {
      id: '5',
      name:'Lorem',
      date:"15/03/2021",
      pickup:"BITS Pilani",
      drop:'Theater',
      members:'3'
    },
  ];
class Pool extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            search:false,
            data:DATA,
            final:DATA,
            searchText:''
        }
    }
    handleText=async (text)=>{
       await this.setState({searchText:text})
     var arr= this.state.data
      arr=arr.filter((item)=>{
            if(item.name.substring(0,text.length)==text)
            {
                return item
            }
        })
    await    this.setState({final:arr})
    }
    render()
    {
        return(

            <View style={styles.container}> 
            
           <StatusBar  
                barStyle = "dark"   
                /> 


            <View style={{width:'98%'}}>
            <View style={{width:'100%',height:"10%",flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:10}}>
            <View style={{height:50,flexDirection:'row',borderRadius:100,alignItems:'center',backgroundColor:Colors.cardBg,width:'85%',justifyContent:'space-around'}}>

                <Icon name="search" size={20} color={Colors.inactiveGray} />

            <TextInput 
            placeholder="Search"
            onChangeText={this.handleText}
            value={this.state.searchText}
            placeholderTextColor={Colors.textColor}
            style={{width:'85%',fontSize:16,color:"white",height:'80%',backgroundColor:Colors.cardBg,fontFamily:'Roboto',borderRadius:50}}/>
            </View>
            <Icon name="filter" size={30} color={Colors.inactiveGray} />

            </View>
            <View style={{height:'86%'}}>
                <PoolHome data={this.state.final}/>

            </View>
            </View>
            <ActionButton
           onPress={()=>{this.props.navigation.push("PoolRequest")}} 
                renderIcon={()=>{return <Icon name="plus" solid={true} size={20} color={Colors.red}/> }}
                buttonColor={Colors.tabBg}/>
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