import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export const Archieved = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Solo dios sabe que cuerno voy a poner en esta screen :P
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
});
