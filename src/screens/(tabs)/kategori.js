import React from "react";
import { Heading, Image, Text, FlatList, Center } from "native-base";
import { Box, ScrollView } from "native-base";
import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import datas from "../../dummy/dakat";
import resep from "../../dummy/resep";

const Kategori = () => {
  const navigation = useNavigation();
  const calculator = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Kalkulator")}
      >
        <Box
          padding={"2"}
          marginLeft={"4"}
          marginRight={"4"}>
          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Image
              source={{ uri: item.image }}
              w="350"
              h="230"
              borderRadius={"lg"}
              alt="Image Data"
            />
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };



  const kalorirendah = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("kalorirendah")}
      >
        <Box
          padding={"2"}
          marginLeft={"4"}
          marginRight={"4"}>
          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Image
              source={{ uri: item.image }}
              w="350"
              h="230"
              borderRadius={"lg"}
              alt="Image Data"
            />
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  const kaloritinggi = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("kaloritinggi")}
      >
        <Box
          padding={"2"}
          marginLeft={"4"}
          marginRight={"4"}>
          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Image
              source={{ uri: item.image }}
              w="350"
              h="230"
              borderRadius={"lg"}
              alt="Image Data"
            />
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView>
        <Box alignItems="center">
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} >
            <Text color='white' fontSize={18}>Kategori</Text>
          </Button>
        </Box>
      </SafeAreaView>
      <FlatList
        data={datas}
        renderItem={({ item }) => {
          switch (item.halaman) {
            case 'calculator':
              return calculator({ item });
            case 'kalorirendah':
              return kalorirendah({ item });
            case `kaloritinggi`:
              return kaloritinggi({ item });
            default:
              return null; // Handle unknown halaman values
          }
        }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />



    </>
  );
};

export default Kategori;
