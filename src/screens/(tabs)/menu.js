import React, { Component } from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';

class Menu extends Component {
  render() {
    return (
      <NativeBaseProvider>
      <Box>
        <Text>Hello, World! Menu</Text>
        </Box>
      </NativeBaseProvider>
    );
  }
}

export default Menu;