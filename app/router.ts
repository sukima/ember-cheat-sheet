import EmberRouter from '@ember/routing/router';

import { addDocfyRoutes } from '@docfy/ember';
import config from 'ember-cheat-sheet/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  addDocfyRoutes(this);
});
