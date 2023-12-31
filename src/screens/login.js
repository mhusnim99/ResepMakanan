import React, { useState } from "react";
import { Box, Heading, Text, FormControl } from 'native-base';
import {
  Alert,
  Modal,
  ModalBackdrop,
  AlertText,
} from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from "../components";
import { loginUser } from "../actions/AuthAction"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = () => {
    if (email && password) {
      loginUser(email, password)
        .then((user) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.navigate('Tabs');
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };

  return (
    <Box flex={1} p={4} alignItems='center' justifyContent='center' bg='#FAA70A'>
      <Heading
        paddingBottom={50}
        color="#FAF8ED"
        fontSize="33"
      >Login</Heading>
      <FormControl p={10} paddingBottom={0.10}>
        <Heading color="grey" fontSize="20" >Email</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          bgColor='#FAF8ED'
          borderRadius={15}
        />
      </FormControl>
      <FormControl p={10}>
      <Heading color="grey" fontSize="20">Kata Sandi</Heading>
        <Input
          placeholder="Kata Sandi"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureText
          mb={2}
          bgColor='#FAF8ED'
          borderRadius={15}
        />
        <Text mt={2} >Don't have an account ?<Text color="blue.500" onPress={() => navigation.navigate('Register')}> Register Here</Text></Text>
      </FormControl>
      <Box alignItems="center" borderRadius={15} >
        <Button
          title="Login"
          type="text"
          padding={"$4"}
          onPress={() => login()}
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

export default Login;