---
title: DraggableGroup
---

> Experimental

> extends [DraggableContainerGroup](/wiki/classes/element/draggable_container_group.html)

- With Style Properties:
  - **[_float_]** `overrideX` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_boolean_]** `restrictiveDragging` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_float_]** `overrideY` (with deserializer: `BuiltinTypesDeserializer`)
  - **[_float_]** `dragAreaHeight` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
  - **[_Padding_]** `dragAreaPadding` (with deserializer: `PaddingDeserializer`)
  - **[_Pivot_]** `dragAreaPivot` (with deserializer: `PivotDeserializer`)
    - Setter callback pre: `pivotValidation`
  - **[_Alignment_]** `dragAreaAlignment` (with deserializer: `AlignmentDeserializer`)
    - Setter callback pre: `alignmentValidation`
  - **[_float_]** `dragAreaWidth` (with deserializer: `BuiltinTypesDeserializer`)
    - Setter callback pre: `nonNegativeFloatValidation`
