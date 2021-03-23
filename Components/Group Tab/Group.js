import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Group extends Component{
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
                    Group
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

export default Group