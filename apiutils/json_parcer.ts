export class JsonParser {
    /**
     * Parses a JSON string and returns the corresponding object.
     * @param jsonString - The JSON string to parse.
     * @returns The parsed object.
     * @throws Error if the JSON string is invalid.
     */
    static parse(jsonString: string): Record<string, any> {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            throw new Error(`Invalid JSON string: ${error.message}`);
        }
    }

    /**
     * Converts a JavaScript object to a JSON string.
     * @param obj - The object to stringify.
     * @returns The JSON string representation of the object.
     * @throws Error if the object cannot be stringified.
     */
    static stringify(obj: Record<string, any>): string {
        try {
            return JSON.stringify(obj, null, 2); // Pretty print with 2 spaces
        } catch (error) {
            throw new Error(`Unable to stringify object: ${error.message}`);
        }
    }

    /**
     * Safely parses a JSON string and returns the object or a default value if parsing fails.
     * @param jsonString - The JSON string to parse.
     * @param defaultValue - The default value to return if parsing fails.
     * @returns The parsed object or the default value.
     */
    static safeParse(jsonString: string, defaultValue: Record<string, any> = {}): Record<string, any> {
        try {
            return JSON.parse(jsonString);
        } catch {
            return defaultValue;
        }
    }
}