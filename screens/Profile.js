import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ImageSelector from "../components/ImageSelector";

export const Profile = () => {
  const [text, setText] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
  });
  const [image, setImage] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.imgWrapper}>
        <ImageSelector
          onImage={(image) => console.log(image)}
          setImage={setImage}
        />
        <Text style={styles.profileName}>Profile Name</Text>
      </KeyboardAvoidingView>

      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(usernameField) =>
            setText({ ...text, username: usernameField })
          }
          value={text}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(nameField) => setText({ ...text, name: nameField })}
          value={text}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          onChangeText={(surnameField) =>
            setText({ ...text, surname: surnameField })
          }
          value={text}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(emailField) => setText({ ...text, email: emailField })}
          value={text}
          keyboardType="text"
        />

        <View>
          <View style={styles.buttonsOpcs}>
            <Button
              title="Discard"
              color="red"
              onPress={() => Alert.alert("Left button pressed")}
            />
            <Button
              title="Save Changes"
              color="green"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
      </ScrollView>
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

  imgWrapper: {
    flexDirection: "column",
    backgroundColor: "lightblue",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  // avatarImg: {
  //   width: 150,
  //   height: 150,
  //   backgroundColor: "#FFF",
  //   borderRadius: 100,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderColor: "#6204e8",
  //   borderWidth: 2,
  // },

  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
  },

  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  buttonsOpcs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});
