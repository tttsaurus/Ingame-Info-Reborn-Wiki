---
title: AnimText
---

> extends [Element](/wiki/classes/element/element.html)

- With Style Properties:
  - **[_int_]** `color` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback post: `setColorCallback`
  - **[_boolean_]** `shadow` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback post: `setShadowCallback`
  - **[_float_]** `scale` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `scaleValidation`
    - Setter callback post: `setScaleCallback`
  - **[_String_]** `text` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `textValidation`
    - Setter callback post: `setTextCallback`
  - **[_ITextAnimDef_]** `animDef`
    - Setter callback pre: `textAnimDefValidation`
- With Lerpable Properties:
  - `charInfos`
