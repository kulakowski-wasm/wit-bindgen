import { data_view, to_string, UTF8_DECODER, utf8_encode, UTF8_ENCODED_LEN } from './intrinsics.js';
export class Demo {
  
  async instantiate(module, imports) {
    imports = imports || {};
    
    if (module instanceof WebAssembly.Instance) {
      this.instance = module;
    } else if (module instanceof WebAssembly.Module) {
      this.instance = await WebAssembly.instantiate(module, imports);
    } else if (module instanceof ArrayBuffer || module instanceof Uint8Array) {
      const { instance } = await WebAssembly.instantiate(module, imports);
      this.instance = instance;
    } else {
      const { instance } = await WebAssembly.instantiateStreaming(module, imports);
      this.instance = instance;
    }
    this._exports = this.instance.exports;
  }
  render(arg0, arg1, arg2) {
    const memory = this._exports.memory;
    const realloc = this._exports["cabi_realloc"];
    const val0 = to_string(arg0);
    let enum0;
    switch (val0) {
      case "js": {
        enum0 = 0;
        break;
      }
      case "rust": {
        enum0 = 1;
        break;
      }
      case "java": {
        enum0 = 2;
        break;
      }
      case "wasmtime": {
        enum0 = 3;
        break;
      }
      case "wasmtime-py": {
        enum0 = 4;
        break;
      }
      case "c": {
        enum0 = 5;
        break;
      }
      case "markdown": {
        enum0 = 6;
        break;
      }
      default: {
        throw new TypeError(`"${val0}" is not one of the cases of lang`);
      }
    }
    const ptr1 = utf8_encode(arg1, realloc, memory);
    const len1 = UTF8_ENCODED_LEN;
    const {rustUnchecked: v2_0, wasmtimeTracing: v2_1, wasmtimeCustomError: v2_2, import: v2_3 } = arg2;
    const ret = this._exports['render'](enum0, ptr1, len1, v2_0 ? 1 : 0, v2_1 ? 1 : 0, v2_2 ? 1 : 0, v2_3 ? 1 : 0);
    
    let variant7;
    switch (data_view(memory).getUint8(ret + 0, true)) {
      case 0: {
        const len5 = data_view(memory).getInt32(ret + 8, true);
        const base5 = data_view(memory).getInt32(ret + 4, true);
        const result5 = [];
        for (let i = 0; i < len5; i++) {
          const base = base5 + i * 16;
          const ptr3 = data_view(memory).getInt32(base + 0, true);
          const len3 = data_view(memory).getInt32(base + 4, true);
          const result3 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr3, len3));
          const ptr4 = data_view(memory).getInt32(base + 8, true);
          const len4 = data_view(memory).getInt32(base + 12, true);
          const result4 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr4, len4));
          result5.push([result3, result4]);
        }
        
        variant7 = { tag: "ok", val: result5 };
        break;
      }
      case 1: {
        const ptr6 = data_view(memory).getInt32(ret + 4, true);
        const len6 = data_view(memory).getInt32(ret + 8, true);
        const result6 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr6, len6));
        
        variant7 = { tag: "err", val: result6 };
        break;
      }
      default: {
        throw new RangeError("invalid variant discriminant for expected");
      }
    }
    this._exports["cabi_post_render"](ret);
    return variant7;
  }
}
