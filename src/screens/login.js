import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, FormControl } from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import Register from './register';
// import Tabs from './(tabs)/_layout';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const navigation = useNavigation();

  return (
      <Box flex={1} p={4} alignItems='center' justifyContent='center' bg='#FAA70A'>
        <Heading 
        paddingBottom={50}
        color= "#FAF8ED"
        fontSize="33"
        >Login</Heading>
        <FormControl p={10} paddingBottom={0.10}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
        <FormControl p={10}>
          <FormControl.Label>Kata Sandi</FormControl.Label>
          <Input
            placeholder="Kata Sandi"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureText
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
          <Text mt={2} >Don't have an account ?<Text color="blue.500" onPress={()=> navigation.navigate('Register')}> Register Here</Text></Text>
        </FormControl>
        <Box alignItems="center" p={30} borderRadius={15} >
            <Button bg='#FAF8ED' borderRadius={15}  onPress={() => navigation.navigate("Tabs")}>
                <Text color='#FAA70A' fontSize={17}>Login</Text>
            </Button>
        </Box>
      </Box>
  );
};

export default Login;