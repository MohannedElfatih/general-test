import { ApplicationStyles, Metrics, Fonts, Colors } from "../../Themes/";

import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  ...ApplicationStyles.emptyList,
  container: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: Metrics.smallMargin
  },
  list: {
    width: "100%"
  }
});

export default styles;
