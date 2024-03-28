/** @noSelfInFile **/
import type { FormKitSchemaDefinition } from "@formkit/core"
import type { JSONSchema, FromSchema } from "json-schema-to-ts"

export type SettingsSchemaBuilder = <SCHEMA extends JSONSchema, DATA = FromSchema<SCHEMA>>(schema: SCHEMA) => DATA
export type MaybeSettingsSchemaBuilder = <SCHEMA extends JSONSchema, DATA = FromSchema<SCHEMA>>(
  schema: SCHEMA,
) => DATA | undefined

export interface ScriptMetadata<SetSchema extends JSONSchema | undefined> {
  /**
   * The name of the script
   */
  name: string
  /**
   * Current version of the script.
   */
  version: string
  /**
   * A short and concise explanation of what the script does
   * and what it is useful for.
   */
  description: string
  /**
   * Declaration of what settings need to be given to the script
   * when setting it up.
   *
   * If _no_ object is provided, then _no setting_ is provided.
   *
   * FormKit is used to display these settings. You can read more about it
   * [here](https://formkit.com/essentials/schema).
   *
   * If you want to use some nicer-looking inputs, we provide PrimeVue components
   * for FormKit. You can read about those [here](https://formkit-primevue.netlify.app/).
   */
  settings_form?: FormKitSchemaDefinition
  /**
   * If `settingsForm` is defined, then you can add a `settingsSchema` to add
   * JSON Schema validation to your settings form.
   *
   * This is very useful to ensure your form is always valid, and also provides
   * typings of your objects to use it in an easier way in your scripts.
   *
   * Extremely recommended to add if you are using `settingsForm`.
   */
  settings_schema?: SetSchema
}

declare global {
  /** These are needed so formkit won't raise errors, but don't really exist */
  type Document = never
  type ShadowRoot = never
  type FocusEvent = never
  type Event = never

  // our real namespace! All of these are real.
  namespace pplus {
    /**
     * Set the metadata for this script.
     * @param metadata The metadata of the script.
     */
    function set_script_metadata(metadata: ScriptMetadata<JSONSchema>): true | LuaMultiReturn<[false, string[]]>

    /**
     * Get the metadata of this script.
     */
    function get_script_metadata(): ScriptMetadata<JSONSchema>

    /**
     * Get settings for this script. This is only available if the script has `settings_schema` defined.
     */
    const get_settings: MaybeSettingsSchemaBuilder
  }
}

export {}
