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
  | `(` + Helper + ...SExpression + ...NamedArgs + `)`

type Moustache = `{{` + SExpression + `}}`
```

  <p>{{t 'template.grammar.plain-function' htmlSafe=true}}</p>

```hbs
<div>
    {{a b c d=e}}
{{!-- │ │ │ │ └─── value / s-expression
      │ │ │ └─── named argument key
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
{{!--  │                 │ │  │               └─── positional argument
       │                 │ │  └─── helper
       │                 │ └─── named argument key
       │                 └─── positional argument
       └─── modifier --}}
  {{yield to="default"}}
{{!--  │  │   └─── value
       │  └─── named argument key
       └─── helper --}}
</div>

<div {{@modifierName a b=(@helperName c)}}>
{{!--  │             │ │  │           └─── positional argument
       │             │ │  └─── helper
       │             │ └─── named argument key
       │             └─── positional argument
       └─── modifier --}}
  {{yield to="default"}}
{{!--  │  │   └─── value
       │  └─── named argument key
       └─── helper --}}
</div>
```

  </Section>
</GuideSection>

<GuideSection @id="templates-how-to" as |Section|>
  <Section @id="iterate">

```hbs
{{#each this.anIterable as |item|}}
  {{log item}}
{{/each}}
```

```hbs
{{#each-in this.anObject as |key value|}}
  {{log key value}}
{{/each}}
```

```hbs
{{#each this.anIterable key='uuid' as |item|}}
  {{log item}}
{{/each}}
```


  </Section>

  <Section @id="invoke-function">

```hbs
{{(this.myFunction)}}
{{(this.myFunction a b)}}
```

```hbs
{{this.myFunction a b}}
```

  </Section>

  <Section @id="access-properties">

```hbs
{{@argumentA}}
```

```hbs
{{get @argObject 'property-name'}}
{{get @argObject this.dynamicProperty}}
```

  </Section>

  <Section @id="access-array-indices">

```hbs
{{get @someArray 0}}
```

  </Section>

  <Section @id="conditions">

```hbs
{{#if this.condition}}
  ...
{{else}}
  ...
{{/if}}
```

```hbs
{{#unless this.condition}}
  ...
{{else}}
  ...
{{/unless}}
```

```hbs
{{#if (eq @a @b)}}
{{else}}
{{/if}}
```

```hbs
{{#if (or (eq @a @b) (gt @c 0))}}
{{else}}
{{/if}}
```

```hbs
{{if (eq @a b) "is true" "is false"}}
{{unless (eq @a b) "is negated true" "is negated false"}}
```

References:
 - https://github.com/emberjs/rfcs/pull/562
 - https://github.com/emberjs/rfcs/pull/560


  </Section>

  <Section @id="math">


References:
 - https://github.com/emberjs/rfcs/pull/561

  </Section>

</GuideSection>
