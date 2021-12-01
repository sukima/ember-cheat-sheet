import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GuideSectionSubsectionComponent extends Component {
  @service intl;

  t = (key, options) => this.intl.t(key, { ...options, htmlSafe: true });
}
