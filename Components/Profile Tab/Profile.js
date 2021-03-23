import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Profile extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        return(
            <View>
                <Text>
                    Profile
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile