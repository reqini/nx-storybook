# Typography

## TextTranslate

Genera un elemento cuyo contenido es el mensaje traducido de del `code` que se pasa

```javascript
import TextTranslate from "../components/2020/Typography/TextTranslate"

const datos={
  'dato1' : 'dato a reemplazar',
  'dato2' : 'otro dato'
}
```
``` html
<TextTranslate code="search.texto" variant="p" className={classes.textClass} data={datos} lang='pt' />
```

| Propiedad | Type   | Default | Descripción
|-----------|--------|---------|-------------------
| *code      | string |         | codigo a buscar en `config/translations.js`
| variant   | string | *span*  | elemento a generar
| className | object |         | cualquier parametro de className
| data      | object | {}      | objeto con datos a reemplazar
| lang      | string | "pt"    | idioma a utilizar

*obligatorio

### Lenguaje
El código puede generarse en la configuración de dos formas: sin lenguaje o con varios lenguajes:
```json
"texto-uno" : "este es un texto",
"texto-dos" : {
  "pt": "o testo no portugues",
  "en": "the text in english"
}
```

#### Lenguaje default
Al comienzo del JSON de configuración `config/translations.js` se incluye un nodo `defaults` en el cual se debe incluir un lenguaje por default.
```json
  defaults: {
    language: "pt"
  },
```
Este es el lenguaje que se tomará en el caso de que no se pase la propiedad `lang`.

### Reemplazos
- En el caso se que el contenido del code tenga etiquetas del formato `{@dato1}`, el componente reemplazará **todas** las ocurrencias del tag por el string que se pase dentro del parametro `data`.
- Si se pasan datos que no existen en el código, dichos códigos no se reemplazan.
- En el caso de que no se pase un dato que existe como `{@tag}`, el componente reemplaza dicho tag por "".

Ejemplo
```
code = "Un {@tipo} que contiene {@informacion} en el {@tipo}."

data = {
  "tipo" : "párrafo",
  "informacion" : "palabras"
}

resultado > "Un párrafo que contiene palabras en el párrafo.
```

---
