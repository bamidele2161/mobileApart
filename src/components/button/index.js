import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./style";

const PrimaryButton = ({ title, onPress, loading }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
