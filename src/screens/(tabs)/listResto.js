import React from 'react';
import { Box, VStack, HStack, Text, Image, Button, FlatList, Pressable, Icon } from 'native-base';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const datas= [
    {
        id: 1,
        image: require('../../../assets/resto1.png'),
        nama: "The Dining - Chamas Brazilian Churrascaria",
        Alamat: "Vasa Hotel Surabaya, Jl. Mayjen HR. Muhammad No.31, Putat Gede, Kec. Sukomanunggal, Surabaya, Jawa Timur 60189"
    },
    {
        id: 2,
        image: require('../../../assets/resto2.png'),
        nama: "Pavillion Restaurant",
        Alamat: "JW Marriott Surabaya, JL. Embong Malang No. 85-89, 60261, Kedungdoro, Kec. Tegalsari, Surabaya, Jawa Timur 60261"
    },
    {
        id: 3,
        image: require('../../../assets/resto3.png'),
        nama: "Seventeen Restaurant & Lounge Surabaya",
        Alamat: "Harris Hotel & Conventions, Lantai 17Jl. Bangka No. 8 - 18, Gubeng, Surabaya"
    },
    {
        id: 4,
        image: require('../../../assets/resto4.png'),
        nama: "Kayu Contemporary Japanese Restaurant",
        Alamat: "Srijaya, Jl. Mayjen Sungkono No.212-214, Putat Gede, Kec. Sukomanunggal, Surabaya, Jawa Timur 60189"
    },
    {
        id: 5,
        image: require('../../../assets/resto5.png'),
        nama: "Magnolia Restaurant at Westin Surabaya",
        Alamat: "Westin Surabaya, Jalan Puncak Indah Jl. Raya Lontar No.2, Surabaya, Jawa Timur 60216"
    },

]

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
                                source={item.image}
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
            <Box flex={1} bg='#FAF8ED' p={10} alignItems='center' marginBottom={10}>
                <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 20, zIndex: 1 }}>
                    <Icon as={Ionicons} name="arrow-back" size={10} color="black" />
                </Pressable>
                <Button marginBottom={"10"} backgroundColor='#FAA70A' width={"252"} height={"60"} fontWeight={"extraBlack"} size={"lg"} borderRadius={10}>
                <Text color='white' fontSize={18}>List Restaurant</Text>
                </Button>
            </Box>
            {/* <Box alignItems="center" bgColor='#FAF8ED'>
                <Button marginBottom={"5"} backgroundColor='#FAA70A' width={"252"} height={"60"} fontWeight={"extraBlack"} size={"lg"} borderRadius={10}>
                <Text color='white' fontSize={18}>List Restaurant</Text>
                </Button>
            </Box> */}
        </SafeAreaView>
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        </>
    );
};    
   
export default List;