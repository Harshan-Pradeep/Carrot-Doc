import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Onboarding = ({upperText,lowerText,navgigationScreen}) => {
    
    const navigation = useNavigation();
    
  return (
    //main container
    <View style={styles.mainContainer}>

    { /*upper text*/ }
        <View >
            <Text style={styles.upperText}>{upperText}</Text>
        </View>
    { /*lower text*/ }
         <View >
            <Text style={styles.lowerText}>{lowerText}</Text>
        </View>

    { /*next icon and page number*/ }
    <View style={styles.iconSection}>

        <View style={styles.pageNumberIcon}>
            <Image source={require('../assets/Onboarding/pageNumber.png')}/>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate(navgigationScreen)} ><Image source={require('../assets/Onboarding/next.png')} /></TouchableOpacity>
        </View>
    </View>

    </View>
  )
}

//onboarding component styles
const styles=StyleSheet.create({
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },

    //upper text
    upperText:{
        fontSize:28,
        fontWeight:400,
        color:'#263238',
        lineHeight:32,
        paddingLeft:20,
        paddingRight:20,
        textAlign:'left',
    },
    //lower text
    lowerText:{
        fontSize:14,
        fontWeight:400,
        lineHeight:18,
        color:'#A1A3B0',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:15,
        textAlign:'left',
        marginTop:2,
        marginBottom:400
    },

    //page number and next icon
    iconSection:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        columnGap:40,

    
        
        
    },
    pageNumberIcon:{
        alignSelf:'center'
    },



})
export default Onboarding