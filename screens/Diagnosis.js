import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';

const Diagnosis = () => {
  //useState hook for identify is popup screen visible or ot
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
            <Text style={styles.popupText}>This is the popup!</Text>

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
        <TouchableOpacity  ><Image  source={require("../assets/DiagnosisIcons/backIcon.png")} /></TouchableOpacity>
        <Image source={require("../assets/DiagnosisIcons/logo.png")} />
      </View>

      { /*image view section*/ }
      <View style={styles.imageView}>

      </View>

      { /*diagnosis button*/ }
      <View>
        <TouchableOpacity style={styles.diagnosisButton}><Text style={styles.diagnosisButtonText}>Diagnosis</Text></TouchableOpacity>
      </View>

      { /*diagnosis detail section*/ }
      <View style={styles.diagnosisDetails}>
        <Text style={styles.detailTitle}>Non - Fresh!</Text>
        <Text style={styles.detailName}>Diagnosis Name:</Text>
        <Text style={styles.description}>Diagnosis:</Text>

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
        backgroundColor:"#000",
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
        alignItems: 'center',
        width:323,
        height:669,
      },
      popupText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 16
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
        
        
      },
      popupScreenButtons:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:80

      }



})

export default Diagnosis