import React, { Component } from "react";
import { Container, Content, Text, View } from "native-base";

// Styles
import styles from "./Styles/HomeScreenStyle";
import Header from "../Components/Header";

class DetailsScreen extends Component {
  renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Details screen goes here</Text>
    </View>
  );

  render() {
    return (
      <Container>
        <Header left={[]} title="Details screen" />

        <Content contentContainerStyle={styles.container}>
          {this.renderEmptyList()}
        </Content>
      </Container>
    );
  }
}

export default DetailsScreen;
