import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar ,ScrollView, TouchableOpacity ,LogBox} from 'react-native';
import Colors from "../constants/colors"
import SvgUri from "expo-svg-uri"
import Icon from "react-native-vector-icons/FontAwesome5"
import Swiper from 'react-native-swiper'

const RideHistoryCard=(props)=>{
    return(
        <View style={styles.card}>
            <View style={{width:'90%',alignSelf:'center'}}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:25}}>
                Ride #1234
            </Text>
            <Text style={{margin:10,fontFamily:'Roboto',color:Colors.inactiveGray,fontSize:18}}>
            23-3-2021
            </Text>

        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={{margin:5,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:18}}>
                Total Amount : 
            </Text>
            <Text style={{margin:5,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:18}}>
            115 INR
            </Text>

        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{flexDirection:'row'}}>
            <Text style={{margin:5,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:18}}>
            From : 
            </Text>
            <Text style={{margin:5,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:18}}>
                Secundarabad
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>
           {props.status=="completed"?
           
           <Text style={{margin:5,fontFamily:"Roboto",color:Colors.statusGreen,fontSize:18}}>
                Completed
            </Text>:
                       <Text style={{margin:5,fontFamily:"Roboto",color:Colors.red,fontSize:18}}>
                       Cancelled
                   </Text>
            }
            </View>

        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={{margin:5,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:18}}>
                To : 
            </Text>
            <Text style={{margin:5,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:18}}>
            Thumkunta
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{margin:5,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:18}}>
                Group Size : 
            </Text>
            <Text style={{margin:5,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:18}}>
                3
            </Text>
            </View>
        <View style={{flexDirection:'row',marginBottom:10,justifyContent:'flex-end'}}>
      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
        <TouchableOpacity onPress={()=>{props.navigation.push("RidePage",{status:props.status})}} style={{borderWidth:1,borderRadius:50,borderColor:Colors.textColor,marginHorizontal:5}}>
            <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5,fontSize:18}}>Details </Text>
        </TouchableOpacity>

        </View>

        </View>
        </View>
    </View>
    )
}

class RideHistory extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            index:0
        }
    }
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }
    onIndexChange=(index)=>{
        this.setState({index:index})
    }
    changeTab=()=>{
        if(this.state.index==0)
        {
            this.swiper.scrollBy(1)
        }
        else{
            this.swiper.scrollBy(-1)
        }

    }
    render()
    {
        return(
            <View style={styles.container}>        

                <StatusBar barStyle="default"/>
                <View style={{width:'100%',alignSelf:'center',height:'15%'}}>
                <View style={{ width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}} style = {{alignItems:'flex-end'}}>
                        <SvgUri source={require("../../assets/navbtn.svg")} height="80" width="80" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name="filter" size={30} color={"white"} style={{backgroundColor:Colors.red,padding:10,borderRadius:100,marginHorizontal:10}} />
                   </TouchableOpacity>

                </View>  
                <Text style={{width:"80%",alignSelf:'center',color:Colors.textColor, textAlign:'left',fontSize:36,fontFamily:'RobotoBold'}}>
                        Ride History
                </Text>

              </View>
              <View style={{height:'5%',flexDirection:'row',justifyContent:'space-around'}}>
                <Text onPress={()=>{this.changeTab()}} style={{color:this.state.index==0?'black':'white',backgroundColor:this.state.index==0?'white':'transparent',fontSize:20,borderRadius:50,textAlignVertical:'center',marginHorizontal:10,paddingHorizontal:20}}>
                    Completed               

                </Text>
                <Text onPress={()=>{this.changeTab()}} style={{color:this.state.index==1?'black':'white',backgroundColor:this.state.index==1?'white':'transparent',fontSize:20,borderRadius:50,textAlignVertical:'center',marginHorizontal:10,paddingHorizontal:20}}>
                    Cancelled
                </Text>
              </View>
              <View style={{width:'95%',alignSelf:'center',height:'80%'}}>
                    <Swiper
                     ref={(ref) => {
                        this.swiper = ref
                      }}
                    index={0}
                    onIndexChanged={(index)=>{this.onIndexChange(index)}}
                    style={{height:'100%'}}
                    showsPagination={false}>
                <View style={{height:'100%',width:"90%",alignSelf:'center'}}>
                <ScrollView>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"completed"} navigation={this.props.navigation}/>


                </ScrollView>
                </View>
                <View style={{height:'100%',width:"90%",alignSelf:'center'}}>
                <ScrollView>
                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>
                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>

                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>

                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>

                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>

                <RideHistoryCard status={"cancelled"} navigation={this.props.navigation}/>


                </ScrollView>
                </View>

            </Swiper>
              </View>
              
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
    },
    card: {

        backgroundColor: Colors.cardBg,
        borderRadius:25,
        padding:5,
        marginVertical:10
        
      },
      
});

export default RideHistory