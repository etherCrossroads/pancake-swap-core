# Pancake Factory

[![Actions Status](https://github.com/pancakeswap/pancake-swap-core/workflows/CI/badge.svg)](https://github.com/pancakeswap/pancake-swap-core/actions)

In-depth documentation on PancakeSwap is available at [docs.pancakeswap.finance](https://docs.pancakeswap.finance/).

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## OpenOcean Swap Testnet

WBNB: 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd

Factory: 0xF22b5afBe6152ca43fAE20DDA4F75575BABD0c5A

Router: 0xE860354Df7E46da91a8FE930d8aA0b207aa804C7

TestTokenA: 0xe14642fF7E1c4a11B37e6886b3cF80Fbf8652EcC

TestTokenB: 0x7A3d0e42b48D8ea37e75A4793196EF55b451378b

BUSD: 0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee

INIT_COED_HASH: e7da666f616ba3bdb18c6908b22d556a41659bdd652762c246b8d1fa4f7506b4

### Pair

TestTokenA-TestTokenB: 0x491094acc3bd1e14f5808dd2798583e9d55d04f8

- initialized liquidity: 1m:1m
- add more liquidity: 1m:1m
    - https://testnet.bscscan.com/tx/0xa4b5b2496ef99ae7e58ece9358f8d4757f57d2eae96bb562fd3489a5519cca12
- swap 100.205411072156814254 TA for 100
  TB: https://testnet.bscscan.com/tx/0x777b509257fde987447ea1ae9faa753cc90cec8865e187987c55d756c995cdc6

TestTokenA-BUSD: 0xe95a051b084a8410fd0a84f203071e301acd5e3c

- initialized liquidity: 10:1
- swap 1 TA for 0.090743771594835424
  BUSD: https://testnet.bscscan.com/tx/0x525416bfe93440faefb783056920bd8946a352434c871b5c49516077e53c6c9c

TestTokenB-BUSD: 0x27256d30446b735eb31e029880389e3e63e7b58b

- initialized liquidity: 10:1
- swap 1 TB for 0.090743771594835424
  BUSD: https://testnet.bscscan.com/tx/0xd11ca4951f809de13e276703b003e25a156bc3b96185a61abfbffb9fd713622c

WBNB-BUSD: 0x4B4D83Da464271C47D9bA27C5c5E4A323ea2754b

- initialized liquidity: 0.1:10
- swap 1.113337786684480072 BUSD for 0.01
  WBNB: https://testnet.bscscan.com/tx/0x21efb9ce1d8fb39be5dc5b4ebef384d43e79e6ea9092b437d5e756f989ceacbf
- swap 0.01 WBNB for 1.109332977706652441
  BUSD: https://testnet.bscscan.com/tx/0x04a8482bfc9d7f250fac4087fc5c0634f836d16f63486bcdca82fb4290fabb50

#### Multiplexing Test

- 1 WBNB -> 9.092893259890593784 BUSD -> 9.998211651082259333
  TA: https://testnet.bscscan.com/tx/0x052d2ee71fe4448385f6e021337ce55e6d4c26e7b3ef65703c19515be1e81a46
- 100 TA -> 99.785031226905307399 TB -> 0.818811983681320463 BUSD -> 0.520105956490069954
  WBNB: https://testnet.bscscan.com/tx/0x0fac5d48b821c2373ea497cc73cc38b9791c8188c1da7e870690f5e53099cc5a