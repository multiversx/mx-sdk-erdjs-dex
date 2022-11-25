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

export enum FEES_COLLECTOR_EVENTS {
    DEPOSIT_SWAP_FEES = 'depositSwapFees',
    CLAIM_REWARDS = "claimRewards",
}

export enum CLAIM_REWARDS_EVENT_NAMES {
    UPDATE_GLOBAL_AMOUNTS = 'update_global_mounts',
    UPDATE_USER_ENERGY = 'update_user_energy',
    CLAIM_MULTI = 'claim_multi',
    CLAIM_REWARDS = 'claim_rewards'
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

export type RawEventType = {
    address: string | undefined;
    identifier: string | undefined;
    topics?: string[];
    data?: string | undefined;
};

export type GenericEventType = {
    address: string | undefined;
    identifier: string | undefined;
    caller: string | undefined;
    block: number | undefined;
    epoch: number | undefined;
    timestamp: number | undefined;
};
