import { load } from 'async-array-buffer-broker';
import { worker } from './worker/worker';

const blob: Blob = new Blob([ worker ], { type: 'application/javascript; charset=utf-8' });

const url: string = URL.createObjectURL(blob);

const asyncArrayBuffer = load(url);

export const allocate = asyncArrayBuffer.allocate;

export const connect = asyncArrayBuffer.connect;

export const deallocate = asyncArrayBuffer.deallocate;

export const disconnect = asyncArrayBuffer.disconnect;
