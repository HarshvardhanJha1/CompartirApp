import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,FlatList } from 'react-native';
import Colors from "../constants/colors"
import PoolCard from "./PoolCard"

class SearchRequests extends Component{
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

export default SearchRequests