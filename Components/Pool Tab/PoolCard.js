import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput ,TouchableOpacity} from 'react-native';
import Colors from "../constants/colors"
class PoolCard extends Component{
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
           <View style={styles.subContainer}>
            <Text style={{justifyContent:'flex-start',fontSize:15,color:Colors.textColor,marginVertical:10}}>
                {this.props.item.name}
            </Text>
           <View style={{flexDirection:'column',alignItems:'flex-start',borderTopColor:Colors.inactiveGray,borderTopWidth:1,width:'100%',}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                <Text style={styles.fieldName}>
                Date:
                </Text>
                <Text style={styles.fieldText}>
                {this.props.item.date}
                </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                <Text style={styles.fieldName}>
                Pickup:
                </Text>
                <Text style={styles.fieldText}>
                {this.props.item.pickup}
                </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                <Text style={styles.fieldName}>
                Drop off:
                </Text>
                <Text style={styles.fieldText}>
                {this.props.item.drop}
                </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <Text style={styles.fieldName}>
                Members:
                </Text>
                <Text style={styles.fieldText}>
                {this.props.item.members}
                </Text>
                </View>
                <View style={{width:'100%',alignItems:'center'}}>
                    <TouchableOpacity style={{alignItems:'center',margin:10}}>
                    <Text style={{paddingHorizontal:20,paddingVertical:5,borderRadius:20,color:Colors.textColor,backgroundColor:Colors.red,}}>
                    Request
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    width:'50%',
    marginVertical:10,
    alignItems: 'center',

  },
  subContainer: {
    width:'90%',
    backgroundColor: Colors.cardBg,
    alignItems: 'center',
    borderRadius:10,
    

  },
  fieldName:{
    color:Colors.inactiveGray,
    marginHorizontal:5,
    marginVertical:3
  },
  fieldText:{
    color:Colors.textColor,
    marginHorizontal:5,
    marginVertical:3,
    flexWrap:"wrap",

  }
});

export default PoolCard