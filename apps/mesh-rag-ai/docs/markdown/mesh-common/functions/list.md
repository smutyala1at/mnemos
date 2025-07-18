[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / list

# Function: list()

> **list**\<`T`\>(`pList`, `validation`): [`List`](../type-aliases/List.md)\<`T`\>

Defined in: [data/json/primitives.ts:101](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/data/json/primitives.ts#L101)

The utility function to create a Plutus Data list in JSON

## Type Parameters

### T

`T` = [`PlutusData`](../type-aliases/PlutusData.md)

## Parameters

### pList

`T`[]

The list of Plutus Data

### validation

`boolean` = `true`

Default true - If current data construction would perform validation (introducing this flag due to possible performance issue in loop validation)

## Returns

[`List`](../type-aliases/List.md)\<`T`\>

The Plutus Data list object
