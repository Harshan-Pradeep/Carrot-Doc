import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Diagnosis = () => {
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
        <TouchableOpacity style={styles.precautionButton}><Text style={styles.precautionButtonText}>Precautions</Text></TouchableOpacity>
      </View>

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




})

export default Diagnosis