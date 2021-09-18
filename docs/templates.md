<GuideSection @id='template' as |Section|>
  <Section @id='syntax'>
  <:description>
    {{t 'template.syntax.intro' htmlSafe=true}}
  </:description>
  <:example>

```hbs
    {{a b c d=e}}
{{!-- │ │ │ │ └─── value / s-expression
      │ │ │ └─── named argument
      │ │ └─── positional argument
      │ └─── positional argument
      └─── helper --}}
```

  </:example>
  </Section>

</GuideSection>
