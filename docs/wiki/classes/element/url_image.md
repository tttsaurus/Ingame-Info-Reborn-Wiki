---
title: UrlImage
---

> extends [Sized](/wiki/classes/element/sized.html)

- With Style Properties:
  - **[_boolean_]** `rounded` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_String_]** `url` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `urlValidation`
    - Setter callback post: `setUrlCallback`
