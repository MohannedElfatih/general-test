import { ApplicationStyles, Metrics, Fonts, Colors } from "../../Themes/";

import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  ...ApplicationStyles.emptyList,
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: Metrics.smallMargin
  }
});

export default styles;
