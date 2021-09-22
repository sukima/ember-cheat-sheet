<p>{{t 'octane-v-classic' htmlSafe=true}}</p>


<GuideSection @id='nomenclature' as |Section|>
  <Section @id='angle-brackets'>

```hbs
<SomeComponent />
↑  <br />       ↑
   ↑    ↑
```

  </Section>

  <Section @id='nested-components'>
  </Section>

  <Section @id='namespaced-components'>
  </Section>

  <Section @id='arguments'>

```hbs
<SomeComponent @someArgument={{@anArgument}} />
```

  </Section>

  <Section @id='attributes'>

```hbs
<SomeComponent class="..." data-test style="..." />
<div class="...">
```

  <p>{{t 'nomenclature.attributes.splattributes' htmlSafe=true}}</p>

```hbs
<div ...attributes></div>
```

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

  <p>{{t 'nomenclature.block.component-after' htmlSafe=true}}</p>

  </Section>

  <Section @id='named-block'>
  </Section>

  <Section @id='yield'>
  </Section>

</GuideSection>

