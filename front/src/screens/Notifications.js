import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:3, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/272195087_100448032550051_8046085808853722049_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C43vHRUrAVwAX_SMsoW&_nc_oc=AQmmO5cgRaiJP7oInKgrqBfV9GR5cNXn-IK5fWIQIUuzREd0bUP3SX1zW93I2NGJa_E&tn=MVg2-WvnpWb9nU2c&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_7k3s3pTjQhGNaeZ4V5TMyJfwRkO3c5THuNrcR-TFRGw&oe=629C4174", name:"GenZ club",         text:"Hadhra event at SMU - 4th June", attachment:"https://via.placeholder.com/100x100/FFB6C1/000000"},
        {id:2, image: "https://www.smu.tn/storage/app/uploads/public/3ad/60c/0ae/thumb__700_400_0_0_auto.png", name:"Libertad club",     text:"Basketball Tournament - 16th June", attachment:"https://via.placeholder.com/100x100/20B2AA/000000"},
        {id:4, image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/272195087_100448032550051_8046085808853722049_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C43vHRUrAVwAX_SMsoW&_nc_oc=AQmmO5cgRaiJP7oInKgrqBfV9GR5cNXn-IK5fWIQIUuzREd0bUP3SX1zW93I2NGJa_E&tn=MVg2-WvnpWb9nU2c&_nc_ht=scontent.ftun9-1.fna&oh=00_AT_7k3s3pTjQhGNaeZ4V5TMyJfwRkO3c5THuNrcR-TFRGw&oe=629C4174", name:"GenZ CLUB",         text:"Art exhibition at SMU - 10th June", attachment:"https://via.placeholder.com/100x100/FFB6C1/000000"},
        
      ]
    }
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          let attachment = <View/>;

          let mainContentStyle;
          if(Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = <Image style={styles.attachment} source={{uri:Notification.attachment}}/>
          }
          return(
            <SafeAreaView>
            <View style={styles.container}>
              <Image source={{uri:Notification.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>
                    2 hours ago
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
           </SafeAreaView>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  name:{
    fontSize:16,
    color:"#1E90FF"
  }
}); 