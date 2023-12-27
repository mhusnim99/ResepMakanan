import React, { Component } from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  Image,
  Input,
  Icon,
  Pressable,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import data from '../data';

class Daftar extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <NativeBaseProvider>
        <Box bg="#fefce8" size="100%">
          <Center p="3" size="100%" flexDirection="row" alignItems="flex-start">
            <Box flexDirection="column" size="100%">
              <Input
                mt="10"
                mb="2"
                bg="white"
                placeholder="Search"
                placeholderTextColor="black"
                fontSize="18"
                fontWeight="bold"
                color="black"
                variant="filled"
                width="100%"
                height="7%"
                borderRadius="20"
                py="1"
                px="2"
                InputLeftElement={
                  <Icon
                    ml="2"
                    size="8"
                    color="black"
                    as={<Ionicons name="ios-search" />}
                  />
                }
              />
              <Box
                alignSelf="center"
                mt="7"
                mb="2"
                bg="white"
                borderColor="blue.700"
                borderWidth="2"
                width="95%">
                <Text ml="3" mb="5" fontWeight="bold" fontSize="15">
                  History
                </Text>
                <Box flexDirection="row">
                  <Text ml="5" mr="180" mb="1" fontSize="15">
                    Seblak Pedas
                  </Text>
                  <AntDesign
                    ml="50"
                    name="closecircleo"
                    size={24}
                    color="black"
                  />
                </Box>
                <Box flexDirection="row">
                  <Text ml="5" mr="186" mb="1" fontSize="15">
                    Mie Nyemek
                  </Text>
                  <AntDesign
                    ml="50"
                    name="closecircleo"
                    size={24}
                    color="black"
                  />
                </Box>
                <Box mb="2" flexDirection="row">
                  <Text ml="5" mr="220" mb="1" fontSize="15">
                    Gudeg
                  </Text>
                  <AntDesign
                    ml="50"
                    name="closecircleo"
                    size={24}
                    color="black"
                  />
                </Box>
              </Box>
              <Text mb="5" fontWeight="bold">
                Popular Search
              </Text>
              <Box size="100%" flexDirection="column">
                <Box height="18%" mb="5" flexDirection="row">
                  <Pressable
                    mr="10"
                    width="45%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() =>
                      navigation.navigate('Resep', { item: data[0] })
                    }>
                    <Image
                      data={data}
                      width="100%"
                      height="100%"
                      borderRadius={10}
                      source={{ uri: data[0].image }}
                    />
                    <Box
                      justifyContent="center"
                      height="50%"
                      width="100%"
                      opacity={0.5}
                      alignItems="center"
                      alignSelf="center"
                      position="absolute"
                      bg="black">
                      <Text fontSize="20" fontWeight="bold" color="white">
                        {data[0].title}
                      </Text>
                    </Box>
                  </Pressable>

                  <Pressable
                    mr="10"
                    width="45%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() =>
                      navigation.navigate('Resep', { item: data[1] })
                    }>
                    <Image
                      width="100%"
                      height="100%"
                      borderRadius={10}
                      source={{ uri: data[1].image }}
                    />
                    <Box
                      justifyContent="center"
                      height="50%"
                      width="100%"
                      opacity={0.5}
                      alignItems="center"
                      alignSelf="center"
                      position="absolute"
                      bg="black">
                      <Text fontSize="20" fontWeight="bold" color="white">
                        {data[1].title}
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
                <Box height="18%" mb="5" flexDirection="row">
                  <Pressable
                    mr="10"
                    width="45%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() =>
                      navigation.navigate('Resep', { item: data[2] })
                    }>
                    <Image
                      width="100%"
                      height="100%"
                      borderRadius={10}
                      source={{ uri: data[2].image }}
                    />
                    <Box
                      justifyContent="center"
                      height="50%"
                      width="100%"
                      opacity={0.5}
                      alignItems="center"
                      alignSelf="center"
                      position="absolute"
                      bg="black">
                      <Text fontSize="20" fontWeight="bold" color="white">
                        {data[2].title}
                      </Text>
                    </Box>
                  </Pressable>

                  <Pressable
                    mr="10"
                    width="45%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() =>
                      navigation.navigate('Resep', { item: data[3] })
                    }>
                    <Image
                      width="100%"
                      height="100%"
                      borderRadius={10}
                      source={{ uri: data[3].image }}
                    />
                    <Box
                      justifyContent="center"
                      height="50%"
                      width="100%"
                      opacity={0.5}
                      alignItems="center"
                      alignSelf="center"
                      position="absolute"
                      bg="black">
                      <Text fontSize="20" fontWeight="bold" color="white">
                        {data[3].title}
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
                <Box height="18%" mb="5" flexDirection="row">
                  <Pressable
                    mr="10"
                    width="45%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() =>
                      navigation.navigate('Resep', { item: data[4] })
                    }>
                    <Image
                      width="100%"
                      height="100%"
                      borderRadius={10}
                      source={{ uri: data[4].image }}
                    />
                    <Box
                      justifyContent="center"
                      height="50%"
                      width="100%"
                      opacity={0.5}
                      alignItems="center"
                      alignSelf="center"
                      position="absolute"
                      bg="black">
                      <Text fontSize="20" fontWeight="bold" color="white">
                        {data[4].title}
                      </Text>
                    </Box>
                  </Pressable>
                  <Pressable
                    mr="10"
                    width="45%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() =>
                      navigation.navigate('Resep', { item: data[5] })
                    }>
                    <Image
                      width="100%"
                      height="100%"
                      borderRadius={10}
                      source={{ uri: data[5].image }}
                    />
                    <Box
                      justifyContent="center"
                      height="50%"
                      width="100%"
                      opacity={0.5}
                      alignItems="center"
                      alignSelf="center"
                      position="absolute"
                      bg="black">
                      <Text fontSize="20" fontWeight="bold" color="white">
                        {data[5].title}
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
      </NativeBaseProvider>
    );
  }
}

export default Daftar;
