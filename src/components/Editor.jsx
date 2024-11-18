import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import editorSettings from "../helpers/editorSettings";
import "grapesjs/dist/css/grapes.min.css";

export default function Editor() {
  useEffect(() => {
    const editor = grapesjs.init(editorSettings);

    return () => editor.destroy();
  }, []);

  return (
    <div className="editor-container" style={{ display: "flex", height: "100vh" }}>
      <div id="layers" className="panel" style={{ flexBasis: "250px", borderRight: "1px solid #ddd" }}>
        Layers
        <div id="layers-container"></div>
      </div>

      <div id="blocks" className="panel" style={{ flexBasis: "250px", borderRight: "1px solid #ddd" }}>
        Blocks
      </div>

      <div id="gjs" style={{ flex: 1 }}></div>

      <div id="style-manager" className="panel" style={{ flexBasis: "250px", borderLeft: "1px solid #ddd" }}>
        Styles
        <div id="style-manager-container"></div>
      </div>
    </div>
  );
}
