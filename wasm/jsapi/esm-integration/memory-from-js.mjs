export const buffer = new WebAssembly.Memory({ initial: 1, maximum: 1 });

const length = 10;
const view = new Uint8Array(buffer.buffer, 0, length);
for (let index = 0; index < length; index++)
    view[index] = Math.random() > 0.5 ? 1 : 0;
