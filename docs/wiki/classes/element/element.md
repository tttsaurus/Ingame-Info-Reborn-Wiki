---
title: Element
---

> Abstract type

- With Style Properties:
  - **[_String_]** `uid` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `uidValidation`
  - **[_Padding_]** `padding` (with deserializer: `PaddingDeserializer`)
    - Setter callback pre: `setPaddingCallbackPre`
    - Setter callback post: `requestReCalc`
  - **[_boolean_]** `drawBackground` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_String_]** `backgroundStyle` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `backgroundStyleValidation`
  - **[_Pivot_]** `pivot` (with deserializer: `PivotDeserializer`)
    - Setter callback pre: `pivotValidation`
    - Setter callback post: `requestReCalc`
  - **[_Alignment_]** `alignment` (with deserializer: `AlignmentDeserializer`)
    - Setter callback pre: `alignmentValidation`
    - Setter callback post: `requestReCalc`
  - **[_boolean_]** `enabled` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `setEnabledCallbackPre`
