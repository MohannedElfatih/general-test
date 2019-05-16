import React, { PureComponent } from "react";
import { View } from "native-base";
import styles from "./Styles/SpinkitStyle";
import { Colors, Metrics } from "../Themes";
import {
  CirclesRotationScaleLoader,
  LinesLoader,
  ColorDotsLoader,
  DotsLoader
} from "react-native-indicator";

export default class Spinkit extends PureComponent {
  static defaultProps = {
    type: "CirclesRotationScaleLoader",
    color: Colors.grass,
    color1: Colors.spinnerColor1,
    color2: Colors.spinnerColor2,
    color3: Colors.spinnerColor3,
    size: 40
  };

  getIndicator() {
    const {
      size,
      color,
      indicatorOptions,
      type,
      color1,
      color2,
      color3
    } = this.props;
    switch (type) {
      case "CirclesRotationScaleLoader": {
        return (
          <CirclesRotationScaleLoader
            size={size}
            color={color}
            {...indicatorOptions}
          />
        );
        break;
      }
      case "LinesLoader": {
        return (
          <LinesLoader color={color} barHeight={size} {...indicatorOptions} />
        );
        break;
      }
      case "ColorDotsLoader": {
        return (
          <ColorDotsLoader
            color1={color1}
            color2={color2}
            color3={color3}
            {...indicatorOptions}
          />
        );
        break;
      }
      case "DotsLoader": {
        return <DotsLoader color={color} {...indicatorOptions} />;
        break;
      }
      default: {
        return (
          <CirclesRotationScaleLoader
            size={size}
            color={color}
            {...indicatorOptions}
          />
        );
        break;
      }
    }
  }

  render() {
    const { spinkitOptions, addMargin, type, color, size } = this.props;
    return (
      <View
        style={[
          styles.container,
          addMargin ? { paddingTop: Metrics.section } : null
        ]}
      >
        {this.getIndicator()}
        {/* <Spinner
          isVisible
          size={size}
          type={type}
          color={color}
          {...spinkitOptions} /> */}
      </View>
    );
  }
}
