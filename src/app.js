import angular from "angular";
import ocLazyLoad from "oclazyload";
import uiRouter from "@uirouter/angularjs";
import RouteConfig from "./app.routes";

const dependencies = [uiRouter, ocLazyLoad];

const root = angular.module("TemplateApp", dependencies).config(RouteConfig);

export default root;
