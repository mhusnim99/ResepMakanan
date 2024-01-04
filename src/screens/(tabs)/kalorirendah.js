import React from "react";
import { Box, Center, Heading, Image, Text, Divider } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Kalorirendah = ({ route }) => {
  const { recipes } = route.params;
  const navigation = useNavigation();
  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Ingredient", { item: item })}
      >
      <Box
        // borderWidth={1}
        // borderRadius="md"
        overflow="hidden"
        margin={2}
        padding={4}
        backgroundColor="white"
        shadow={2}
        flexDirection="row"
        alignItems="center"
      >
        <Image
          source={{ uri: item.image }}
          alt="Recipe Image"
          height={100}
          width={100}
          resizeMode="cover"
          borderRadius="md"
          marginRight={4}
        />
        <Box>
          <Heading size="md" marginBottom={2}>
            {item.title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Kalori: {item.kalori}
          </Text>
          {/* Add other recipe details as needed */}
        </Box>
      </Box>
    </TouchableOpacity>
  );

  return (
    <Center flex={1} backgroundColor="#F8F6EB">
      <SafeAreaView>
        <Heading size="lg" marginBottom={4} marginTop={6} textAlign="center">
          RENDAH KALORI
        </Heading>
        <Divider borderBottomWidth={1} marginBottom={4} />
      </SafeAreaView>
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Center>
  );
};

export default Kalorirendah;
