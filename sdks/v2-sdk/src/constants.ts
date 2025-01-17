export const FACTORY_ADDRESS = '0x179D9a5592Bc77050796F7be28058c51cA575df4'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// @deprecated please use poolInitCodeHash(chainId: ChainId)
export const POOL_INIT_CODE_HASH = '0x7eeacb23bdc28add5b4c2a0b30a03d6280208d04ba9baf8f56e87a331cf73590'

export function poolInitCodeHash(): string {
    return POOL_INIT_CODE_HASH
}
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
    LOWEST = 100,
    LOW_200 = 200,
    LOW_300 = 300,
    LOW_400 = 400,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
    [FeeAmount.LOWEST]: 1,
    [FeeAmount.LOW_200]: 4,
    [FeeAmount.LOW_300]: 6,
    [FeeAmount.LOW_400]: 8,
    [FeeAmount.LOW]: 10,
    [FeeAmount.MEDIUM]: 60,
    [FeeAmount.HIGH]: 200,
}