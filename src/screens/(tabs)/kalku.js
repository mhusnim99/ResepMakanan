import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, FormControl, NativeBaseProvider, ScrollView, Image, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Rekomkal from "../../dummy/rekomkal";
import { HStack } from 'native-base';

const Calcucalator = () => {

  const [tinggibadan, settinggibadan] = useState('');
  const [beratbadan, setberatbadan] = useState('');
  const [umur, setumur] = useState('');

  const handleSubmit = () => {
    console.log('tinggibadan:', tinggibadan);
    console.log('beratbadan:', beratbadan);
    console.log('umur:', umur);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
          <Box bg='white'>
            <TouchableOpacity onPress={() => navigation.navigate('Kategori')}>
              <Image
                source={require("../../images/arrow.jpg")}
                style={{ width: 18, height: 18 }}
                alt='Image Data'
                ml={"5"}
                mt={"3"}
                size={"2xl"}
              />
            </TouchableOpacity>
          </Box>
          <Box flex={1} p={4} alignItems='center' justifyContent='center' bg='white'>
            <Box alignItems="center">
              <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} >
                <Text color='white' fontSize={21}>BMI Calcucalator</Text>
              </Button>
            </Box>
            <FormControl>
              <FormControl.Label>tinggi badan</FormControl.Label>
              <Input
                placeholder="Masukkan Angka"
                value={tinggibadan}
                onChangeText={(text) => settinggibadan(text)}
                mb={2}
                bgColor='white'
                borderRadius={15}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>berat badan</FormControl.Label>
              <Input
                placeholder="Masukkan Angka"
                value={beratbadan}
                onChangeText={(text) => setberatbadan(text)}
                mb={2}
                bgColor='white'
                borderRadius={15}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>umur</FormControl.Label>
              <Input
                placeholder="Masukkan Angka"
                value={umur}
                onChangeText={(text) => setumur(text)}
                secureText
                mb={2}
                bgColor='white'
                borderRadius={15}
              />
              <Box alignItems="center" mt={"4"} borderRadius={15} >
                <Button bg={"yellow.500"} borderRadius={15} width={"230"} height={"46"} >
                  <Text color='white' fontSize={20}>Hitung</Text>
                </Button>
              </Box>
              <FormControl>
                <FormControl.Label>Hasil</FormControl.Label>
                <Input
                  value={beratbadan}
                  onChangeText={(text) => setberatbadan(text)}
                  mb={2}
                  bgColor='white'
                  borderRadius={15}
                />
              </FormControl>
            </FormControl>
            <Text mt={2} >Berikut ini makanan yang <Text color="blue.500" onPress={() => navigation.navigate('Kategori')}>direkomendasikan</Text></Text>
          </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calcucalator;