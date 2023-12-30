
import React, { useState } from "react";
import { Box, Heading, Text, FormControl,} from 'native-base';
import {
  Alert,
  Modal,
  ModalBackdrop,
  AlertText,
} from "@gluestack-ui/themed";
import { Input, Button } from "../components";
import { registerUser } from "../actions/AuthAction";


const Register = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");;
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && email && password) {
      const data = {
        nama: nama,
        email: email,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("Login");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Tolong Lengkapi Data");
    }
  };

  return (
    <Box flex={1} alignItems='center' justifyContent='center' bg='#FAA70A'>
        <Heading 
      
        color= "#FAF8ED"
        fontSize="33"
        >Sign Up</Heading>
        <FormControl p={10} paddingBottom={0.10}>
        <Text color="grey" fontSize="20" >Nama</Text>
          <Input
            placeholder="Enter Username"
            value={nama}
            onChangeText={(text) => setName(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
        <FormControl p={10} paddingBottom={0.10}>
        <Heading color="grey" fontSize="20" >Email</Heading>
          <Input
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
        <FormControl p={10}>
        <Heading color="grey" fontSize="20" >Password</Heading>
          <Input
            placeholder="Enter Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureText
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}/>
            <Text mt={2} >Already have an account?<Text color="blue.500" onPress={() => navigation.navigate('Login')}> Login</Text></Text>
            </FormControl>  
            
        <Box flexDirection="column" my={"$5"}>
          <Button
            title="Sign Up"
            type="text"
            icon="submit"
            padding={"$3"}
            fontSize={"$md"}
            onPress={() => {
              onRegister();
            }}
          />
        </Box>
      {/* show Alert */}
      {showAlert && (
        <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
          <ModalBackdrop />
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Error!</AlertText>
            <AlertText>{alertMessage}</AlertText>
          </Alert>
        </Modal>
      )}
    </Box>
  );
};

export default Register;

