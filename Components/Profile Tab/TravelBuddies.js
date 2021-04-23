import React ,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar ,ScrollView, TouchableOpacity ,LogBox,Image,TextInput} from 'react-native';
import Colors from "../constants/colors"
import SvgUri from "expo-svg-uri"
import Icon from "react-native-vector-icons/FontAwesome5"
import Swiper from 'react-native-swiper'
import HomeRequestCard from "../constants/HomeRequestCard"
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const RequestsCard=()=>{
    return(
        <View  style={styles.card}>
            <View style={{width:'20%'}}>
           <Image style={{height:80,width:80}} source={require("../../assets/profilepic.png")}/>
            </View>
            <View style={{marginHorizontal:10 ,flexDirection:'column',width:'70%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                <Text style={{fontSize:16,fontFamily:'RobotoMedium',color:Colors.textColor}}>
                Shaurya
                </Text>
                <Text style={{fontSize:14,fontFamily:'Roboto',color:Colors.inactiveGray}}>
                Rating
                </Text>
                <Text style={{fontSize:14,fontFamily:'Roboto',color:Colors.inactiveGray}}>
                5.0
                </Text>
                </View>
                <TouchableOpacity style={{}}>
                <Icon name="times-circle" solid={true} size={25} color={Colors.textColor}/>
            </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",justifyContent:'flex-start',marginVertical:10}}>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.textColor,marginHorizontal:5}}>
                <Text style={{fontFamily:'Roboto' ,color:Colors.cardBg,paddingHorizontal:20,paddingVertical:5}}>Accept </Text>
            </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.red,marginHorizontal:5}}>
                <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5}}>Reject </Text>
            </TouchableOpacity>

                </View>
            </View>


        </View>
    )
}
const BuddiesCard=(props)=>{
    return(
        <View  style={styles.card}>
            <View style={{width:'20%'}}>
           <Image style={{height:80,width:80}} source={require("../../assets/profilepic.png")}/>
            </View>
            <View style={{marginHorizontal:10 ,flexDirection:'column',width:'70%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
             {props.status=="active" ?<View style={{backgroundColor:Colors.statusGreen,height:10,width:10,borderRadius:10,margin:5}}/>:null}
                <View>
                <Text style={{fontSize:16,fontFamily:'RobotoMedium',color:Colors.textColor}}>
                Shaurya
                </Text>
                <Text style={{fontSize:14,fontFamily:'Roboto',color:Colors.inactiveGray}}>
                Rating : 5.0
                </Text>

                </View>
                </View>
                <TouchableOpacity style={{}}>
                <Icon name="ellipsis-v" solid={true} size={25} color={Colors.textColor}/>
            </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",justifyContent:'flex-start',marginVertical:10}}>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.textColor,marginHorizontal:5}}>
                <Text style={{fontFamily:'Roboto' ,color:Colors.cardBg,paddingHorizontal:20,paddingVertical:5}}>View Req. </Text>
            </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.red,marginHorizontal:5}}>
                <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:20,paddingVertical:5}}>Unfriend </Text>
            </TouchableOpacity>
           {props.status=="active" ?<TouchableOpacity style={{borderWidth:1,borderRadius:50,backgroundColor:Colors.statusGreen,marginHorizontal:5}}>
                <Text style={{fontFamily:'Roboto' ,color:Colors.textColor,paddingHorizontal:15,paddingVertical:5}}>Track Ride </Text>
            </TouchableOpacity>:null}
                </View>
            </View>


        </View>
    )
}

class TravelBuddies extends Component{
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
                <View style={{width:'100%',alignSelf:'center',height:'10%'}}>
                <View style={{ width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.pop()}} style = {{alignItems:'flex-end'}}>
                        <SvgUri source={require("../../assets/navbtn.svg")} height="80" width="80" />
                    </TouchableOpacity>
                    <Text style={{alignSelf:'center',color:Colors.textColor, textAlign:'left',fontSize:36,fontFamily:'RobotoBold'}}>
                        Travel Buddies
                </Text>
                    <TouchableOpacity>
                    <Icon name="search" size={30} color={"white"} style={{padding:10,borderRadius:100,marginHorizontal:10}} />
                   </TouchableOpacity>

                </View>  


              </View>
              <View style={{height:'5%',flexDirection:'row',justifyContent:'space-around'}}>
                <Text onPress={()=>{this.changeTab()}} style={{color:this.state.index==0?'black':'white',backgroundColor:this.state.index==0?'white':'transparent',fontSize:20,borderRadius:50,textAlignVertical:'center',marginHorizontal:10,paddingHorizontal:20}}>
                    Buddies               

                </Text>
                <Text onPress={()=>{this.changeTab()}} style={{color:this.state.index==1?'black':'white',backgroundColor:this.state.index==1?'white':'transparent',fontSize:20,borderRadius:50,textAlignVertical:'center',marginHorizontal:10,paddingHorizontal:20}}>
                    Requests
                </Text>
              </View>
              <View style={{width:'95%',alignSelf:'center',height:'70%'}}>
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
                      <BuddiesCard status={"active"}/>
                      <BuddiesCard status={"active"}/>
                      <BuddiesCard status={"inactive"}/>
                      <BuddiesCard status={"inactive"}/>
                      <BuddiesCard status={"inactive"}/>
                      <BuddiesCard status={"active"}/>
                      <BuddiesCard status={"active"}/>


                </ScrollView>
                </View>
                <View style={{height:'100%',width:"90%",alignSelf:'center'}}>
                <ScrollView>
                    <RequestsCard />
                    <RequestsCard />
                    <RequestsCard />
                    <RequestsCard />
                    <RequestsCard />
                    <RequestsCard />
                    <RequestsCard />

                </ScrollView>
                </View>

            </Swiper>
              </View>
              <View style={{height:'20%'}}>
                    <TextInput 
                    placeholder="Enter Email ID of Travel Buddy"
                    placeholderTextColor="#ABB4BD"
                    style={{backgroundColor:'#2A2C36',width:'90%',alignSelf:'center',height:'30%',borderRadius:10
                ,padding:10,marginTop:10}}
                    />  
                    <TouchableOpacity style={{width:'80%',alignSelf:'center'}}>
                      <Text style={{backgroundColor:Colors.red,color:"white",fontSize:20,marginTop:10,padding:10,textAlign:'center',borderRadius:50}}>
                        Add Travel Buddy
                      </Text>
                    </TouchableOpacity>
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
        padding:10,
        marginTop:10,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    
      },
      
});

export default TravelBuddies