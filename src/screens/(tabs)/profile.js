import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Heading, Center, Box, Button, Text } from "native-base";

const Profile = () => {
  const navigation = useNavigation(); // Taruh useNavigation di dalam komponen Profile
  
  return (
    <Center flex={1}>
      <Heading>Ini Halaman profile</Heading>
      <Box alignItems="center" p={30} borderRadius={15}>
      <Button
          size="lg"
          borderRadius={10}
          mr={5}
          onPress={() => navigation.navigate("Edit Profile")}
          bg="#FAA70A"
        >
          Edit Profile
        </Button>
      </Box>
    </Center>
  );
};

export default Profile;
