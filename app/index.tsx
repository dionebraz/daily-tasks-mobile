import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./theme";
import { Header } from "./components/Header";
import { HomeScreen } from "@/views/Home";
import SplashScreen from "@/views/SplashScreen";
import { useEffect, useState } from "react";

export default function Index() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 5000);
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        {
          isShowSplash ?
            <SplashScreen /> : (
              <>
                <StatusBar
                  hidden={false}
                  barStyle={"default"}
                  backgroundColor={COLORS.background}
                />
                <Header />
                <HomeScreen />
              </>
            )
        }
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
