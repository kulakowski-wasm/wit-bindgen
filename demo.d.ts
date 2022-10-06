export type Result<T, E> = { tag: "ok", val: T } | { tag: "err", val: E };
export type Files = [string, string][];
/**
* # Variants
* 
* ## `"js"`
* 
* ## `"rust"`
* 
* ## `"java"`
* 
* ## `"wasmtime"`
* 
* ## `"wasmtime-py"`
* 
* ## `"c"`
* 
* ## `"markdown"`
*/
export type Lang = "js" | "rust" | "java" | "wasmtime" | "wasmtime-py" | "c" | "markdown";
export interface Options {
  rustUnchecked: boolean,
  wasmtimeTracing: boolean,
  wasmtimeCustomError: boolean,
  import: boolean,
}
export class Demo {
  
  /**
  * The WebAssembly instance that this class is operating with.
  * This is only available after the `instantiate` method has
  * been called.
  */
  instance: WebAssembly.Instance;
  
  /**
  * Initializes this object with the provided WebAssembly
  * module/instance.
  *
  * This is intended to be a flexible method of instantiating
  * and completion of the initialization of this class. This
  * method must be called before interacting with the
  * WebAssembly object.
  *
  * The first argument to this method is where to get the
  * wasm from. This can be a whole bunch of different types,
  * for example:
  *
  * * A precompiled `WebAssembly.Module`
  * * A typed array buffer containing the wasm bytecode.
  * * A `Promise` of a `Response` which is used with
  *   `instantiateStreaming`
  * * A `Response` itself used with `instantiateStreaming`.
  * * An already instantiated `WebAssembly.Instance`
  *
  * If necessary the module is compiled, and if necessary the
  * module is instantiated. Whether or not it's necessary
  * depends on the type of argument provided to
  * instantiation.
  *
  * If instantiation is performed then the `imports` object
  * passed here is the list of imports used to instantiate
  * the instance. This method may add its own intrinsics to
  * this `imports` object too.
  */
  instantiate(
  module: WebAssembly.Module | BufferSource | Promise<Response> | Response | WebAssembly.Instance,
  imports?: any,
  ): Promise<void>;
  render(lang: Lang, wit: string, options: Options): Result<Files, string>;
}
