import React, { Component } from 'react';
import {
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Pressable,
  Image,
  Input,
  Icon,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

class Profil extends Component {
   constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { navigation } = this.props;
    return (
      <NativeBaseProvider>
        <Box borderBottomRadius="120" height="25%" bg="#fde047">
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
        <Center mt="20"size="100%" flexDirection="row" maxHeight="50%" alignItems="flex-end">
          <Box size="95%">
            <Text fontSize="15" fontWeight="bold" ml="5">
              Nama :
            </Text>
            <Input
              mb="3"
              alignSelf="center"
              borderRadius="15"
              height="50"
              width="90%"
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
              width="90%"
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
              width="90%"
              placeholder="Password"
              type={this.state.show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => this.togglePasswordVisibility()}>
              <Icon
                as={
                  <MaterialIcons
                    name={this.state.show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
            />
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
}
export default Profil;
