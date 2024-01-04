import React, { useState, useEffect } from 'react';
import { Box, Center, Text, Pressable, Input, Icon, FormControl, ScrollView } from 'native-base';
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
        <Box borderBottomRadius="30"  bg="#FAA70A">
          <Center>
            <Text mt="60" mb="60" fontSize="30" color="white" fontWeight="bold">
            {profile?.nama}
            </Text>
          </Center>
        </Box>
          <Box mt="30">
            <FormControl p={30} >
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
              >{profile?.nama}</Input>
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
              >{profile?.umur}</Input>
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
              >{profile?.tb}</Input>
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                bg={"white"}
                borderRadius={15}
              >{profile?.bb}</Input>
              <Button
              type="text"
              title={profile ? "Logout" : "login"}
              padding={"$3"}
              onPress={() => onSubmit(profile)}
            />
            <Button
              title="Edit Profile"
              type="text"
              padding={"$3"}
              onPress={() => navigation.navigate('Edit Profile')}
            />
            </FormControl>
            
            
          </Box>
      </Box>
    </ScrollView>
  );
};

export default Profile;