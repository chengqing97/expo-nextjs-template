import { StatusBar, Platform } from "react-native";

// layout
export const maxContentAreaWidth = 800;
export const statusBarHeight = Platform.OS === "ios" ? 48 : StatusBar.currentHeight + 8;
