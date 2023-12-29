import React from "react";
import { Center, Box, FormControl, Input, Button, Text, ScrollView, Pressable, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation(); 

  return (
    <ScrollView>
      <Box flex={1} bg='#FAF8ED'>
        <Box flex={1} bg='#FAF8ED' p={10} alignItems='center'>
          <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}>
            <Icon as={Ionicons} name="arrow-back" size={10} color="black" />
          </Pressable>
        </Box>
        <Box flex={1} bg='#FAF8ED' p={30} alignItems='center'>
        <Center 
        bg="#FAA70A" 
        _text={{
            color: "warmGray.50",
            fontSize:"25",
            }} 
        height={12} 
        width={{
            base: 200,
            lg: 250}}
        borderRadius={15}
        >
                Edit Profile
        </Center>
    
        </Box>
        <Box flex={2} bg='#FAA70A'  borderTopRadius={80}>
            <Box>
                <FormControl p={30} >
                    <FormControl.Label>Name</FormControl.Label>
                    <Input 
                    bg={"white"} 
                    borderRadius={15} 
                    value="Putri Anggiyarani"/>
                </FormControl>
                <FormControl paddingTop={1} p={30} >
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input 
                    bg={"white"} 
                    borderRadius={15} 
                    value="putrianggiyarani@gmail.com"/>
                </FormControl>
                <FormControl paddingTop={1} p={30} >
                    <FormControl.Label>Enter Old Password</FormControl.Label>
                    <Input
                    bg={"white"}
                    borderRadius={15} />
                </FormControl>
                <FormControl paddingTop={1} p={30} >
                    <FormControl.Label>Create New Password</FormControl.Label>
                    <Input 
                    bg={"white"}
                    borderRadius={15}
                        />
                </FormControl>
            </Box>
            <Box alignItems="center" p={38} >
                <Button bg='#FAF8ED' borderRadius={15} >
                <Text color='#FAA70A'>Update Profile</Text>
                </Button>
            </Box>
        </Box>
    </Box>
    </ScrollView>
  );
};

export default EditProfile;