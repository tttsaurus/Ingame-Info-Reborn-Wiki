---
title: SlidingText
---

> extends [Sized](/wiki/classes/element/sized.html)

- With Style Properties:
  - **[_float_]** `xShiftSpeed` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
  - **[_float_]** `spareWidth` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
  - **[_int_]** `color` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_boolean_]** `shadow` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback post: `setShadowCallback`
  - **[_boolean_]** `onDemandSliding` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_float_]** `scale` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
    - Setter callback post: `setScaleCallback`
  - **[_float_]** `freezeTime` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
  - **[_boolean_]** `forwardSliding` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback post: `setForwardSlidingCallback`
  - **[_String_]** `text` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `textValidation`
    - Setter callback post: `setTextCallback`
- With Lerpable Properties:
  - `xShift`
