/* Types for luerl */
/// <reference types="@typescript-to-lua/language-extensions" />
/// <reference types="lua-types/core/global.d.ts" />
/// <reference types="lua-types/core/math.d.ts" />
/// <reference types="lua-types/core/os.d.ts" />
/// <reference types="lua-types/core/string.d.ts" />
/// <reference types="lua-types/core/metatable.d.ts" />
/// <reference types="lua-types/core/table.d.ts" />
/// <reference types="lua-types/special/5.2-plus.d.ts" />
/// <reference types="lua-types/special/5.2-plus-or-jit.d.ts" />
/// <reference types="lua-types/special/5.3-plus.d.ts" />
/// <reference types="lua-types/special/5.4-pre.d.ts" />

// <reference types="lua-types/5.3" />

/** @noSelfInFile **/

export type * from "./modules/global.d.ts"
export type * from "./modules/data.d.ts"
export type * from "./modules/json.d.ts"

declare global {}

export {}
