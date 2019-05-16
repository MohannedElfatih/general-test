import Config from "../Config/DebugConfig";
import Immutable from "seamless-immutable";
import Reactotron, {
  trackGlobalErrors,
  openInEditor
} from "reactotron-react-native";
// import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
// import sagaPlugin from 'reactotron-redux-saga'
import { Platform } from "react-native";
import { mst } from "reactotron-mst";

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron.configure(
    Platform.OS == "ios"
      ? { name: "NYTimes", host: "192.168.137.53" }
      : { name: "NYTimes", host: "localhost" }
  )
    .useReactNative()
    .use(trackGlobalErrors())
    .use(openInEditor())
    // .use(reduxPlugin({ onRestore: Immutable }))
    // .use(sagaPlugin())
    .use(mst())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
