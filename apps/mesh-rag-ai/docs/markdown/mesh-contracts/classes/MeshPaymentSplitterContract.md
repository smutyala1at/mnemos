[**@meshsdk/contract**](../README.md)

***

[@meshsdk/contract](../globals.md) / MeshPaymentSplitterContract

# Class: MeshPaymentSplitterContract

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:14](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L14)

## Extends

- `MeshTxInitiator`

## Constructors

### Constructor

> **new MeshPaymentSplitterContract**(`inputs`, `payees`): `MeshPaymentSplitterContract`

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:26](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L26)

#### Parameters

##### inputs

`MeshTxInitiatorInput`

##### payees

`string`[]

#### Returns

`MeshPaymentSplitterContract`

#### Overrides

`MeshTxInitiator.constructor`

## Properties

### fetcher?

> `optional` **fetcher**: `IFetcher`

Defined in: [mesh-contract/src/common.ts:23](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L23)

#### Inherited from

`MeshTxInitiator.fetcher`

***

### languageVersion

> **languageVersion**: `"V1"` \| `"V2"` \| `"V3"` = `"V2"`

Defined in: [mesh-contract/src/common.ts:28](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L28)

#### Inherited from

`MeshTxInitiator.languageVersion`

***

### mesh

> **mesh**: `MeshTxBuilder`

Defined in: [mesh-contract/src/common.ts:22](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L22)

#### Inherited from

`MeshTxInitiator.mesh`

***

### networkId

> **networkId**: `number` = `0`

Defined in: [mesh-contract/src/common.ts:26](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L26)

#### Inherited from

`MeshTxInitiator.networkId`

***

### payees

> **payees**: `string`[] = `[]`

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:17](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L17)

***

### scriptAddress

> **scriptAddress**: `string`

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:16](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L16)

***

### scriptCbor

> **scriptCbor**: `string`

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:15](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L15)

***

### stakeCredential?

> `optional` **stakeCredential**: `string`

Defined in: [mesh-contract/src/common.ts:25](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L25)

#### Inherited from

`MeshTxInitiator.stakeCredential`

***

### version

> **version**: `number` = `2`

Defined in: [mesh-contract/src/common.ts:27](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L27)

#### Inherited from

`MeshTxInitiator.version`

***

### wallet?

> `optional` **wallet**: `IWallet`

Defined in: [mesh-contract/src/common.ts:24](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L24)

#### Inherited from

`MeshTxInitiator.wallet`

## Methods

### \_getUtxoByTxHash()

> `protected` **\_getUtxoByTxHash**(`txHash`, `scriptCbor?`): `Promise`\<`undefined` \| `UTxO`\>

Defined in: [mesh-contract/src/common.ts:197](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L197)

#### Parameters

##### txHash

`string`

##### scriptCbor?

`string`

#### Returns

`Promise`\<`undefined` \| `UTxO`\>

#### Inherited from

`MeshTxInitiator._getUtxoByTxHash`

***

### getAddressUtxosWithMinLovelace()

> `protected` **getAddressUtxosWithMinLovelace**(`walletAddress`, `lovelace`, `providedUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:147](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L147)

#### Parameters

##### walletAddress

`string`

##### lovelace

`number`

##### providedUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getAddressUtxosWithMinLovelace`

***

### getAddressUtxosWithToken()

> `protected` **getAddressUtxosWithToken**(`walletAddress`, `assetHex`, `userUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:164](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L164)

#### Parameters

##### walletAddress

`string`

##### assetHex

`string`

##### userUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getAddressUtxosWithToken`

***

### getScriptAddress()

> **getScriptAddress**(`scriptCbor`): `string`

Defined in: [mesh-contract/src/common.ts:69](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L69)

#### Parameters

##### scriptCbor

`string`

#### Returns

`string`

#### Inherited from

`MeshTxInitiator.getScriptAddress`

***

### getScriptCbor()

> **getScriptCbor**(): `string`

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:44](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L44)

#### Returns

`string`

***

### getWalletCollateral()

> `protected` **getWalletCollateral**(): `Promise`\<`undefined` \| `UTxO`\>

Defined in: [mesh-contract/src/common.ts:107](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L107)

#### Returns

`Promise`\<`undefined` \| `UTxO`\>

#### Inherited from

`MeshTxInitiator.getWalletCollateral`

***

### getWalletDappAddress()

> `protected` **getWalletDappAddress**(): `Promise`\<`undefined` \| `string`\>

Defined in: [mesh-contract/src/common.ts:93](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L93)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Inherited from

`MeshTxInitiator.getWalletDappAddress`

***

### getWalletInfoForTx()

> `protected` **getWalletInfoForTx**(): `Promise`\<\{ `collateral`: `UTxO`; `utxos`: `UTxO`[]; `walletAddress`: `string`; \}\>

Defined in: [mesh-contract/src/common.ts:181](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L181)

#### Returns

`Promise`\<\{ `collateral`: `UTxO`; `utxos`: `UTxO`[]; `walletAddress`: `string`; \}\>

#### Inherited from

`MeshTxInitiator.getWalletInfoForTx`

***

### getWalletUtxosWithMinLovelace()

> `protected` **getWalletUtxosWithMinLovelace**(`lovelace`, `providedUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:115](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L115)

#### Parameters

##### lovelace

`number`

##### providedUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getWalletUtxosWithMinLovelace`

***

### getWalletUtxosWithToken()

> `protected` **getWalletUtxosWithToken**(`assetHex`, `userUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:131](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L131)

#### Parameters

##### assetHex

`string`

##### userUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getWalletUtxosWithToken`

***

### queryUtxos()

> `protected` **queryUtxos**(`walletAddress`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:85](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L85)

#### Parameters

##### walletAddress

`string`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.queryUtxos`

***

### sendLovelaceToSplitter()

> **sendLovelaceToSplitter**(`lovelaceAmount`): `Promise`\<`string`\>

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:62](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L62)

#### Parameters

##### lovelaceAmount

`number`

#### Returns

`Promise`\<`string`\>

***

### signSubmitReset()

> `protected` **signSubmitReset**(): `Promise`\<`undefined` \| `string`\>

Defined in: [mesh-contract/src/common.ts:78](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L78)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Inherited from

`MeshTxInitiator.signSubmitReset`

***

### triggerPayout()

> **triggerPayout**(): `Promise`\<`string`\>

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:87](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L87)

#### Returns

`Promise`\<`string`\>

***

### wrapPayees()

> **wrapPayees**(`payees`): `List`\<`BuiltinByteString`\>

Defined in: [mesh-contract/src/payment-splitter/offchain.ts:19](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/payment-splitter/offchain.ts#L19)

#### Parameters

##### payees

`string`[]

#### Returns

`List`\<`BuiltinByteString`\>
