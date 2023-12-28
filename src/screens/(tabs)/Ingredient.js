import React, { useState } from "react";
import { View, Heading, Box, Text, Image, ScrollView, HStack, Checkbox, Button, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Ingredient = ({ route }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isLoved, setIsLoved] = useState(false);
  const navigation = useNavigation();
  const params = route.params.item;

  const handleCheckboxChange = (value) => {
    // Toggle checkbox value in selectedIngredients
    const updatedIngredients = selectedIngredients.includes(value)
      ? selectedIngredients.filter((ingredient) => ingredient !== value)
      : [...selectedIngredients, value];

    setSelectedIngredients(updatedIngredients);
  };

  return (
    <View flex={1} bg={"#F8F6EB"}>
      <ScrollView>
        <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}>
          <Icon as={Ionicons} name="arrow-back" size={10} color="black" />
        </Pressable>
        <Box p={4} mt={6}>
          <Image
            source={{ uri: params.image }}
            alt="News Image"
            w={280}
            h={200}
            resizeMode="cover"
            alignSelf="center"
            borderRadius={25}
            mt={10}
            mb={4}
          />
          <Box ml={6} mt={4}>
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Heading size="lg" color="grey" numberOfLines={1} flex={1}>
                {params.title}
              </Heading>
            </Box>
            <Text fontSize={20} fontWeight={500} mb={2}>Bahan-bahan</Text>
            {params.ingredients.map((ingredient, index) => (
              <Checkbox
                key={index}
                value={selectedIngredients.includes(ingredient)}
                onChange={() => handleCheckboxChange(ingredient)}
                ml={2}
                mr={2}
                rounded="full"
                colorScheme="orange"
              >
                {ingredient}
              </Checkbox>
            ))}
          </Box>
        </Box>
        <Box alignItems="center" padding={20} flexDirection="row" justifyContent="center">
          <Button
            size="lg"
            borderRadius={10}
            mr={5}
            onPress={() => navigation.navigate("Recipe", { params: params })}
            bg="#FAA70A"
          >
            Watch Recipe
          </Button>

          <Button
            size={"lg"}
            borderRadius={50}
            onPress={() => setIsLoved(!isLoved)}
            bg="#FAA70A"
          >
            <Icon as={Ionicons} color={isLoved ? "#FFFFFF" : "#F8F6EB"} name="heart" />
          </Button>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Ingredient;
