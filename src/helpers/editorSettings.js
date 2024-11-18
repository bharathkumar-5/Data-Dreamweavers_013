import blockBasic from "grapesjs-blocks-basic";
import FormPlugin from "grapesjs-plugin-forms";

const editorSettings = {
  container: "#gjs",
  height: "100vh",
  fromElement: true,
  plugins: [blockBasic, FormPlugin],
  layerManager: {
    appendTo: "#layers-container",
  },
  blockManager: {
    appendTo: "#blocks",
  },
  styleManager: {
    appendTo: "#style-manager-container",
    sectors: [
      {
        name: "General",
        open: false,
        buildProps: ["float", "display", "position", "top", "right", "left", "bottom"],
      },
      {
        name: "Dimension",
        open: false,
        buildProps: ["width", "height", "max-width", "min-height", "margin", "padding"],
      },
    ],
  },
  selectorManager: {
    appendTo: "#selectors-container",
  },
  traitManager: {
    appendTo: "#traits-container",
  },
  panels: {
    defaults: [
      { id: "layers", el: "#layers" },
      { id: "style", el: "#style-manager" },
    ],
  },
};

export default editorSettings;
