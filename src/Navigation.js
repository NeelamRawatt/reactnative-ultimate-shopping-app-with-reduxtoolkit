import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./screens/ProductDetails";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";
import { selectedNumberOfItems } from "./store/CartSlice";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const NumberOfitem = useSelector(selectedNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Shopping Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {NumberOfitem}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
