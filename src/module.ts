import { load } from 'async-array-buffer-broker';
import { worker } from './worker/worker';

const blob: Blob = new Blob([ worker ], { type: 'application/javascript' });

const url: string = URL.createObjectURL(blob);

const asyncArrayBuffer = load(url);

export const allocate = asyncArrayBuffer.allocate;

export const deallocate = asyncArrayBuffer.deallocate;
