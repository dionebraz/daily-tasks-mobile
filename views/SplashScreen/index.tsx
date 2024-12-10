import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated, Text } from "react-native";
import { COLORS } from "@/app/theme";
import Icon from "../../assets/images/splash-screen-icon.png";

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnimation, alignItems: "center" }}>
        <Image style={styles.image} source={Icon} />
      </Animated.View>
      <Text style={styles.footer}>Versão - 1.0.2 | Feito por <Text style={styles.span}>Dione Braz</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "red",
    backgroundColor: COLORS.background,
  },
  image: {
    width: 250,
    height: 220,
    resizeMode: "cover",
  },
  text: {
    color: COLORS.white,
  },
  span: {
    fontWeight: "500",
    color: COLORS.blue,
  },
  footer: {
    position: "absolute",
    bottom: 16,
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: 10,
    color: COLORS.white,
  }
});