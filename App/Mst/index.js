import { types } from "mobx-state-tree";
import DebugConfig from "../Config/DebugConfig";
import ArticleController from "./Article";

const storeKeyName = "MyRootStore";

export const RootStore = types
  .model("RootStore", {
    articlesController: types.optional(ArticleController, {
      articles: []
    })
  })
  .views(self => ({
    get articles() {
      return self.articlesController.articles;
    }
  }))
  .actions(self => {
    return {};
  });

const defaultState = {
  articles: []
};

const MSTStore = RootStore.create();

if (DebugConfig.useReactotron) console.tron.trackMstNode(MSTStore);

export default MSTStore;
