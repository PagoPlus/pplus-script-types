import type { JSONValue } from "../utils"

type GenericDevice = {
  id: string
  is_deleted: boolean
  metadata: Record<string, JSONValue>
  origin: string
  created_at: string
  updated_at: string
}
declare global {
  namespace data {
    /**
     * Get data for a single device by its ID.
     * @param device_id The ID of the device
     */
    function get_device(device_id: string): GenericDevice | null

    /**
     * Get data for all of the Project devices
     */
    function get_devices(): GenericDevice[]

    /**
     * Update the metadata of a device.
     *
     * If the operation fails, `null` is returned.
     *
     * @param device_id ID of the device
     * @param new_metadata New value for the metadata
     */
    function set_device_metadata(device_id: string, new_metadata: Record<string, JSONValue>): GenericDevice | null
  }
}

export default global
