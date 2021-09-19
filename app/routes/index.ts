import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import type RouterService from '@ember/routing/router-service';

export default class Index extends Route {
  @service declare router: RouterService;

  beforeModel() {
    /**
     * I don't know if Docfy can emit docs for the
     * root route.
     * So, let's redirect to our Docfy-controlled output
     */
    this.router.transitionTo('docs');
  }
}
