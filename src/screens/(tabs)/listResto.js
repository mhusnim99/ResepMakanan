import React from 'react';
import { Box, VStack, HStack, Text, Image, Button, FlatList, Pressable, Icon } from 'native-base';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import restaurant from "../../dummy/restaurant"; 

const List = () => {
    const navigation = useNavigation(); 
    const renderItem = ({item}) => {
        return (
            <Box bgColor='#FAF8ED'> 
                <Box
                    key={item.id}
                    borderWidth={1}
                    borderRadius={15}
                    backgroundColor="#FAA70A"
                    padding={5}
                    marginHorizontal={15}
                    marginTop={10}
                >
                    <HStack space={3}>
                        <Box width="40%">
                            <Image
                                source={{ uri: item.image }}
                                alt={item.name}
                                width= '100%'
                                h= {150}       
                                resizeMode='cover' 
                                borderRadius={15}
                            />
                        </Box>
                        <Box width='60%'>
                            <VStack>
                                <Text color="warmGray.50" fontSize={14}>
                                    {item.nama}
                                </Text>
                                <Text marginTop={5} fontSize={10}>Alamat</Text>
                                <Text fontSize={10}>{item.Alamat}</Text>
                            </VStack>
                        </Box>
                    </HStack>
                </Box>
            </Box>
        );
    };

    return (
        <>
        <SafeAreaView>
        <Box alignItems="center" bgColor='#FAF8ED' >
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} >
            <Text color='white' fontSize={18}>LIST RESTAURANT</Text>
          </Button>
        </Box>
      </SafeAreaView>
        <FlatList
          data={restaurant}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        </>
    );
};    
   
export default List;