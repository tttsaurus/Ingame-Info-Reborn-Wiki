---
title: Sized
---

> Abstract type

> extends [Element](/wiki/classes/element/element.html)

- With Style Properties:
  - **[_float_]** `width` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
    - Setter callback post: `requestReCalc`
  - **[_float_]** `height` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
    - Setter callback post: `requestReCalc`
