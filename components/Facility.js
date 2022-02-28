import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";
import { width, height, totalSize } from "react-native-dimension";

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView>
      behavior ={Platform.OS === "android" ? "height" : "padding"}
      style={styles.container}
    </KeyboardAvoidingView>
  )
}

const Facility = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.icon} source={require("../assets/facility.png")} />
        <Text style={styles.heading}>MEDICAL FACILITY</Text>
        <Text style={styles.text}>
          Should be able to find the nearest medical facility based on their
          current location and get directions
        </Text>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("BookDoctors")}
          >
            <Text style={styles.text2}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text2}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Facility;

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    backgroundColor: "white",
    height: "100%",
    flex: 1,
    width: "100%",
    fontSize: totalSize(2),
  },
  icon: {
    marginTop: 30,
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  heading: {
    fontSize: 35,
    marginTop: 10,
    textAlign: "center",
    color: "#054EDE",
    fontWeight: "bold",
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    color: "#00A48F",
    fontSize: 20,
    marginRight: 25,
    marginLeft: 25,
  },
  button: {
    height: 30,
    width: "30%",
    backgroundColor: "#3E64FF",
    borderRadius: 20,
    paddingLeft: 50,

    paddingTop: 5,

    color: "white",
    top: "40%",
    left: 10,
  },
  btns: {
    flexDirection: "row",
  },
  text2: {
    color: "white",
  },
  button2: {
    height: 30,
    width: "30%",
    backgroundColor: "#3E64FF",
    borderRadius: 20,
    paddingLeft: 50,

    paddingTop: 5,

    color: "white",
    top: "40%",
    left: 150,
  },
});
=======
    container:{
        backgroundColor:'white',
        height:'100%'
    },
    icon:{
        marginTop:30,
        width:300, 
        height:300, 
        alignSelf:'center'
    },
    heading:{
        fontSize:35,
        marginTop:80,
        textAlign:'center',
        color:'#054EDE',
        fontWeight:'bold',
    },
    text:{
        marginTop:50,
        textAlign:'center',
        color:'#00A48F',
        fontSize:20
    },
    button:{
        height:'15%',
        width:'25%',
        backgroundColor:'#3E64FF',
        borderRadius:20,
        marginLeft:-20,
        paddingLeft:30,
        paddingTop:3,
        color:'white',
        marginTop:'25%'
    },
    btns:{
        flexDirection:'row',
    },
    text2:{
        color:'white'
    },
    button2:{
        height:'15%',
        width:'35%',
        backgroundColor:'#3E64FF',
        borderRadius:20,
        paddingLeft:15,
        paddingTop:3,
        color:'white',
        marginTop:'25%',
        marginLeft:240
    },
})
>>>>>>> 5e3bf3a16aba7e4dd0b14b637d978db47307c1ae
