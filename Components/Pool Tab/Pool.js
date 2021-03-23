import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Pool extends Component{
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
                    Pool
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

export default Pool