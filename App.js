import React, { useCallback, useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    restoreToken();
  }, []);

  const restoreToken = async () => {
    try {
      const token = await authStorage.getToken();
      if (!token) return;
      setUser(jwtDecode(token));
    } catch (error) {
      console.log(error);
    } finally {
      setAppIsReady(true);
    }
  };

  if (!appIsReady) return null;
  SplashScreen.hideAsync();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
