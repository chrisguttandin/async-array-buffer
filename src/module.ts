import { load } from 'async-array-buffer-broker';
import { createLoadOrReturnBroker } from './factories/load-or-return-broker';
import { worker } from './worker/worker';

const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);

export const allocate: ReturnType<typeof load>['allocate'] = (length) => loadOrReturnBroker().allocate(length);

export const connect: ReturnType<typeof load>['connect'] = () => loadOrReturnBroker().connect();

export const deallocate: ReturnType<typeof load>['deallocate'] = (arrayBuffer) => loadOrReturnBroker().deallocate(arrayBuffer);

export const disconnect: ReturnType<typeof load>['disconnect'] = (port) => loadOrReturnBroker().disconnect(port);

export const isSupported: ReturnType<typeof load>['isSupported'] = () => loadOrReturnBroker().isSupported();
