import React, { useEffect } from 'react';
import {  View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <View >
      <Text>Contacts Module Example</Text>
    </View>
  );
}


  //   <View style={{ flex: 1, flexDirection: "row", justifyContent:"center", alignItems: "center" }}>

  // <View >
    
  //     <View style={style.veiw1}><Text>1 Veiw</Text></View>
  //     <View style={style.veiw2}><Text>2 Veiw</Text></View>
  //     <View style={style.veiw3}><Text>3 Veiw</Text></View>
     

  // </View>
  //  <View>
    
  //     <View style={style.veiw1}><Text>1 Veiw</Text></View>
  //     <View style={style.veiw2}><Text>2 Veiw</Text></View>
  //     <View style={style.veiw3}><Text>3 Veiw</Text></View>
     

  // </View> <View >
    
  //     <View style={style.veiw1}><Text>1 Veiw</Text></View>
  //     <View style={style.veiw2}><Text>2 Veiw</Text></View>
  //     <View style={style.veiw3}><Text>3 Veiw</Text></View>
     

  // </View> 
  //   </View>


// const style=StyleSheet.create({
// veiw1:{
//   backgroundColor:"red",
//   width:100,
//   height:100,
//   borderColor:"black",
//     borderWidth: 1,
//      borderStyle: 'solid'

// },
// veiw2:{
//   backgroundColor:"green",
//   width:100,
//   height:100,
//   borderColor: "black",
//   borderWidth: 1, 
//   borderStyle: 'solid'
  

// },
// veiw3:{
//   backgroundColor:"grey",
//   width:100,
//   height:100,
//   borderColor:"black",
//   borderWidth: 1,
//    borderStyle: 'solid'
  
// }
// })
