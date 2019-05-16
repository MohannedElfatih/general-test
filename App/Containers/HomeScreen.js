import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content, Text, View } from "native-base";
import { observer } from "mobx-react";
import MSTStore from "../Mst";
import Spinkit from "../Components/Spinkit";
import moment from "moment";
// Styles
import styles from "./Styles/HomeScreenStyle";
import Article from "../Components/Article";
import Header from "../Components/Header";

@observer
class HomeScreen extends Component {
  componentWillMount() {
    MSTStore.articlesController.fetchArticles();
  }

  handleBodyPress = async item => {
    this.props.navigation.navigate("DetailsScreen");
  };

  renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No articles to display</Text>
    </View>
  );

  render() {
    return (
      <Container>
        <Header left={[]} title="NY Times Most Popular" />

        <Content contentContainerStyle={styles.container}>
          {MSTStore.articlesController.fetching ? (
            <Spinkit addMargin />
          ) : MSTStore.articles.length == 0 ? (
            this.renderEmptyList()
          ) : (
            <ArticlesList onBodyPress={this.handleBodyPress} />
          )}
        </Content>
      </Container>
    );
  }
}

const ArticlesList = ({ onBodyPress }) => {
  const keyExtractor = item => item.id.toString();

  const renderItem = ({ item, index }) => (
    <Article article={item} onBodyPress={onBodyPress} />
  );

  return (
    <FlatList
      data={MSTStore.articles}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

export default HomeScreen;
