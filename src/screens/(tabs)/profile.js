import React, { useState } from 'react';
import { Box, Center, NativeBaseProvider, Text, Pressable, Image, Input, Icon, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <NativeBaseProvider>
      <Box flex={1}>
      <Box borderBottomRadius="120" height="25%" bg="#FAA70A">
          <Center>
            <Text mt="60" fontSize="30" color="white" fontWeight="bold">
              Profil Pengguna
            </Text>
            <Image
              mt="2"
              size={140}
              borderRadius={100}
              source={{
                uri: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/04/Shizuka-dari-kartun-Doraemon-3685993669.jpg',
              }}
            />
          </Center>
        </Box>
        <Center flex={1}>
          <Box width="95%" mt="20">
            <Text fontSize="15" fontWeight="bold" ml="5">
              Nama :
            </Text>
            <Input
              mb="3"
              alignSelf="center"
              borderRadius="15"
              height="50"
              width="100%"
              placeholder="Nama Lengkap"
            />
            <Text fontSize="15" fontWeight="bold" ml="5">
              Alamat Email :
            </Text>
            <Input
              mb="3"
              alignSelf="center"
              borderRadius="15"
              height="50"
              width="100%"
              placeholder="Email"
            />
            <Text fontSize="15" fontWeight="bold" ml="5">
              Password :
            </Text>
            <Input
              mb="3"
              alignSelf="center"
              borderRadius="15"
              height="50"
              width="100%"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={togglePasswordVisibility}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={showPassword ? 'visibility' : 'visibility-off'}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />
            <Button
              onPress={() => navigation.navigate("Edit Profile")}
              bg="#FAA70A"
              width="100%"
              borderRadius="15"
              mt="5"
            >
              Edit Profile
            </Button>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default Profile;
