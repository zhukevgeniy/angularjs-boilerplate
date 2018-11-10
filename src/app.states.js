export const HomeState = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  lazyLoad: async $transition$ => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    try {
      const module = await import(/* webpackChunkName: "home.module" */ "./pages/home/home.module");
      const page = module.default;

      return $ocLazyLoad.load(page);
    } catch (error) {
      throw new Error(error);
    }
  }
};
