
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Image, View, Platform, Text, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Diagnosis from './Diagnosis';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
    }

    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraStatus !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      console.log(imageUri);
      navigation.navigate("Diagnosis", {imageUrl:imageUri});
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      console.log(imageUri);
      navigation.navigate("Diagnosis", {imageUrl:imageUri});
      
    }
  };
  
  return (
    
    //Main container
    
      <View style={styles.mainContainer}>
      {/* dashboard title */}
        <View>
          <Text style={styles.title}> CARROT DOC </Text>
        </View>

      { /*Frame */ }
        <View style={styles.frame}>

      {/* frame items*/}
          <View style={styles.frameItem}>
            <Image source={require("../assets/DashbordIcons/gallery-export.png")}/>
            <Text style={styles.frameTitle}>Take a Picture/{'\n'}Upload </Text>
          </View>

          <View>
            <Image source={require("../assets/DashbordIcons/arrow-right.png")}/>
          </View>

          <View style={styles.frameItem}>
            <Image source={require("../assets/DashbordIcons/directbox-notif.png")}/>
            <Text style={styles.frameTitle}>Diagnosis & {'\n'}Get the results</Text>
          </View>

          <View>
            <Image source={require("../assets/DashbordIcons/arrow-right.png")}/>
          </View>

          <View style={styles.frameItem}>
            <Image source={require("../assets/DashbordIcons/information.png")}/>
            <Text style={styles.frameTitle}>Give the {'\n'} Precautions </Text>
          </View>

        </View>

        {/* carrot diseases section */}
        <View>
          <Text style={styles.diseaseTtile}><Text style={styles.diseaseTtile1}>Carrot</Text> <Text style={styles.diseaseTtile2}>Diseases</Text></Text>
        </View>

        <View>
          <Image source={require('../assets/DashbordIcons/carrotDiseases.png')} />   
        </View>

        { /* take/upload picture section */ }
        <View>
          <TouchableOpacity style={styles.pictureButton}><Text style={styles.pictureButtonText} onPress={takePhoto}>Take a Picture</Text></TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.pictureButton}><Text style={styles.pictureButtonText} onPress={pickImage}>Upload</Text></TouchableOpacity>
        </View>
        
      </View>


  




  );
}
const styles=StyleSheet.create({
  //mainContainer styles
  mainContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },

  //main title
  title:{
    fontWeight:600,
    fontSize:20,
    lineHeight:35,
    textAlign:'center',
    fontStyle:'normal',
    color: '#263238'
  },

//frame styles
  frame:{
    width:336,
    height:115,
    backgroundColor:"#F3D6C7",
    borderRadius:25,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:20,
  },

  frameItem:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },

  frameTitle:{
    fontSize:12,
    fontWeight:400,
    lineHeight:11.5,
    textAlign:'center',
    marginTop:10

  },

  //carrot diseases section styles
  diseaseTtile:{
    fontWeight:800,
    fontSize:20,
    lineHeight:11.5,
    paddingTop:40,
    paddingBottom:15,
  },

  diseaseTtile1:{
    color:'#A13600',
  },

  diseaseTtile2:{
    color:'#263238',
  },

  //take/upload picture buttons styles
  pictureButton:{
    width:336,
    height:48,
    backgroundColor:'#A13600',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  },

  pictureButtonText:{
    fontSize:20,
    color:'#FFFFFFFF',
    textAlign:'center',
  },

})
export default Dashboard;