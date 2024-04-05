/** @noSelfInFile */

import type { JSONValue } from "../utils"

declare global {
    namespace http {
        /**
         * Performs a GET request.
         * 
         * Returns `true` if the request succeeded, and the 
         * second value is the response data.
         * 
         * @param url The URL to request.
         * @param opts Additional options for the request.
         * @tupleReturn
         */
        function get(url: string, opts?: { query?: Record<string, string>, headers?: Record<string, string> }): LuaMultiReturn<[true, JSONValue]> | LuaMultiReturn<[false, string]>
    
        /**
         * Performs a POST request.
         * 
         * Returns `true` if the request succeeded, and the
         * second value is the response data.
         * 
         * @param url The URL to request.
         * @param body The body of the request.
         * @param opts Additional options for the request.
         * @tupleReturn
         */
        function post(url: string, body: string, opts?: { query?: Record<string, string>, headers?: Record<string, string> }): LuaMultiReturn<[true, JSONValue]> | LuaMultiReturn<[false, string]>
      }
}

export {}