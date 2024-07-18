import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import NavBar from "../components/global/Navbar";
import BottomTabNavigation from "../components/global/BottomTabNavigation";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>{children}</View>
      <BottomTabNavigation />
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 10, // Adjust based on header height
    marginBottom: 10, // Adjust based on bottom tab height
  },
});
