import { types, preProcessSnapshot, flow, volatile } from "mobx-state-tree";
import api from "../Services";
import moment from "moment";

const ArticleModel = types
  .model({
    id: types.identifierNumber,
    url: types.string,
    adx_keywords: types.array(types.string),
    columns: types.optional(types.string, ""),
    section: types.string,
    byline: types.string,
    type: types.string,
    title: types.string,
    abstract: types.string,
    published_date: types.string,
    source: types.string,
    asset_id: types.number,
    views: types.number,
    media_metadata: types.array(types.maybeNull(types.string))
  })
  .preProcessSnapshot(snapshot => {
    // auto convert strings to booleans as part of preprocessing
    return snapshot
      ? {
          id: +snapshot.id,
          url: snapshot.url,
          adx_keywords: snapshot.adx_keywords.split(";"),
          columns: snapshot.columns,
          section: snapshot.section,
          byline: snapshot.byline,
          type: snapshot.type,
          title: snapshot.title,
          abstract: snapshot.abstract,
          published_date: moment(snapshot.published_date).toString(),
          source: snapshot.source,
          asset_id: +snapshot.asset_id,
          views: +snapshot.views,
          media_metadata: snapshot.media[0]["media-metadata"].map(item => {
            return item.url;
          })
        }
      : null;
  })
  .views(self => ({
    get firstImage() {
      return self.media_metadata[0];
    }
  }));

const ArticleController = types
  .model({
    articles: types.array(ArticleModel)
  })
  .volatile(self => ({
    fetching: false
  }))
  .actions(self => {
    function clear() {
      self.articles.clear();
    }

    function getArticleById(id) {
      return self.articles.find(article => article.id == id);
    }

    fetchArticles = flow(function* fetchArticles() {
      // <- note the star, this a generator function!
      self.fetching = true;
      try {
        const response = yield api.getArticles();
        if (response.ok) {
          const articles = response.data.results;
          self.articles.replace(articles);
        }
      } finally {
        self.fetching = false;
      }
    });

    return {
      clear,
      getArticleById,
      fetchArticles
    };
  });

export default ArticleController;
