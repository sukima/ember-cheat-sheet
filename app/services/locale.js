import Service, { inject as service } from '@ember/service';

/*
  To help with maintenance, please list
  the supported locales in alphabetical order.
*/
const supportedLocales = new Set(['en-US', 'es', 'fr-FR', 'ja', 'pt-BR']);

export default class LocaleService extends Service {
  @service intl;

  menuOptions = Array.from(supportedLocales)
    .map((locale) => {
      return {
        label: this.intl.t(`component.locale-menu.locale-${locale}`).toString(),
        value: locale,
      };
    })
    .sort((a, b) => {
      const aValue = a.label.toLowerCase();
      const bValue = b.label.toLowerCase();

      if (aValue > bValue) return 1;
      if (aValue < bValue) return -1;
      return 0;
    });

  async updateSiteLocale(locale) {
    if (!supportedLocales.has(locale)) {
      return;
    }

    let translationPath = `translations/${locale}.json`;
    let assetMap = await fetch('/assets/assetMap.json');
    let assetMapJson = await assetMap.json();

    translationPath = assetMapJson.assets[translationPath];

    let translations = await fetch(`/${translationPath}`);
    let translationsJson = await translations.json();

    this.intl.addTranslations(locale, translationsJson);

    this.intl.setLocale(locale);
  }
}
