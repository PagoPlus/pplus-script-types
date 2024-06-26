/** @noSelfInFile **/

export type JSONValue = string | number | boolean | null | { [x: string]: JSONValue } | Array<JSONValue>
