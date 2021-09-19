<GuideSection @id='template' as |Section|>
  <Section @id='syntax'>
  <:description>
    {{t 'template.syntax.intro' htmlSafe=true}}
  </:description>
  <:example>

```typescript
type Value = string | number | null | undefined | object | Value[];
type Helper = Function | EmberHelper;
type NamedArgs = Key + '=' + SExpression
type SExpression =
  | Value
  | `(` + Helper + `)`
  | `(` + Helper + ...SExpression + `)`
  | `(` + Helper + ...SExpression + NamedArgs + `)`

type Moustache = `{{` + SExpression + `}}`
```

  <p>{{t 'template.syntax.plain-function' htmlSafe=true}}</p>

  </:example>
  </Section>

  <Section @id='notation'>
  <:description>
    {{t 'template.notation.intro' htmlSafe=true}}
  </:description>
  <:example>

```hbs
{{functionA argA argB argC=(functionB argD)}}
```
which is the equivalent of this, in JavaScript

```js
functionA(argA, argB, { argC: functionB(argD) });
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
