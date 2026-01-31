/* tslint:disable */
/* eslint-disable */
export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly run: () => void;
  readonly wasm_bindgen__convert__closures_____invoke__he35b428907746888: (a: number, b: number) => void;
  readonly wasm_bindgen__closure__destroy__h419ff56e30a1fe8d: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h7639d2da4f0cca4e: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__convert__closures_____invoke__he688126230f0b52e: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__h4cc1d2c16a0a34aa: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__hc33815e4b95a01bc: (a: number, b: number, c: any, d: any) => void;
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
