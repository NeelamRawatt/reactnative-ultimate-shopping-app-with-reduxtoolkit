import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductSlice } from "../store/ProductSilce";
import React from "react";
//INSTEAD OF IMPORTING IT LIKE THIS WE WILL ACCESS IT FROM REDUX STORE
//import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
const ProductScreen = ({ navigation }) => {
  //u can use this instead of accepting navigation as prop
  // const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // Update selected product using react redux
            dispatch(ProductSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
  },
});
