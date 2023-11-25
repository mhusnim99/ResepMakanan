import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, FormControl,} from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import Login from './login';

const SignUp = () => {

  const [name, setName] = useState('');
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
        >Sign Up</Heading>
        <FormControl p={10} paddingBottom={0.10}>
          <FormControl.Label>Name</FormControl.Label>
          <Input
            placeholder="Enter Username"
            value={name}
            onChangeText={(text) => setName(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
        <FormControl p={10} paddingBottom={0.10}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
        </FormControl>
        <FormControl p={10}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Enter Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureText
            mb={2}
            bgColor='#FAF8ED'
            borderRadius={15}
          />
          <Text mt={2} >Already have an account?<Text color="blue.500" onPress={()=> navigation.navigate('Login')}>Login</Text></Text>
        </FormControl>
        <Box alignItems="center" p={30} borderRadius={15} >
            <Button bg='#FAF8ED' borderRadius={15} >
                <Text color='#FAA70A' fontSize={17}>Sign Up</Text>
            </Button>
        </Box>
      </Box>
  );
};

export default SignUp;