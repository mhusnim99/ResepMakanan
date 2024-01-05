import React, { useState, useEffect } from 'react';
import { Box, Center, Text, Pressable, Input, Icon, FormControl, ScrollView, Image } from 'native-base';
import { Button } from "../../components";
import { clearStorage, getData } from "../../utils";
import FIREBASE from "../../config/FIREBASE";

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.navigate('Login');
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("login");
    }
  };

  return (
    <ScrollView>
      <Box>
        <Box borderBottomRadius="120" height="25%" bg="#FAA70A">
          <Center>
            <Text mt="70" fontSize="30" color="white" fontWeight="bold">
              Profil Pengguna
            </Text>
            <Image
                    mt={60}
                    source={require('../../../assets/profile.jpg')}
                    style={{ width: 120, height: 120, borderRadius: 50 }}
                  />
          </Center>
        </Box>
          <Box mt={10}>
            <FormControl p={30} >
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
                isReadOnly
                mb={5} 
                bgColor= "#FAA70A"
                color={'white'}
              >{profile?.nama}</Input>
              <FormControl.Label>Umur</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
                isReadOnly
                mb={5} 
                bgColor= "#FAA70A"
                color={'white'}
              >{profile?.umur}</Input>
              <FormControl.Label>Tinggi Badan</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
                isReadOnly
                mb={5} 
                bgColor= "#FAA70A"
                color={'white'}
              >{profile?.tb}</Input>
              <FormControl.Label>Berat Badan</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
                isReadOnly
                mb={5} 
                bgColor= "#FAA70A"
                color={'white'}
              >{profile?.bb}</Input>
               <Button
              title="Edit Profile"
              type="text"
              padding={"$4"}
              onPress={() => navigation.navigate('Edit Profile')}
            />
              <Button
              type="text"
              title={profile ? "Logout" : "login"}
              padding={"$3"}
              onPress={() => onSubmit(profile)}
            />
           
            </FormControl>
          </Box>
      </Box>
    </ScrollView>
  );
};

export default Profile;