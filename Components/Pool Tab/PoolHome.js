import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,FlatList } from 'react-native';
import Colors from "../constants/colors"
import PoolCard from "./PoolCard"
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
class PoolHome extends Component{
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
      <FlatList
        data={this.props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      numColumns={2}
        contentContainerStyle={{}}
      />

            </View>
        )
    }

}
const renderItem = ({ item }) => (
    <PoolCard item={item} />
  );

const styles = StyleSheet.create({
  container: {

    backgroundColor: Colors.bgColor,
    alignItems: 'center',
  },
});

export default PoolHome