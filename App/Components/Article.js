import React, { Component } from "react";
// @flow
import { TouchableOpacity } from "react-native";
import { Card, View, Text, Icon, Button, Badge, Thumbnail } from "native-base";
import styles from "./Styles/ArticleStyle";
import { observer } from "mobx-react";
import moment from "moment";

const Article = observer(({ article, onBodyPress }) => {
  const handleBodyPress = () => onBodyPress(article);

  return (
    <TouchableOpacity onPress={handleBodyPress} style={styles.container}>
      <View style={styles.startContainer}>
        <Thumbnail small source={{ uri: article.firstImage }} />
      </View>

      <View style={styles.middleContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.text, styles.header]}
        >
          {article.title}
        </Text>

        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.text, styles.author]}
        >
          {article.byline}
        </Text>

        <View style={styles.dateContainer}>
          <Icon name="md-calendar" type="Ionicons" style={[styles.textDate]} />
          <Text style={[styles.textDate, styles.date]}>
            {moment(article.published_date).format("YYYY-MM-DD")}
          </Text>
        </View>
      </View>

      <View style={styles.endContainer}>
        <Icon name="ios-arrow-forward" type="Ionicons" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
});

export default Article;
