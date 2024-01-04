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
      <Box>
        <Box borderBottomRadius="30"  bg="#FAA70A">
          <Center>
            <Image
                mt={39}
                source={require('../../../assets/profile.jpg')}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            <Text mt="30" mb="30" fontSize="30" color="white" fontWeight="bold">
            {profile?.nama}
            </Text>
          </Center>
        </Box>
          <Box p="10" >
            <Text fontSize={"15"}>Nama:</Text>
            <Text fontSize={"30"} color="#FFC436">{profile?.nama}</Text>
            <Text fontSize={"15"}>Umur:</Text>
            <Text fontSize={"30"} color="#FFC436">{profile?.umur}</Text>
            <Text fontSize={"15"}>Tinggi Badan:</Text>
            <Text fontSize={"30"} color="#FFC436">{profile?.tb}</Text>
            <Text fontSize={"15"}>Berat Badan:</Text>
            <Text fontSize={"30"} color="#FFC436">{profile?.bb}</Text>
          <Center>
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
            </Center>
          </Box>
      </Box>
  );
};

export default Profile;