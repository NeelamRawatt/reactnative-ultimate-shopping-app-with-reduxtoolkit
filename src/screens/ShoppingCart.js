import {
  Text,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { selectedSubTotal } from "../store/CartSlice";
const ShoppingCart = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const SubTotal = useSelector(selectedSubTotal);
  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <FlatList
          data={cartItem}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          ListFooterComponent={() => (
            <View style={styles.container}>
              <View style={styles.row}>
                <Text style={styles.text}>SubTotal</Text>
                <Text style={styles.text}>{SubTotal}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>10,00 US$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>420,00 US$</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
      <Pressable style={styles.button}>
        <Text style={styles.button_text}>CheckOut`</Text>
      </Pressable>
    </>
  );
};
export default ShoppingCart;
//If the platform is Android (i.e., Platform.OS equals "android"), it sets the paddingTop property to StatusBar.currentHeight.
//StatusBar.currentHeight returns the height of the status bar on Android devices, and this value is used to create the safe area at the top
//of the screen. If the platform is not Android (iOS or other), it sets the paddingTop to 0, meaning no extra padding is added.
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,

    fontWeight: "500",
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
