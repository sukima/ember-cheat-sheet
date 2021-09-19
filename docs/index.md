# {{t 'layout.application.title'}}


<p>{{t 'layout.application.description-1' htmlSafe=true}}</p>
<p>{{t 'layout.application.description-2' htmlSafe=true}}</p>


<GuideSection @id='generating-files' as |Section|>
  <Section @id='generating-component'>
  <:example>

```bash
# -gc stands for glimmer component
ember generate component my-component -gc

# See the full set of options with:
ember generate component --help
```

  </:example>
  </Section>

  <Section @id='file-structure'>
  </Section>
</GuideSection>


<GuideSection @id='component-templates' as |Section|>
  <Section @id='angle-brackets'>
  </Section>

  <Section @id='inline-vs-block'>
  </Section>

  <Section @id='angle-brackets-nested'>
  </Section>

  <Section @id='template-named'>
  </Section>

  <Section @id='template-this'>
  </Section>

  <Section @id='template-arguments-named'>
  </Section>

  <Section @id='template-arguments-this'>
  </Section>

  <Section @id='tag-name'>
  </Section>

  <Section @id='element-id'>
  </Section>
</GuideSection>

<GuideSection @id='component-properties' as |Section|>
  <Section @id='js-boilerplate'>
  </Section>

  <Section @id='ddau'>
  </Section>

  <Section @id='args'>
  </Section>

  <Section @id='get-and-set'>
  </Section>

  <Section @id='tracked-vs-cp'>
  </Section>

  <Section @id='computed-decorator'>
  </Section>
</GuideSection>

<GuideSection @id='actions' as |Section|>
  <Section @id='actions'>
  </Section>

  <Section @id='template-arguments-default'>
  </Section>

  <Section @id='mixins'>
  </Section>
</GuideSection>

<GuideSection @id='component-lifecycle' as |Section|>
  <Section @id='constructors'>
  </Section>

  <Section @id='will-destroy'>
  </Section>

  <Section @id='destroyable'>
  </Section>
</GuideSection>

<GuideSection @id='routes' as |Section|>
  <Section @id='model-access'>
  </Section>
</GuideSection>
