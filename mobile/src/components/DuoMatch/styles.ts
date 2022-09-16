import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: 311,
    backgroundColor: THEME.COLORS.OVERLAY,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    alignItems: "flex-end",
    margin: 16,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
