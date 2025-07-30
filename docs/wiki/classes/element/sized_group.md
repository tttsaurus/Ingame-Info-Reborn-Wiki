---
title: SizedGroup
---

> extends [ElementGroup](/wiki/classes/element/element_group.html)

- With Style Properties:
  - **[_boolean_]** `isMaskRounded` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_float_]** `width` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
    - Setter callback post: `requestReCalc`
  - **[_boolean_]** `useMask` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_float_]** `height` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
    - Setter callback post: `requestReCalc`
