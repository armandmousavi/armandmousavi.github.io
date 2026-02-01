/* tslint:disable */
/* eslint-disable */
export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly run: () => void;
  readonly wasm_bindgen__convert__closures_____invoke__h4b574730c8bfca6c: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h22a33465435609bf: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h8f63e7897109b33f: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h1017210904d45fcd: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h8a72cb505f73a23b: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h5871d3bca1a5b3ae: (a: number, b: number, c: any, d: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h75dfbe6de5d3b7f1: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h8956b044949d754f: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
