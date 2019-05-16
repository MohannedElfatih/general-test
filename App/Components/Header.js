// @flow
import React, { PureComponent } from "react";
import {
  Header as NativeHeader,
  Title,
  Left,
  Right,
  Button,
  Body,
  Icon,
  Text,
  StyleProvider
} from "native-base";
import styles from "./Styles/HeaderStyle";

import { withNavigation } from "react-navigation";
import { Colors } from "../Themes";
import EStyleSheet from "react-native-extended-stylesheet";

class Header extends PureComponent {
  handleBackButton = () => {
    const { onBackPress, navigation } = this.props;
    onBackPress ? onBackPress() : navigation.pop();
  };

  render() {
    const {
      left,
      right,
      title,
      navigation,
      backgroundColor,
      statusBarColor,
      headerProps
    } = this.props;
    return (
      <NativeHeader
        iosBarStyle="light-content"
        androidStatusBarColor={
          statusBarColor || EStyleSheet.value("$blueHeader")
        }
        style={[
          styles.header,
          {
            backgroundColor: backgroundColor || EStyleSheet.value("$blueHeader")
          }
        ]}
        {...headerProps}
      >
        <Left style={styles.left}>
          {left ? (
            Array.isArray(left) ? (
              left.map((element, index) =>
                React.cloneElement(element, { key: index })
              )
            ) : (
              left
            )
          ) : (
            <Button onPress={this.handleBackButton} transparent>
              <Icon active style={styles.headerIcon} name="arrow-back" />
            </Button>
          )}
        </Left>
        <Body style={styles.body}>
          <Title style={styles.title}>{title}</Title>
        </Body>
        <Right style={styles.right}>
          {Array.isArray(right) ? right.map(element => element) : right}
        </Right>
      </NativeHeader>
    );
  }
}

Header.defaultProps = {
  backgroundColor: Colors.grass,
  statusBarColor: Colors.grass
};

export default withNavigation(Header);
