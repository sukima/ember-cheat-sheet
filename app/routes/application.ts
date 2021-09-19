import { registerDestructor } from '@ember/destroyable';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import hljs from 'highlight.js';
import { setup } from 'highlightjs-glimmer';

import type RouterService from '@ember/routing/router-service';

setup(hljs);

export default class Application extends Route {
  @service declare router: RouterService;

  constructor(...args: EmberConstructorArgs) {
    super(...args);

    /**
     * Docfy doesn't yet support Highlight.JS v11, so let's run it manually
     */
    let highlight = async () => {
      await new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });

      hljs.highlightAll();
    };

    this.router.on('routeDidChange', highlight);

    registerDestructor(this, () => {
      this.router.on('routeDidChange', highlight);
    });
  }
}
