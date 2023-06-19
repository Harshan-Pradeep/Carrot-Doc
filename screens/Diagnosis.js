import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';






const Diagnosis = () => {

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  //description object
  const description={
    Powdermildew:{
      description:"white or grayish powdery coating on the leaves, stems, and petioles.reduced yield and quality of the affected crops.",
      precaution:".Plant resistant varieties.water wisely.remove infected plant material.practice good sanitation.monitor regularly",
    },
    CavitySpotandRootDieback:{
      description:"sunken lesions.Darkened spots Cavities.Reduced carrot yield",
      precaution:".improve soil drainage.avoid overwatering.Crop rotation.use of disease-resistant varieties",
    },
    BlackRootRot:{
      description:"The roots of infected plants may become black and decayed.The decay can begin at the tips and spread throughout the root system.Complete carrot crop failure.",
      precaution:".Plant disease-resistant carrot varieties.practice crop rotation.improve soil drainage.avoid overwatering.clean equipment.remove infected plants.apply fungicides",
    },
    purpleDisease:{
      description:"discolored roots,Soft, mushy tissue stunted growth yellowing foliage, wilt or die.reduced yield and quality of the affected crops",
      precaution:".crop rotation.proper irrigation.good soil management practices.",
      
    },
    yellowdiseases:{
      description:"Reduced yield poor quality carrots",
      precaution:".Practice good sanitation.water properly.provide proper nutrition.Apply fungicides or other treatments if necessary",
      
      
    },
    healthycarrotleaves:{
      description:"Fresh leaves typically have a vibrant and consistent color. Appear lively and bright, reflecting the characteristic color of the plspecies. Fresh leaves should feel smooth and supple to the touch.Natural shape and structure of the leaves. Some fresh leaves have a distinct aroma.",
    },
    carrotdryleaves:{
      description:"Carrot Root Affect Root Small",
      precaution:".Soil Preparation.Pest Control.Give essential nutrients, such as nitrogen, phosphorus, or potassium",
    },
    carrotleafblight:{
      description:"Root Small Deformed roots",
      precaution:".Water Management.Weed Control.Crop Rotation.Proper Spacing",
    },
    carrotleafspot:{
      description:"Root Small-Deformed roots-Stuned growth.",
      precaution:".Plant-resistant varieties.Crop rotation.Sanitation.Proper irrigation.Fungicides",

    },
    carrotpurpleleavesticks:{
      description:"-Root Small-Deformed roots-Stuned growth-Discoloration roots-Purple roots",
      precaution:".Plant disease-resistant carrot varieties.practice crop rotation.practice good sanitation.Monitor and manage irrigation",

    },
    WhiteMold:{
      description:"development of a white, cottony or fluffy fungal growth on the affected plant parts.impacting the overall health of the plant and reducing yield.",
      precaution:".Proper spacing and ventilation.Soil drainage and moisture management.Weed control.Good sanitation.Crop rotation",

    },
    RootKnotNematode:{
      description:"presence of galls or swellings on the roots.Stunted growth.Reduced root system.Root deformation.Root galls ",
      precaution:".Avoid overwatering.Use nematode-free seedlings.Soil sanitation.Soil solarization.Soil amendments",
    },
    HealthyCarrots:{
      description:"Brightning orange color Texture should feel firm and crisp with smooth and unblemished skin Fresh carrots typically have a mild, earthy aroma.",

    }

  };
  // console.log(description["healthyleaves"]["description"]);
  //catch imageUrl which is sent from Dashboard screen
  const route = useRoute();
  const { imageUrl } = route.params;
  console.log("diagnose:", imageUrl)

  const path = imageUrl;

  
  //useState hook for identify is popup screen visible or ot
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  //set diagnosis details when click Diagnosis button 
  const [title,setTitle]=useState("");
  const [descriptionTitle,setDescriptionTitle]=useState("");
  // const [description,setDescription]=useState("");
  const [image,setImage]=useState(null);

  const loadContent= async()=>{
    

    //API request code
    try{
      const formData = new FormData();
    formData.append('file', {
      uri: imageUrl,
      type: 'image/jpeg',
      name: 'file-image.jpg',
    });
    const response = await axios.post(
      'http://103.1.179.203:8080/predict',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response.data);
    var title=response.data.prediction;
    // var descriptionTitle=title.split('-')
    //setTitle(title);
    setTitle(title);
    setDescriptionTitle(title.replace(/-/g, "").replace(/\s/g, ""));

    
   // setDescription("Black root rot occurs primarily in storage when conditions are not ideal and temperature and humidity are too high. ");
    setImage(imageUrl)

    } catch (error) {
      console.error(error);
    }

    //API request code end
    
 
  }

  //set popup screen 
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }


  //popup screen
  const Popup = () => {
    return (
      <Modal visible={isPopupVisible} transparent={true}>
        <View style={styles.popupContainer}>
          <BlurView style={styles.popupBackground} intensity={100} tint="dark" />
          <View style={styles.popupContent}>
            <Text style={styles.popupTextTitle}>{title}</Text>
            <Text style={styles.popupText}>Before planting:</Text>

             {title && description[descriptionTitle] && (
          <Text style={styles.popupText}> 
            {description[descriptionTitle]["precaution"].replace(/\./g, '\n\u2022')}
          </Text>
        )}
 


            <View style={styles.popupScreenButtons}>
              <TouchableOpacity style={styles.closeButton} onPress={togglePopup}>
                <Text style={styles.gotItButton}>Got it</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePopup}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          
          </View>
        </View>
      </Modal>
    );
  }

// return other components of the page
  return (
    //main container
    <View style={styles.mainContainer}>
      
      {/*Back button and logo */}
      <View style={styles.topIconSection}>
      <TouchableOpacity onPress={handleBackPress}>
      <Image source={require("../assets/DiagnosisIcons/backIcon.png")} />
      </TouchableOpacity>
        <Image source={require("../assets/DiagnosisIcons/logo.png")} />
      </View>

      { /*image view section*/ }
      <View style={styles.imageView}>
        <Image  source={{ uri: image }} style={styles.imageView}/>

      </View>

      { /*diagnosis button*/ }
      <View>
        <TouchableOpacity onPress={loadContent} style={styles.diagnosisButton}><Text style={styles.diagnosisButtonText}>Diagnosis</Text></TouchableOpacity>
      </View>

      { /*diagnosis detail section*/ }
      <View style={styles.diagnosisDetails}>
        <Text style={styles.detailTitle}>Non - Fresh!</Text>
        <Text style={styles.detailName}>Diagnosis Name:</Text>
        <Text style={styles.diagnosisContent}>{title}</Text>
        <Text style={styles.description}>Diagnosis:</Text>
        
        {title && description[descriptionTitle] && (
          <Text style={styles.diagnosisContent}>
            {description[descriptionTitle]["description"]}
          </Text>
        )}




      </View>

      { /*precaution button*/ }
      <View>
        <TouchableOpacity style={styles.precautionButton} onPress={togglePopup}><Text style={styles.precautionButtonText}>Precautions</Text></TouchableOpacity>
      </View>

      { /*calling popup screen*/ }
      <Popup />

    </View>
   
  )
}

//diagnosis screen styles
const styles=StyleSheet.create({
    //mainContainer styles
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },

    //top back icon and logo section
    topIconSection:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        columnGap:180,
    },

    //image view section
    imageView:{
        height:220,
        width:309,
        borderRadius:43,
    },

    //diagnosis button 
    diagnosisButton:{
        width:336,
        height:48,
        backgroundColor:'#A13600',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
      },
    
    diagnosisButtonText:{
        fontSize:20,
        color:'#FFFFFFFF',
        textAlign:'center',
      },

    //diagnosis detail section
    diagnosisDetails:{
        width:309,
        height:220,
        borderRadius:18,
        backgroundColor:"#d6b8a1",
        display:'flex',
        flexDirection:'column',  
        padding:15,        
    },

    detailTitle:{
        fontSize:16,
        fontWeight:800,
        textAlign:'center',
        color:'#A13600',
        lineHeight:25,
    },

    detailName:{
        fontSize:16,
        fontWeight:800,
        textAlign:'left',
        color:'#918d8a',
        lineHeight:25,
    },

    description:{
        fontSize:16,
        fontWeight:800,
        textAlign:'left',
        color:'#918d8a',
        lineHeight:25,    
    },
    diagnosisContent:{
      fontSize:16,
      fontWeight:400,
      textAlign:'left',
      color:'#7D8488',
      lineHeight:25,
  },

    //precautions button
    precautionButton:{
        width:336,
        height:48,
        backgroundColor:'#A13600',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
      },
    
      precautionButtonText:{
        fontSize:20,
        color:'#FFFFFFFF',
        textAlign:'center',
      },

      //popup screen styles

      popupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      popupBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
      },
      popupContent: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        width:323,
        height:669,
      },
      popupTextTitle: {
        fontSize: 20,
        fontWeight:700,
        color: '#515B60',
        marginBottom: 16,
        paddingTop:16,
        lineHeight:18,
        textAlign:'left',
      },
      popupText: {
        fontSize: 16,
        fontWeight:400,
        color: '#515B60',
        marginBottom: 16,
        paddingTop:16,
        lineHeight:18,
        textAlign:'left',
      },
      closeButton: {
        backgroundColor: '#A13600',
        borderRadius: 8,
        width:127,
        height:48,
        textAlign:'center',
        justifyContent:'center',
        
      },
      gotItButton: {
        fontSize: 16,
        fontWeight:400,
        color: 'white',
        textAlign:'center',
        lineHeight:18,
         
      },
      cancelButton: {
        fontSize: 16,
        fontWeight:400,
        textAlign:'center',
        lineHeight:18,
        marginBottom:15,

   
 
      },
      popupScreenButtons:{
        flex:1,
        alignItems:'flex-end',
        flexDirection:'row',
        gap:80

      }



})

export default Diagnosis