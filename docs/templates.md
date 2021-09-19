<GuideSection @id='template' as |Section|>
  <Section @id='grammar'>

```typescript
type Value = string | number | null | undefined | object | Value[];
type Helper = Function | EmberHelper | EmberModifier;
type NamedArgs = Key + '=' + SExpression
type SExpression =
  | Value
  | `(` + Helper + `)`
  | `(` + Helper + ...SExpression + `)`
  | `(` + Helper + ...SExpression + NamedArgs + `)`

type Moustache = `{{` + SExpression + `}}`
```

  <p>{{t 'template.grammar.plain-function' htmlSafe=true}}</p>

```hbs
<div>
    {{a b c d=e}}
{{!-- │ │ │ │ └─── value / s-expression
      │ │ │ └─── named argument
      │ │ └─── positional argument
      │ └─── positional argument
      └─── helper --}}
</div>
```

  <p>{{t 'template.grammar.expression-breakdown'}}</p>

  </Section>

  <Section @id='notation'>

```hbs
{{functionA argA argB argC=(functionB argD)}}
```

  <p>{{t 'template.notation.js-equiv'}}</p>

```js
functionA(argA, argB, { argC: functionB(argD) });
```

  </Section>

  <Section @id='syntax'>

```hbs
<div {{modifierName a b=(helperName c)}}>
  {{yield to="default"}}
</div>
```

  <p>{{t 'template.syntax.with-this' htmlSafe=true}}</p>

```hbs
<div {{this.modifierName a b=(this.helperName c)}}>
  {{yield to="default"}}
</div>

<div {{@modifierName a b=(@helperName c)}}>
  {{yield to="default"}}
</div>
```

  </Section>
</GuideSection>

<GuideSection @id="templates-how-to" as |Section|>
  <Section @id="iterate">
  </Section>

  <Section @id="invoke-function">
  </Section>

  <Section @id="access-properties">
  </Section>

  <Section @id="access-array-indices">
  </Section>

  <Section @id="conditions">
  </Section>

  <Section @id="math">
  </Section>

</GuideSection>
