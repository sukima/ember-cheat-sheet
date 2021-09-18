// Types for compiled templates
declare module 'ember-cheat-sheet/templates/*' {
  import type { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

type EmberConstructorArgs = Array<object>;

declare module 'highlightjs-glimmer';
