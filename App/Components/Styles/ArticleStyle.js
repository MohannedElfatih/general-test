import { Colors, Metrics, ApplicationStyles, Fonts } from "../../Themes";

import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    padding: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  startContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  middleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: Metrics.baseMargin
  },
  text: {
    fontSize: Fonts.size.medium,
    textAlign: "left"
  },
  header: {
    flex: 0,
    fontWeight: "bold"
  },
  author: {
    flex: 0
  },
  dateContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch"
  },
  textDate: {
    flex: 0,
    fontSize: Fonts.size.tiny,
    color: Colors.lightGrayText
  },
  date: {
    marginStart: Metrics.smallMargin
  },
  endContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  icon: {
    fontSize: Fonts.size.regular
  }
});

export default styles;
