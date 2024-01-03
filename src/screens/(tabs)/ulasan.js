import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Ulasan = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const loadSavedItems = async () => {
      try {
        const savedItemsJSON = await AsyncStorage.getItem("selectedIngredients");
        if (savedItemsJSON) {
          const savedItemsData = JSON.parse(savedItemsJSON);
          setSavedItems(savedItemsData);
        }
      } catch (error) {
        console.error("Error loading saved items:", error.message);
      }
    };

    loadSavedItems();
  }, []);

  return (
    <View flex={1} bg="#F8F6EB">
      <ScrollView>
        <Text>Ulasan Screen</Text>
        <Text>Saved Items:</Text>
        {savedItems.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Ulasan;
