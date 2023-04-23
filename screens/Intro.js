import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Intro = () => {
  return (
    //main container
    <View style={styles.mainContainer} >

    { /* intro title*/ }
        <View>
            <Text style={styles.introTitle}> CARROT DOC</Text>
        </View>

    { /*intro page logo*/ }
        <View>
            <Image source={require("../assets/Intro/logo.png")} />
        </View>

    { /*second title*/ }
        <View style={styles.secondTitle}>
            <Text style={styles.secondTitle1}>CARROT</Text>
            <Text style={styles.secondTitle2}>DOC</Text>
        </View>
    { /*intro page small description*/ }
        <View>
            <Text style={styles.introDescription}>
            carrot diseases and freshness detection{'\n'}
            mobile application
            </Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },

    //intro title
    introTitle:{
        fontSize:18,
        fontWeight:400,
        lineHeight:18,
        color:'#A1A3B0',
        letterSpacing:10,
        textAlign:'center'
    },
    //second title
    secondTitle:{
       
    },
    secondTitle1:{
        fontSize:40,
        lineHeight:40,
        fontWeight:400,
        color:'#263238',
        textAlign:'center'
    },
    secondTitle2:{
        fontSize:40,
        lineHeight:40,
        fontWeight:700,
        color:'#A13600',
        textAlign:'center'
    },
    //intro page description
    introDescription:{
        fontSize:14,
        fontWeight:400,
        textAlign:'center',
        lineHeight:15,
        color:'#263238',
        paddingTop:10,
    },

})

export default Intro