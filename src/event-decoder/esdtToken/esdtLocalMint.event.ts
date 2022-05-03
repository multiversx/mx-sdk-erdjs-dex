import { RawEvent } from '../raw.event';
import { EsdtTokenTopics } from './esdtToken.topics';

export class EsdtLocalMintEvent extends RawEvent {
    private decodedTopics: EsdtTokenTopics;

    constructor(init?: Partial<RawEvent>) {
        super(init);
        this.decodedTopics = new EsdtTokenTopics(this.topics);
    }

    getTopics() {
        return this.decodedTopics.toPlainObject();
    }
}
