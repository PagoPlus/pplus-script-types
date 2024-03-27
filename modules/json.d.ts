/** @noSelfInFile **/

import type { JSONValue } from "../utils"

declare global {
  namespace json {
    /**
     * Convert an object into JSON.
     *
     * Returns `true` as first value the encoding works, and
     * the second value is the encoded data.
     *
     * @param payload The data to convert into JSON
     * @tupleReturn
     */
    function encode(payload: JSONValue): [boolean, string]

    /**
     * Parses the JSON string and returns the data.
     *
     * If the parsing works, the first value is `true` and the
     * data is returned in the second value.
     *
     * If it fails, the first value is `false` and the second
     * value holds the error.
     *
     * @param payload The JSON string to parse.
     * @tupleReturn
     */
    function decode(payload: string): [true, JSONValue] | [false, string]
  }
}

export {}
