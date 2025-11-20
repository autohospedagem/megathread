# Ferramentas

Usamos o [vitepress](https://vitepress.dev/) para fazer o markdown

## Exemplos de Extensões Markdown

Esta página demonstra algumas das extensões Markdown embutidas fornecidas pelo VitePress.

## Realce de Sintaxe (Syntax Highlighting)

O VitePress fornece Realce de Sintaxe alimentado por [Shiki](https://github.com/shikijs/shiki), com recursos adicionais como realce de linha:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
Esta é uma caixa de informação.
:::

::: tip
Esta é uma dica.
:::

::: warning
Este é um aviso.
:::

::: danger
Este é um aviso perigoso.
:::

::: details
Este é um bloco de detalhes.
:::
```

**Output**

::: info
Esta é uma caixa de informação.
:::

::: tip
This is a tip.
:::

::: warning
Esta é uma dica.
:::

::: danger
Este é um aviso.
:::

::: details
Este é um aviso perigoso.
:::

## More

Consulte a documentação para a [full list of markdown extensions](https://vitepress.dev/guide/markdown).
