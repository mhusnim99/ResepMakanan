import React, { Component } from 'react';
import { NativeBaseProvider, Box, Text, Center, Image, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import data from '../../dummy/data';

class Favorit extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <NativeBaseProvider>
        <Center
          bg="#fefce8"
          size="100%"
          flexDirection="row"
          alignItems="flex-end">
          <Box size="95%">
            <Box
              mt="10"
              borderRadius="20"
              alignSelf="center"
              alignItems="center"
              width="60%"
              bg="#fb923c">
              <Text
                color="white"
                fontFamily="Poppins"
                fontSize="40"
                fontWeight="bold">
                Favorit
              </Text>
            </Box>
            <Box
              flexDirection="row"
              mt="5"
              borderRadius="20"
              alignSelf="center"
              alignItems="center"
              width="90%"
              height="17%"
              bg="#fb923c">
              <Image
                alt={data[0].title}
                ml="5"
                size="100"
                borderRadius={10}
                source={{uri: data[0].image}}
              />
              <Text
                ml="3"
                color="white"
                fontFamily="Poppins"
                fontSize="25"
                fontWeight="bold">
                {data[0].title}
              </Text>
              <Button ml="3" bg="white" p="1" borderRadius="100" onPress={() => navigation.navigate('Resep', { item: data[0] })} >
                <MaterialIcons name="favorite"  size={24} color="#fb923c" />
              </Button>
            </Box>
            <Box
              flexDirection="row"
              mt="5"
              borderRadius="20"
              alignSelf="center"
              alignItems="center"
              width="90%"
              height="17%"
              bg="#fb923c">
              <Image
                alt={data[1].title}
                ml="5"
                size="100"
                borderRadius={10}
                source={{uri: data[1].image}}
              />
              <Text
                ml="3"
                color="white"
                fontFamily="Poppins"
                fontSize="23"
                fontWeight="bold">
                {data[1].title}
              </Text>
              <Button ml="3" bg="white" p="1" borderRadius="100" onPress={() => navigation.navigate('Resep', { item: data[1] })}>
                <MaterialIcons name="favorite"  size={24} color="#fb923c" />
              </Button>
            </Box>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Favorit;
