import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { AuthContext, AuthProvider } from "./context/AuthContext";
import "./global.css";
import AuthNavigator from "./navigation/AuthNavigator";

function Root() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#A30F0F" />
      </View>
    );
  }

  return <AuthNavigator user={user} />;
}


function App() {
  return (
   <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Root />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
