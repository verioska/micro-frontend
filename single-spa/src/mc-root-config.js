import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "@mc/react-single"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@mc/react-single",
  app: () =>
    System.import(
      "@mc/react-single"
    ),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@mc/react-harry-potter",
  app: () =>
    System.import(
      "@mc/react-harry-potter"
    ),
  activeWhen: (location) => location.pathname === '/react-harry-potter',
});

registerApplication({
  name: "@mc/react-rick-morty",
  app: () =>
    System.import(
      "@mc/react-rick-morty"
    ),
  activeWhen: (location) => location.pathname === '/react-rick-morty',
});


start({
  urlRerouteOnly: true,
});
