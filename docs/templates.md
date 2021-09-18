<GuideSection @id='template' as |Section|>
  <Section @id='syntax'>
  <:description>
    {{t 'template.syntax.intro' htmlSafe=true}}
  </:description>
  <:example>

```typescript
type Value = string | number | null | undefined | object | Value[];
type Helper = Function | EmberHelper;
type SExpression =
  | Value
  | `(` + Helper + `)`
  | `(` + Helper + ...SExpression + `)`
type Moustache = `{{` + SExpression + `}}`
```

  </:example>
  </Section>

  <Section @id='notation'>
  <:description>
    {{t 'template.notation.intro' htmlSafe=true}}
  </:description>
  <:example>

```hbs
{{function argA argB argC=(function argD)}}
```

  </:example>
  </Section>

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
