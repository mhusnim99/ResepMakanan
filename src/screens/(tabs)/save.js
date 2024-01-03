import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesScreen = () => {
  const [savedIngredients, setSavedIngredients] = useState([]);

  // Load saved ingredients on component mount
  useEffect(() => {
    const loadSavedIngredients = async () => {
      try {
        const savedIngredientsJSON = await AsyncStorage.getItem("selectedIngredients");
        if (savedIngredientsJSON) {
          const savedIngredientsArray = JSON.parse(savedIngredientsJSON);
          setSavedIngredients(savedIngredientsArray);
        }
      } catch (error) {
        console.error("Error loading saved ingredients:", error.message);
      }
    };

    loadSavedIngredients();
  }, []);

  return (
    <View>
      <Text>Favorites Screen</Text>
      <ScrollView>
        {/* Display saved ingredients */}
        {savedIngredients.map((ingredient, index) => (
          <View key={index}>
            <Text>{ingredient}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
