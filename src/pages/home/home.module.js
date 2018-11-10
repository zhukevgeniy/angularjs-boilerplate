import angular from "angular";
import homeComponent from "./home.component";

const homeModule = angular
  .module("homeModule", [])
  .component("homeComponent", homeComponent);

export default homeModule;
