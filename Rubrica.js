import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addContact = () => {
    setContacts([...contacts, { name, surname, birthdate, address, phone }]);
    setName('');
    setSurname('');
    setBirthdate('');
    setAddress('');
    setPhone('');
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const filteredContacts = contacts.filter((contact) => {
    const fullName = contact.name + ' ' + contact.surname;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  function Homepage({ navigation }) {
    return (
      <View style={styles.GlobalView}>
        <Text style={styles.titolo1}>Rubrica Telefonica</Text>
        <View style={styles.Container1}>
          <TextInput
            style={styles.input1}
            placeholder="Ricerca contatto"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Invia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottoneNewContatto}
            onPress={() => navigation.navigate('NewContatto')}
          >
            <View style={styles.flex}>
              <Text style={styles.testoBottoneNewContatto}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          {filteredContacts.length > 0 ? (
            <FlatList
              data={filteredContacts}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.contact} onLongPress={() => setSelectedIndex(index)}>
                  <Text style={styles.input3}>
                    {item.name} {item.surname}
                  </Text>
                  <Text style={styles.input4}>
                    {item.birthdate} {item.address}
                  </Text>
                  <Text style={styles.contactPhone}>{item.phone}</Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteContact(index)}
                  >
                    <Text style={styles.deleteTextButton}>Delete</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />
          ) : (
            <Text>No contacts found</Text>
          )}
        </View>
      </View>
    );
  }

function NewContatto({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style={styles.titolo2}>Nuovo Contatto</Text>  
      <View>
        <TextInput style={styles.input2} 
         placeholder="Nome"
        value={name}
        onChangeText={setName}
        />

        <TextInput style={styles.input2} 
        value={surname}
        onChangeText={(text) => setSurname(text)}
        
        placeholder="Cognome" />

        <TextInput style={styles.input2}
        value={birthdate}
        onChangeText={(text) => setBirthdate(text)}
        placeholder="Data di Nascita"/>

        <TextInput style={styles.input2} 
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Indirizzo" />

        <TextInput style={styles.input2}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="numeric"
        placeholder="Numero di Telefono" />
        

        
        <TouchableOpacity style={styles.tasto1} onPress={addContact}>
          <Text style={styles.buttonText2}>Aggiungi Contatto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="NewContatto" component={NewContatto} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  GlobalView: {
    flex: 1,
  },

  contactPhone: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0096FF',
  },

  contact: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    padding: 5,
    marginBottom: 10,
    flexDirection: 'column',
  },

  titolo1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
  },

  input3: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  input4: {
    fontSize: 10,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  Container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 25,
  },
  input1: {
    width: 270,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 30,
    marginBottom: 1,
  },
  button1: {
    width: 70,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 1,
  },
  buttonText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottoneNewContatto: {
    position: 'absolute',
    top: 500,
    right: 15 ,
    width: 75,
    height: 75,
    borderRadius: 45,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  testoBottoneNewContatto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 37,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  flex: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  deleteButton: {
    backgroundColor: '#f44336',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteTextButton: {
    backgroundColor: '#f44336',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // style per form nuovo contatto

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,  
  },

  container3: {
    height: 440,
    //backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,  
  },

    titolo2: {
    fontSize: 24,
    marginLeft: 7,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tasto1: {
    backgroundColor: '#000',
    borderRadius: 35,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  
  input2: {
    borderWidth: 1,
    color: '#ccc',
    borderColor: '#000',
    borderRadius: 45,
    padding: 10,
    marginBottom: 10,
  },
  

});
