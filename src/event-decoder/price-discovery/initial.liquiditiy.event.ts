import {
    BigUIntType,
    FieldDefinition,
    StructType,
    TokenIdentifierType,
} from '@elrondnetwork/erdjs/out';
import { GenericToken } from '../../generic.token';
import { PriceDiscoveryEvent } from './price.discovery.event';
import { InitialLiquidityEventType } from './price.discovery.types';

export class InitialLiquidityEvent extends PriceDiscoveryEvent {
    lpToken: GenericToken | undefined;

    constructor(init?: Partial<PriceDiscoveryEvent>) {
        super(init);

        const decodedEvent = this.decodeEvent();

        this.lpToken = new GenericToken({
            tokenID: decodedEvent.lpTokenID.toString(),
            amount: decodedEvent.lpTokensReceived,
        });
    }

    toJSON(): InitialLiquidityEventType {
        return {
            ...super.toJSON(),
            lpToken: this.lpToken?.toJSON(),
        };
    }

    getStructure(): StructType {
        return new StructType('InitialLiquidityEvent', [
            new FieldDefinition('lpTokenID', '', new TokenIdentifierType()),
            new FieldDefinition('lpTokensReceived', '', new BigUIntType()),
        ]);
    }
}
