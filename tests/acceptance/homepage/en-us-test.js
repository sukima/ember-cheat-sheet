import { fillIn, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupIntl } from 'ember-intl/test-support';

module('Acceptance | Homepage | en-US', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks, 'en-us');

  // eslint-disable-next-line qunit/require-expect
  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/');
    await a11yAudit();

    assert.ok(true);
  });

  test('We set the correct lang attribute in <html> element', async function (assert) {
    await visit('/');

    assert
      .dom(document.querySelector('html'))
      .hasAttribute('lang', 'en-us', 'We set the correct lang attribute.');
  });

  test('We can change the site language', async function (assert) {
    await visit('/');

    assert.dom('#nomenclature').hasText('Nomenclature', 'We see the site in English.');

    await fillIn('[data-test-field="Locale"]', 'pt-BR');

    assert.dom('#nomenclature').hasText('Nomenclatura', 'We see the site in Portugese (Brazil).');

    await fillIn('[data-test-field="Locale"]', 'fr-FR');

    assert.dom('#nomenclature').hasText('La Nomenclature', 'We see the site in French.');
  });
});
