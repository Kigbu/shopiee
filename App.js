import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import Main from "./Navigators/Main";
import store from "./Redux/store";
import Header from "./Shared/Header";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#ffffff" style="dark" />
          {/* <Header /> */}
          <Main />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
