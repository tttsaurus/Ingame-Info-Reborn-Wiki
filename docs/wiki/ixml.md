---
title: IXML Introduction
---

IXML is a XML-style domain-specific-language for Ingame Info Reborn gui layout specification.
The gui layout resembles a tree structure and each node inherits class `Element`

## Find Available Child Classes
Go to `./config/ingameinfo/ui_element_dump.md`, and you'll see
```md
## Notice:
1. Elements marked with `*` below are abstract (unserviceable in ixml).
2. You can access style properties from parent elements.

## Registered Elements:
- `Element*`
- `Interactable*`
- `Sized*`
- `Slot`
- `AnimText`
- `Button`
- `EmptyBlock`
- `Image`
- `Item`
- `ProgressBar`
- `Separator`
- `SlidingText`
- `Text`
...
```

To illustrate, there are abstract `Element` child classes (marked with `*`) and also solid implementations.

You _**can only**_ use _serviceable elements_ (which are _solid implementations_) in ixml files.

## Element
What is an `Element`
- It contains several style properties that determine visuals and other important stuff
  - such as `uid`, `width`, `height`

And that's it. `Element` is basically the most fundamental and simple thing in gui layout specification.

There is also a crucial child class of `Element` called `ElementGroup`
which is the key to form the tree structure and helps you to define flexible gui layout.

`ElementGroup` literally groups `Element` as it acts like a parent node and contains other `Element` nodes.
Of course, you can have nested `ElementGroup` as it is technically a _tree_.

## Style Property
e.g. here is a style property from `Sized`
- **[_float_]** `width` (with deserializer: `BuiltinTypesDeserializer`)
  - Setter callback pre: `nonNegativeFloatValidation`
  - Setter callback post: `requestReCalc`

As you can see, every style property has two callbacks and also a deserializer to convert ixml to runtime objects.
Anyway, you _don't_ have to know too much about style properties, like callbacks and deserializers, to create your own ixml files.

## Example IXML
```xml
<Def debug = false focused = false>
<SizedGroup width = 50 height = 50 padding = {"left": 10, "top": 10}>
    <VerticalGroup>
        <Text uid = "biome">
    </Group>
</Group>
```

- Firstly, you define gui settings, like `debug = false`, `focused = false`. However, `debug` and `focused` are set to `false` by default; usually, you don't have to use `<Def>` for your guis.
  ```xml
  <Def debug = false focused = false>
  ```

- Then, you define a group. We use `<*Group>` to open and `</Group>` to close all kinds of `ElementGroup`. When it comes to style properties, we have `width`, `height`, `padding`, where `width` and `height` are inherited from `SizedGroup` but `padding` is inherited from parent class `Element`. That is, we're able to access parent's style properties.
  (`SizedGroup` provides a mask effect by default, which only displays stuff inside it)
  ```xml
  <SizedGroup width = 50 height = 50 padding = {"left": 10, "top": 10}>
      ...
  </Group>
  ```

- Another nested group: `VerticalGroup` stacks elements together vertically, and it doesn't have a fixed size.
  ```xml
  <VerticalGroup>
      ...
  </Group>
  ```

- Finally, a text field. Notice: `uid` is just an identifier for the purpose of data binding in ViewModel
  ```xml
  <Text uid = "biome">
  ```
