
import { Text, Pressable, View } from "@gluestack-ui/themed";
import React from "react";

const Button = ({ padding, title, onPress, fontSize }) => {
  return (
    <Pressable onPress={onPress} padding={padding} backgroundColor="$white" borderRadius={"$xl"} my={"$3"}>
      <Text color="$yellow500" textAlign="center" fontSize={fontSize ? fontSize : "$lg"}>{title}</Text>
    </Pressable>
  );
};

export default Button;

