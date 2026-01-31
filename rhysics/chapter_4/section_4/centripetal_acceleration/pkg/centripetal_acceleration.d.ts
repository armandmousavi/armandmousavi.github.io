/* tslint:disable */
/* eslint-disable */

export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run: () => void;
    readonly wasm_bindgen__closure__destroy__hfe0de338d3962167: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h30f1284a49ef2f6a: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h129f54d01d74b5cf: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h5e5b461d26f3db10: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h5b9d30b826f8c5e8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h17595f587b64b3f9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h47fa8c4282d8bd85: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0c550f5937e9dbf4: (a: number, b: number) => void;
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
