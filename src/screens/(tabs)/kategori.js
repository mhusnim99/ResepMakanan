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
        <Box padding={"2"} marginLeft={"4"} marginRight={"4"}>
          <Heading
            fontSize={"35"}
            lineHeight={"xs"}
            ellipsizeMode="tail"
            numberOfLines={2}
            zIndex={1} 
            position="absolute"
            bottom={5}
            p={8}
            color={"black"}
            // backgroundColor="white"
          >
            {item.title}
          </Heading>
          <Image
            source={{ uri: item.image }}
            w="350"
            h="250"
            alt="Image Data"
            mb={"1"}
            borderRadius={10}
          />
        </Box>
      </TouchableOpacity>
    );
  };

  const kalorirendah = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Kalorirendah", { recipes: getLowCalorieRecipes() })}
    >
      <Box padding={"2"} marginLeft={"4"} marginRight={"4"}>
          <Heading
            fontSize={"35"}
            lineHeight={"xs"}
            ellipsizeMode="tail"
            numberOfLines={2}
            zIndex={1} 
            position="absolute"
            bottom={5}
            p={8}
            color={"white"}
            // backgroundColor="white"
          >
            {item.title}
          </Heading>
          <Image
            source={{ uri: item.image }}
            w="350"
            h="250"
            alt="Image Data"
            mb={"1"}
            borderRadius={10}
          />
        </Box>
    </TouchableOpacity>
  );
  
  const getLowCalorieRecipes = () => resep.filter(recipe => recipe.kalori < 500);

  const kaloritinggi = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Kaloritinggi", { recipes: getHighCalorieRecipes() })}
    >
      <Box padding={"2"} marginLeft={"4"} marginRight={"4"}>
          <Heading
            fontSize={"35"}
            lineHeight={"xs"}
            ellipsizeMode="tail"
            numberOfLines={2}
            zIndex={1} 
            position="absolute"
            bottom={5}
            p={8}
            color={"white"}
            // backgroundColor="white"
          >
            {item.title}
          </Heading>
          <Image
            source={{ uri: item.image }}
            w="350"
            h="250"
            alt="Image Data"
            mb={"1"}
            borderRadius={10}
          />
        </Box>
    </TouchableOpacity>
  );

    const getHighCalorieRecipes = () => resep.filter(recipe => recipe.kalori > 500);

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