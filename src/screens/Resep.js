import React, { Component } from 'react';
import { NativeBaseProvider, Box, Text, Image } from 'native-base';

class Resep extends Component {
  render() {
    const { route, navigation } = this.props;
    const { item } = route.params;
    return (
      <NativeBaseProvider>
      <Image
          source={{ uri: item.image }}
          w="100%"
          h="40%"
          alt="Image Data"
          mb={'2'}
        />
        <Box>
        <Text fontSize="20" fontWeight="bold" textAlign={'center'}>Resep makanan {item.title}</Text>
        <Text mx="5" fontSize="15" textAlign={'justify'}>Resep makanan {item.content}</Text>
      </Box>
      </NativeBaseProvider>
    );
  }
}

export default Resep;
