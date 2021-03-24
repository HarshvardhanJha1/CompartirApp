import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,FlatList } from 'react-native';
import Colors from "../constants/colors"

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
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
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{backgroundColor:'red',height:'100%'}}
      />

            </View>
        )
    }

}
const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: Colors.bgColor,
    alignItems: 'center',
  },
});

export default PoolHome