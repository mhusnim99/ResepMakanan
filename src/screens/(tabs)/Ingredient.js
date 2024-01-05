import React, { useState, useEffect } from "react";
import { View, Heading, Box, Text, Image, ScrollView, HStack, Checkbox, Button, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Ingredient = ({ route }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isLoved, setIsLoved] = useState(false);
  const navigation = useNavigation();
  const params = route.params.item;

  // Load saved ingredients on component mount
  useEffect(() => {
    const loadSavedIngredients = async () => {
      try {
        const savedIngredientsJSON = await AsyncStorage.getItem("selectedIngredients");
        if (savedIngredientsJSON) {
          const savedIngredients = JSON.parse(savedIngredientsJSON);
          setSelectedIngredients(savedIngredients);
          setIsLoved(savedIngredients.some(ingredient => ingredient.title === params.title));
        }
      } catch (error) {
        console.error("Error loading saved ingredients:", error.message);
      }
    };

    loadSavedIngredients();
  }, [params.title]);

  const handleCheckboxChange = (value) => {
    // Toggle checkbox value in selectedIngredients
    const updatedIngredients = selectedIngredients.includes(value)
      ? selectedIngredients.filter((ingredient) => ingredient !== value)
      : [...selectedIngredients, value];

    setSelectedIngredients(updatedIngredients);
  };

  const handleSave = async () => {
    try {
      // Save selected ingredients along with the recipe title to AsyncStorage
      const updatedIngredients = [...selectedIngredients, { title: params.title, ingredients: params.ingredients }];
      await AsyncStorage.setItem("selectedIngredients", JSON.stringify(updatedIngredients));
      setIsLoved(true);
      console.log("Selected Ingredients saved successfully!");
    } catch (error) {
      console.error("Error saving selected ingredients:", error.message);
    }
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
        <Box alignItems="center" padding={10} flexDirection="row" justifyContent="center">
          <Button
            size="lg"
            borderRadius={10}
            mr={5}
            onPress={() => navigation.navigate("Ulasan", { params: params })}
            bg="#FAA70A"
          >
            Review
          </Button>
          <Button
            size={"lg"}
            borderRadius={50}
            onPress={handleSave}
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
