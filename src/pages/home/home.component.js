import controller from "./home.controller";
import template from "./home.template.html";

const bindings = {
  todo: "<"
};

const homeComponent = {
  bindings,
  controller,
  template
};

export default homeComponent;
