import React, { useState, useEffect } from 'react';
import { Center, Box, FormControl, Input, Text, ScrollView, Pressable, Icon, Image } from "native-base";
import {
  Alert,
  Modal,
  ModalBackdrop,
  AlertText,
} from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components";
import { getData, setData } from '../../utils';
import FIREBASE from "../../config/FIREBASE";

const EditProfile = ({ route, navigation }) => {
  const [nama, setNama] = useState(route.params?.nama || '');
  const [umur, setUmur] = useState(route.params?.umur || '');
  const [tb, setTb] = useState(route.params?.tb || '');
  const [bb, setBb] = useState(route.params?.bb || '');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await getData('user'); // Replace with your Firebase fetch function
        if (profile) {
          setNama(profile.nama || '');
          setUmur(profile.umur || '');
          setTb(profile.tb || '');
          setBb(profile.bb || '');
        } else {
          toggleAlert('User data not available');
        }
      } catch (error) {
        console.error('Error fetching profile:', error.message);
        toggleAlert('Error fetching profile');
      }
    };

    const unsubscribe = navigation.addListener('focus', fetchData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onEditProfile = async () => {
    try {
      if (nama && umur && tb && bb) {
        const data = {
          nama: nama,
          umur: umur,
          tb: tb,
          bb: bb,
        };

        await setData('user', data); // Use the correct path for your Firebase data
        navigation.replace('Profile');
      } else {
        toggleAlert('Data tidak lengkap');
      }
    } catch (error) {
      console.error('Error editing profile:', error.message);
      toggleAlert('Error editing profile');
    }
  };

  return (
    <ScrollView>
      <Box flex={1} bg='#FAF8ED'>
        <Box flex={1} bg='#FAF8ED' p={10} alignItems='center'>
          <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}>
            <Icon as={Ionicons} name="arrow-back" size={10} color="black" />
          </Pressable>
        </Box>
        <Box flex={1} bg='#FAF8ED' p={30} alignItems='center'>
          <Center
            bg="#FAA70A"
            _text={{
              color: "warmGray.50",
              fontSize: "25",
            }}
            height={12}
            width={{
              base: 200,
              lg: 250
            }}
            borderRadius={15}
          >
            Edit Profile
          </Center>
          <Center>
            <Image       
              mt={10}
              source={require('../../../assets/profile.jpg')}
              style={{ width: 130, height: 130, borderRadius: 50 }}
            />
          </Center>
        </Box>
        <Box flex={1} bg='#FAA70A' borderTopRadius={80}>
          <FormControl p={30} >
            <FormControl.Label mt={5}>Nama</FormControl.Label>
            <Input
            placeholder="Enter Email"
            value={nama}
            onChangeText={(text) => setNama(text)}
            mb={5}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
            <FormControl.Label>Umur</FormControl.Label>
            <Input
              placeholder="Enter umur"
              value={umur}
              onChangeText={(text) => setUmur(text)}
              mb={5}
              bgColor='#FAF8ED'
              borderRadius={15}
            />
            <FormControl.Label>Tinggi Badan</FormControl.Label>
            <Input
              placeholder="Enter Tinggi Badan"
              value={tb}
              onChangeText={(text) => setTb(text)}
              mb={5}
              bgColor='#FAF8ED'
              borderRadius={15}
            />
            <FormControl.Label>Berat Badan</FormControl.Label>
            <Input
              placeholder="Enter Berat Badan"
              value={bb}
              onChangeText={(text) => setBb(text)}
              mb={10}
              bgColor='#FAF8ED'
              borderRadius={15}
            />
            <Button
            type="text"
            title="Update"
            padding={10}
            onPress={onEditProfile}
          />
          </FormControl>
        </Box>
        {/* show Alert */}
      {showAlert && (
        <Modal isOpen={showAlert} onClose={toggleAlert}>
          <ModalBackdrop />
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Error!</AlertText>
            <AlertText>{alertMessage}</AlertText>
          </Alert>
        </Modal>
      )}
      </Box>
    </ScrollView>
  );
};

export default EditProfile;