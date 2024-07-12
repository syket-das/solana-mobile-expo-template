import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import BottomSheet, {
  useBottomSheet,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { Entypo } from "@expo/vector-icons";
export type Ref = BottomSheet;

interface Props {
  children: React.ReactNode;
  closable?: boolean;
}

const CloseBtn = () => {
  const { close } = useBottomSheet();
  return (
    <TouchableOpacity
      onPress={() => close()}
      style={{
        position: "absolute",
        top: 0,
        right: 10,
      }}
    >
      <Entypo name="circle-with-cross" size={20} color="green" />
    </TouchableOpacity>
  );
};

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  //add this
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0}
        style={{ backgroundColor: "transparent" }}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{ backgroundColor: "#fff" }}
      backgroundStyle={{ backgroundColor: "#152C0E" }}
      backdropComponent={renderBackdrop} //add this
    >
      <View style={styles.contentContainer}>
        {props.closable && <CloseBtn />}
        {props.children}
      </View>
    </BottomSheet>
  );
});
true;
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
    color: "#fff",
  },
});

export default CustomBottomSheet;
