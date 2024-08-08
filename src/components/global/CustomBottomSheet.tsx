import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import BottomSheet, {
  useBottomSheet,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';

export type Ref = BottomSheet;

interface Props {
  children: React.ReactNode;
  closable?: boolean;
}

const CloseBtn = () => {
  const { close } = useBottomSheet();
  return (
    <TouchableOpacity onPress={() => close()} style={styles.closeBtn}>
      <Ionicons name="close-sharp" size={12} color="green" />
    </TouchableOpacity>
  );
};

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ['45%'], []);

  // Modify this to prevent closing on backdrop press
  const renderBackdrop = useCallback(
    (backdropProps: any) => (
      <BottomSheetBackdrop
        {...backdropProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        style={[backdropProps.style, styles.backdrop]}
        pressBehavior="none"
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={false} // Disable drag to close
      handleIndicatorStyle={{ display: 'none' }}
      backgroundStyle={{ backgroundColor: '#142E07' }}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        {props.closable && <CloseBtn />}
        {props.children}
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 16,
    width: 18,
    height: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6CF92610',
    borderColor: '#6CF92648',
    borderWidth: 1,
    borderRadius: 100,
  },
  backdrop: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

export default CustomBottomSheet;
