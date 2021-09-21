<p>{{t 'octane-v-classic' htmlSafe=true}}</p>


<GuideSection @id='nomenclature' as |Section|>
  <Section @id='angle-brackets'>

  </Section>

  <Section @id='nested-components'>
  </Section>

  <Section @id='namespaced-components'>
  </Section>

  <Section @id='arguments'>
  </Section>

  <Section @id='attributes'>
  </Section>

  <Section @id='this'>
  </Section>

  <Section @id='block'>

  <p>{{t 'nomenclature.block.curly' htmlSafe=true}}</p>

```hbs
{{#let (array 1 2 3) as |threeItems|}}
  {{threeItems}}
{{/let}}
```

  <p>{{t 'nomenclature.block.component' htmlSafe=true}}</p>

```hbs
<MyComponent as |a b|
  {{a}} {{b}}
</MyComponent>
```

  </Section>

  <Section @id='named-block'>
  </Section>

  <Section @id='yield'>
  </Section>

</GuideSection>

