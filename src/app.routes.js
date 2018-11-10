import { HomeState } from "./app.states";

const RouteConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider.state(HomeState);

  $urlRouterProvider.otherwise("/home");
};

export default RouteConfig;
