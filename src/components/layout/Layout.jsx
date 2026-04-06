import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

// CSS Classes
const LAYOUT_CONTAINER = "h-screen w-full flex flex-col bg-white overflow-hidden";
const LAYOUT_BODY = "flex flex-1 overflow-hidden";
const MAIN_CONTENT = "flex-1 bg-white overflow-hidden p-5";

const Layout = React.memo(({ children, onCreate }) => {
  return (
    <div className={LAYOUT_CONTAINER}>
      <Header onCreate={onCreate} />
      <div className={LAYOUT_BODY}>
        <Sidebar />
        <main className={MAIN_CONTENT} role="main">
          {children}
        </main>
      </div>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;