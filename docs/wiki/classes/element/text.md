---
title: Text
---

> extends [Element](/wiki/classes/element/element.html)

- With Style Properties:
  - **[_int_]** `color` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_boolean_]** `shadow` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback post: `setShadowCallback`
  - **[_float_]** `scale` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `scaleValidation`
    - Setter callback post: `requestReCalc`
  - **[_String_]** `text` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `textValidation`
    - Setter callback post: `setTextCallback`
