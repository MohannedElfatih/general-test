import { Fonts, ApplicationStyles, Metrics, Colors } from "../../Themes";

import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  ...ApplicationStyles.header,
  left: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "27.5%"
  },
  body: {
    flex: 1,
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 0,
    fontFamily: Fonts.type.erasMedium,
    letterSpacing: ApplicationStyles.letterSpacing,
    fontSize: Fonts.size.inputRem,
    // paddingLeft: Metrics.doubleBaseMargin,
    color: Colors.snow,
    overflow: "visible"
  },
  right: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "27.5%"
  }
});

export default styles;
