import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar ,ScrollView, TouchableOpactiy ,LogBox} from 'react-native';
import GroupCard from "../constants/GroupCard"
import Colors from "../constants/colors"

class Group extends Component{
    constructor(props)
    {
        super(props)
        this.state={

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
                <ScrollView style={styles.subContainer}>
                    <GroupCard navigation={this.props.navigation} tripStatus="completed" Place="Hussain Sagar" tripDate="05-12-2019" tripNumber="IW3475453455" memberCount="3" tripFare="1000Rs." statusInfo="Completed"/>
                    <GroupCard tripStatus="ongoing" Place="Hussain Sagar" tripDate="05-12-2019" tripNumber="IW3475453455" memberCount="4" tripFare="456Rs." statusInfo="In Progress"/>
                    <GroupCard tripStatus="upcoming" Place="Hussain Sagar" tripDate="05-12-2019" tripNumber="IW3475453455" memberCount="4" tripFare="NA" statusInfo="On Sunday"/>
                </ScrollView>
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
    }
});

export default Group