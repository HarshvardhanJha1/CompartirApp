import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput } from 'react-native';
import Colors from "../constants/colors"
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

export default SearchRequests