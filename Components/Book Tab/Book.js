import React ,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,ScrollView,TouchableOpacity,Image} from 'react-native';
import MapView from 'react-native-maps';
import Colors from "../constants/colors"
import  {
    ModalTitle,
    ModalContent,

    BottomModal,
    ModalPortal,
  } from 'react-native-modals';
  import Icon from "react-native-vector-icons/FontAwesome5"
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


class Book extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            modal:true,
            searchText:"",
            data:DATA,
            currElement:0,
            currTitle:"Select Group"
        }
    }
    handleText=async (text)=>{
        await this.setState({searchText:text})
      var arr= this.state.data
       arr=arr.filter((item)=>{
             if(item.name.substring(0,text.length)==text)
             {
                 return item
             }
         })
     await    this.setState({final:arr})
     }
     handleGroup=(item)=>{
        this.setState({currElement:1,currTitle:'Pickup Location'})
     }
     GroupCard=(item)=>{
        return(
            <TouchableOpacity onPress={()=>{this.handleGroup(item)}} style={{backgroundColor:Colors.tabBg,margin:5}}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:16}}>
                        Trip to Hussain Sagar
                    </Text>
                    <Text style={{margin:10,fontFamily:'Roboto',color:Colors.inactiveGray,fontSize:14}}>
                    23-3-2021
                    </Text>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <View style={{flexDirection:'row'}}>
                    <Text style={{margin:10,fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Members : 
                    </Text>
                    <Text style={{margin:10,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                        3
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    handlePickUp=(item)=>{
        this.setState({currElement:2,currTitle:'Drop Off Location'})
     }
     PickupCard=(item)=>{
        return(
            <TouchableOpacity onPress={()=>{this.handlePickUp(item)}} style={{backgroundColor:Colors.tabBg,margin:5}}>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                 <View style={{margin:10}}>
                   <Icon name="map-marker-alt" color={Colors.red} size={30}/>
                 </View>
                   <View style={{flexDirection:'column'}}>
                    <Text style={{marginTop:5,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                        Secundarabad
                    </Text>
                    <Text style={{fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Hyderabad
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    handleDropoff=(item)=>{
        this.setState({currElement:3,currTitle:'Compare Rides'})
     }
     DropoffCard=(item)=>{
        return(
            <TouchableOpacity onPress={()=>{this.handleDropoff(item)}} style={{backgroundColor:Colors.tabBg,margin:5}}>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                 <View style={{margin:10}}>
                   <Icon name="map-marker-alt" color={Colors.red} size={30}/>
                 </View>
                   <View style={{flexDirection:'column'}}>
                    <Text style={{marginTop:5,fontFamily:"RobotoMedium",color:Colors.textColor,fontSize:14}}>
                        Bits Pilani
                    </Text>
                    <Text style={{fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        Hyderabad
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    handleCompare=(item)=>{
        this.setState({currElement:3,currTitle:'Compare Rides'})
     }
     CompareCard=(item)=>{
        return(
            <View>
            <TouchableOpacity style={{marginVertical:10,backgroundColor:Colors.tabBg,padding:10,justifyContent:'space-between',flexDirection:'row',borderRadius:10}}>
            <Image style={{height:50,width:50}} source={require("../../assets/ola.png")}/>
            <View style={{flexDirection:'column'}}>
                    <Text style={{fontFamily:"RobotoBold",color:Colors.textColor,fontSize:26}}>
                    Rs. 519-550
                    </Text>
                    <Text style={{fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        ETA : 3 min
                    </Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical:10,backgroundColor:Colors.tabBg,padding:10,alignItems:'center',justifyContent:'space-between',flexDirection:'row',borderRadius:10}}>
            <Image style={{height:50,width:50}} source={require("../../assets/uber.png")}/>

            <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                    <Text style={{fontFamily:"RobotoBold",color:Colors.textColor,fontSize:26}}>
                    Rs. 501-520
                    </Text>
                    <Text style={{fontFamily:"Roboto",color:Colors.inactiveGray,fontSize:14}}>
                        ETA : 5 min
                    </Text>
                    </View>

            </TouchableOpacity>
            </View>
        )
    }
    renderItem=()=>{
        switch(this.state.currElement)
        {
            case 0:
                return(
                    <ScrollView style={{height:'80%'}}>
                 {   this.state.data.map((item,index)=>{
                        return(this.GroupCard(item))
                    })}
                    </ScrollView>
                )
            case 1:
                    return(
                        <ScrollView style={{height:'80%'}}>
                    {   this.state.data.map((item,index)=>{
                            return(this.PickupCard(item))
                        })}
                        </ScrollView>
                    )
            case 2:
                return(
                    <ScrollView style={{height:'80%'}}>
                {   this.state.data.map((item,index)=>{
                        return(this.DropoffCard(item))
                    })}
                    </ScrollView>
                )
            case 3:
                return(
                    <ScrollView style={{height:'80%'}}>
                        {this.CompareCard()}
                    </ScrollView>
                )
                
            }
    }
    render()
    {
        return(
            <View style={styles.container}>
                <View style={{height:'10%',backgroundColor:Colors.cardBg,justifyContent:'center'}}>
                    <Text style={{color:Colors.textColor,textAlign:'center',fontSize:34,fontFamily:'RobotoBold'}}>
                    Book Cab
                    </Text></View>
                <View style={{height:'90%',backgroundColor:'blue'}}>
                <View style={{height:'90%',backgroundColor:'blue'}}>
              
                <MapView
                style={{height:'100%',width:'100%'}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                      >
                         <Text>button</Text>
                </MapView>
                </View>
                <TouchableOpacity style={{height:'10%',backgroundColor:Colors.cardBg,justifyContent:'center'}}>
                    <Text onPress={()=>{this.setState({modal:true})}} 
                    style={{fontFamily:'RobotoBold',fontSize:20,color:Colors.textColor,textAlign:'center'}}>
                    {this.state.currTitle}
                    </Text>
                </TouchableOpacity>
                <ModalPortal />
                <BottomModal
          visible={this.state.modal}
          onTouchOutside={() => this.setState({ modal: false })}
                    height={400}
          onSwipeOut={() => this.setState({ modal: false })}
          modalTitle={
            <ModalTitle
              title={this.state.currTitle}
              hasTitleBar
              style={{backgroundColor:Colors.cardBg,color:Colors.textColor,borderBottomWidth:0}}
              textStyle={{color:Colors.textColor}}
            />
          }
        >
          <ModalContent
            style={{

              backgroundColor: Colors.cardBg,
            }}
          >

            <View style={{height:40,flexDirection:'row',borderRadius:100,alignItems:'center',backgroundColor:'white',justifyContent:'flex-start',paddingHorizontal:10,marginBottom:10}}>

                <Icon name="search" size={20} color={Colors.inactiveGray} />

            <TextInput 
            placeholder="Search"
            onChangeText={this.handleText}
            value={this.state.searchText}
            placeholderTextColor={Colors.inactiveGray}
            style={{fontSize:16,color:Colors.inactiveGray,height:'80%',width:'85%',backgroundColor:"white",fontFamily:'Roboto',borderRadius:50,marginLeft:5}}/>
            </View>
            {this.renderItem()}

          </ModalContent>
        </BottomModal>
                </View>





            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:Colors.bgColor
  },
});

export default Book