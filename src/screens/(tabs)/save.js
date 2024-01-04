import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect } from '@react-navigation/native';


const FavoritesScreen = () => {
  const [savedIngredients, setSavedIngredients] = useState([]);

  // Load saved ingredients on component mount
  useFocusEffect(
    React.useCallback(() => {
      loadSavedIngredients();
    }, [])
  );

    const loadSavedIngredients = async () => {
      try {
        const savedIngredientsJSON = await AsyncStorage.getItem("selectedIngredients");
        if (savedIngredientsJSON) {
          const savedIngredientsArray = JSON.parse(savedIngredientsJSON);
          console.log("Loaded Ingredients:", savedIngredientsArray);
          setSavedIngredients(savedIngredientsArray);
        }
      } catch (error) {
        console.error("Error loading saved ingredients:", error.message);
      }
    };


  const deleteIngredient = async (index) => {
    try {
      // Create a copy of the current savedIngredients array
      const updatedIngredients = [...savedIngredients];
      // Remove the selected ingredient
      updatedIngredients.splice(index, 1);
      // Update the state and AsyncStorage
      setSavedIngredients(updatedIngredients);
      await AsyncStorage.setItem("selectedIngredients", JSON.stringify(updatedIngredients));
    } catch (error) {
      console.error("Error deleting ingredient:", error.message);
    }
  };

  const confirmDelete = (index) => {
    Alert.alert(
      "Delete Ingredient",
      "Are you sure you want to delete this ingredient?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => deleteIngredient(index) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Halaman Favorit</Text>
      <ScrollView style={styles.scrollView}>
        {savedIngredients.map((recipe, index) => (
          <View key={index} style={styles.recipeContainer}>
            {recipe && (
              <View>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <TouchableOpacity onPress={() => confirmDelete(index)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F6EB",
  },
  header: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  recipeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    paddingVertical: 12,
  },
  recipeTitle: {
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
  },
});

export default FavoritesScreen;