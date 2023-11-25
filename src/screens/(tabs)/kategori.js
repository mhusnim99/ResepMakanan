import React from "react";
import { Heading, Image, Text, FlatList, Center } from "native-base";
import { Box, ScrollView } from "native-base";
import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import dakat from "../../dummy/dakat";

const Kategori = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
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
        data={dakat}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Kategori;
