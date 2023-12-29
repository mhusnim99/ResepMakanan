
import React, { useState } from "react";
import {
  Box,
  Alert,
  FormControl,
  Text,
  Modal,
  ModalBackdrop,
  AlertText,
} from "@gluestack-ui/themed";
import { Input, Button } from "../components";
import { registerUser } from "../actions/AuthAction";


const Register = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
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
    <Box flex={1} backgroundColor="$yellow400" justifyContent="center">
      <Box
        backgroundColor="$yellow400"
        borderRadius={"$md"}
        marginTop={"$10"}
        marginHorizontal={"$6"}
        p={"$5"}
      >
        <Text size="3xl" color="$white" fontWeight="bold">
          Register
        </Text>
        <FormControl>
          <Input
            label="Nama"
            value={nama}
            onChangeText={(nama) => setNama(nama)}
            height={"$10"}
            backgroundColor="$white"
          />
          <Input
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            height={"$10"}
          />
          <Input
            label="No. Handphone"
            keyboardType="phone-pad"
            value={nohp}
            onChangeText={(nohp) => setNohp(nohp)}
            height={"$10"}
          />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
            height={"$10"}
          />
        </FormControl>
        <Box flexDirection="column" my={"$5"}>
          <Button
            title="Register"
            type="text"
            icon="submit"
            padding={"$3"}
            fontSize={"$md"}
            onPress={() => {
              onRegister();
            }}
          />
        </Box>
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

