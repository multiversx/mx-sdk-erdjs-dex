export enum FarmVersion {
    V1_2 = 'v1.2',
    V1_3 = 'v1.3',
}

export enum FarmRewardType {
    UNLOCKED_REWARDS = 'unlockedRewards',
    LOCKED_REWARDS = 'lockedRewards',
    CUSTOM_REWARDS = 'customRewards',
}

export enum PAIR_EVENTS {
    SWAP_FIXED_INPUT = 'swapTokensFixedInput',
    SWAP_FIXED_OUTPUT = 'swapTokensFixedOutput',
    ADD_LIQUIDITY = 'addLiquidity',
    REMOVE_LIQUIDITY = 'removeLiquidity',
    SWAP_NO_FEE = 'swapNoFeeAndForward',
}
export enum FARM_EVENTS {
    ENTER_FARM = 'enterFarm',
    EXIT_FARM = 'exitFarm',
    CLAIM_REWARDS = 'claimRewards',
    COMPOUND_REWARDS = 'compoundRewards',
}
export enum PROXY_EVENTS {
    ADD_LIQUIDITY_PROXY = 'addLiquidityProxy',
    REMOVE_LIQUIDITY_PROXY = 'removeLiquidityProxy',
    ENTER_FARM_PROXY = 'enterFarmProxy',
    EXIT_FARM_PROXY = 'exitFarmProxy',
    CLAIM_REWARDS_PROXY = 'claimRewardsFarmProxy',
    COMPOUND_REWARDS_PROXY = 'compoundRewardsFarmProxy',
}

export enum METABONDING_EVENTS {
    STAKE_LOCKED_ASSET = 'stakeLockedAsset',
    UNSTAKE = 'unstake',
    UNBOND = 'unbond',
}

export enum ROUTER_EVENTS {
    CREATE_PAIR = 'createPair',
    PAIR_SWAP_ENABLED = 'setSwapEnabledByUser',
}

export enum ESDT_EVENTS {
    ESDT_LOCAL_MINT = 'ESDTLocalMint',
    ESDT_LOCAL_BURN = 'ESDTLocalBurn',
}

export enum PRICE_DISCOVERY_EVENTS {
    DEPOSIT = 'deposit',
    WITHDARW = 'withdraw',
    REDEEM = 'redeem',
}

export enum SIMPLE_LOCK_ENERGY_EVENTS {
    ENERGY_UPDATED = 'energyUpdated',
}

export type GenericEventType = {
    address: string | undefined;
    caller: string | undefined;
    block: number | undefined;
    epoch: number | undefined;
    timestamp: number | undefined;
};
