import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { CartSlice } from "../store/CartSlice";
import { useSelector, useDispatch } from "react-redux";
const ProductDetails = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(CartSlice.actions.addCartItem({ product }));
  };
  const styles = StyleSheet.create({
    image: { width: width, aspectRatio: 1 },
    title: {
      fontSize: 24,
      fontWeight: "500",
      marginVertical: 10,
    },
    price: {
      fontWeight: "500",
      fontSize: 16,
    },
    description: {
      marginVertical: 10,
      fontSize: 18,
      lineHeight: 30,
      fontWeight: "300",
    },
    button: {
      backgroundColor: "black",
      position: "absolute",
      width: "90%",
      alignSelf: "center",
      bottom: 10,
      padding: 20,
      borderRadius: 100,
      alignItems: "center",
    },
    button_text: {
      color: "white",
      fontWeight: "500",
      fontSize: 16,
    },
  });
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.button_text}>Add To Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;
