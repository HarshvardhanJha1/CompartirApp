import React ,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Colors from "../constants/colors"

class GroupCard extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            color:null
        }
        
    }
    
    componentDidMount()
    {
        //LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        var colorFlag = this.props.tripStatus
        if(colorFlag=="completed"){
            this.setState({color:Colors.statusGreen})
        }
        else if(colorFlag == "ongoing"){
            this.setState({color:Colors.statusYellow})
        }
        else
        {
            this.setState({color:Colors.statusBlue})
        }
    }
    render()
    {
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:16}}>
                        {this.props.Place}
                    </Text>
                    <Text style={{margin:10,fontFamily:'Roboto',color:Colors.inactiveGray,fontSize:14}}>
                    {this.props.tripDate}
                    </Text>

                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Trip Number : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                    {this.props.tripNumber}
                    </Text>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Members : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                        {this.props.memberCount}
                    </Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Total Fare : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                    {this.props.tripFare}
                    </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,borderColor:Colors.textColor,marginHorizontal:5}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5,}}>Chat </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{borderWidth:1,borderRadius:50,borderColor:Colors.red,marginHorizontal:5}}>
                    <Text style={{fontFamily:'Roboto' ,color:Colors.red,paddingHorizontal:20,paddingVertical:5}}>Cancel </Text>
                </TouchableOpacity> */}
                </View>
                
                <Text style={{fontFamily:'Roboto' ,color:this.state.color,paddingHorizontal:10,paddingVertical:5}}>{this.props.statusInfo}</Text>

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

  }
  
});

export default GroupCard