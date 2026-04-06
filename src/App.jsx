import React from "react";
import KnowledgeBase from "./pages/KnowledgeBase";

const App = React.memo(() => {
  return <KnowledgeBase />;
});

App.displayName = "App";

export default App;