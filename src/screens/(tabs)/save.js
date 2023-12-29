import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, Center, Image, Input, Icon, Pressable } from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import resep from "../../dummy/resep";

const Save = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search:', searchText);
  };

  const renderPopularSearchItem = (item) => (
    <Pressable
      key={item.id}
      mr="10"
      width="45%"
      justifyContent="center"
      alignItems="center"
      onPress={() => navigation.navigate('Resep', { item })}
    >
      <Image
        width="100%"
        height="100%"
        borderRadius={10}
        source={{ uri: item.image }}
      />
      <Box
        justifyContent="center"
        height="50%"
        width="100%"
        opacity={0.5}
        alignItems="center"
        alignSelf="center"
        position="absolute"
        bg="black"
      >
        <Text fontSize="20" fontWeight="bold" color="white">
          {item.title}
        </Text>
      </Box>
    </Pressable>
  );

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
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              InputLeftElement={
                <Icon
                  ml="2"
                  size="8"
                  color="black"
                  as={<Ionicons name="ios-search" />}
                />
              }
              InputRightElement={
                <Pressable onPress={handleSearch} pr="2">
                  <AntDesign name="search1" size={24} color="black" />
                </Pressable>
              }
            />
            {/* History Section */}
            {/* ... your existing code ... */}
            {/* Popular Search Section */}
            <Text mb="5" fontWeight="bold">
              Popular Search
            </Text>
            <Box size="100%" flexDirection="column">
              <Box height="18%" mb="5" flexDirection="row">
                {resep.slice(0, 2).map(renderPopularSearchItem)}
              </Box>
              <Box height="18%" mb="5" flexDirection="row">
                {resep.slice(2, 4).map(renderPopularSearchItem)}
              </Box>
              <Box height="18%" mb="5" flexDirection="row">
                {resep.slice(4, 6).map(renderPopularSearchItem)}
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default Save;
