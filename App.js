import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
export default function App() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
       <ImageBackground source={require ("./assets/2.png")}
      style= {{ width: "100%", height: "70%",marginBottom:"55%",marginRight:"5%",margin:20, }}>
  
     <Text style={styles.textStyle}>Signup</Text>
      <Text style={styles.textStyle1}>Please complete the fields below.
      If you are a teacher who's students are 
      under the age 13 we will provide you a clas ClassCode
       This is in 
        case if you forgot your password</Text>
     <View style={styles.SectionStyle}>      
        <TextInput
         style={styles.TextInputStyle}  
         placeholder="Create a username" 
        underlineColorAndroid="transparent"
             />
          </View>

       <View style={styles.SectionStyle1}>
  
       <TextInput
         style={styles.TextInputStyle}  
         placeholder="Create a password"
         secureTextEntry={true} 
         
       underlineColorAndroid="transparent"
      />

    </View>
    <View style={styles.SectionStyle2}>
  
    <TextInput
         style={styles.TextInputStyle}  
         placeholder="Type password again"
         secureTextEntry={true} 
        underlineColorAndroid="transparent"
   />
       </View>
       <View style={styles.SectionStyle2}>
  
  <TextInput
       style={styles.TextInputStyle}  
       placeholder="Please enter a vaild email address"
       secureTextEntry={true} 
      underlineColorAndroid="transparent"
 />
     </View>
       <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>I am  a teacher who will be responsible for managing students under the age of 13.</Text>
      </View>
   

     <TouchableOpacity onPress={()=>{("")}}
           style={styles.loginBtn}>
 
          <Text style={styles.styleloginBtn}>Continue</Text>
          </TouchableOpacity>

   </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputStyle: {  
      textAlign: 'center',    
   },
  textStyle:{
 
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
   // lineHeight: 40,
    marginTop:300,
    textShadowColor: '#000',
    fontFamily: 'sans-serif',
  
    marginLeft:10,
  },
  textStyle1:{
    color: '#000',
    fontSize: 14,
    //lineHeight: 40,
    //margin:5,
    textShadowColor: '#000',
    fontFamily: 'sans-serif',
    //textShadowRadius: 1,
    marginBottom:5,
    marginLeft:15,
  },
  SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
  marginTop: 0,
  width:330,
  marginLeft:20,
  borderColor: '#000',
  height: 40,
  borderRadius: 127 ,
  margin: 10
},
  SectionStyle1: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
  marginTop: 0,
  borderColor: '#000',
  marginLeft:20,
  height: 40,
  width:330,
  borderRadius: 127 ,
  margin: 10
  
},
 SectionStyle2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 1,
  marginTop: 0,
  borderColor: '#000',
  height: 40,
  width:330,
  marginLeft:20,
  borderRadius: 127 ,
  margin: 10
  
},
section: {
  flexDirection: 'row',
  alignItems: 'center',
  borderradius: '100',
  color: '#87ceeb',
  
},
paragraph: {
  color: '#000',
  fontSize: 14,
  textShadowColor: '#000',
  fontFamily: 'sans-serif',
  marginBottom:1,
  marginRight:100,
  
},
checkbox: {
  margin: 20,
  borderradius: '100',
  borderRadius: 127 ,
  color: '#87ceeb',
},
loginBtn: {
    
  backgroundColor: "#61dafb",
  borderRadius: 60,
  width:"60%",
  //marginBottom:"10%",
  alignItems: "center",
  margin:20,
  marginLeft:70,
  height:80,
},
styleloginBtn:{

  color: '#FFF',
  fontSize: 20,
  borderRadius: 127 ,
  fontWeight: 'bold',
  margin:25,
},
});
