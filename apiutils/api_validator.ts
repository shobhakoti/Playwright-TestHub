export class ApiResponseValidator {
    /**
     * Validates if the response status matches the expected status.
     * @param actualStatus - The actual status code from the response.
     * @param expectedStatus - The expected status code.
     */
    static validateStatus(actualStatus: number, expectedStatus: number): void {
        if (actualStatus !== expectedStatus) {
            throw new Error(`Expected status ${expectedStatus}, but got ${actualStatus}`);
        }
    }

    /**
     * Validates if the response body contains the required properties.
     * @param responseBody - The JSON response body.
     * @param requiredProperties - An array of required property names.
     */
    static validateProperties(responseBody: Record<string, any>, requiredProperties: string[]): void {
        for (const property of requiredProperties) {
            if (!responseBody.hasOwnProperty(property)) {
                throw new Error(`Missing required property: ${property}`);
            }
        }
    }

    /**
     * Validates if the response body matches the expected structure.
     * @param responseBody - The JSON response body.
     * @param expectedStructure - An object representing the expected structure.
     */
    static validateStructure(responseBody: Record<string, any>, expectedStructure: Record<string, any>): void {
        for (const key in expectedStructure) {
            if (!responseBody.hasOwnProperty(key)) {
                throw new Error(`Missing key in response: ${key}`);
            }
            if (typeof responseBody[key] !== typeof expectedStructure[key]) {
                throw new Error(`Type mismatch for key "${key}". Expected ${typeof expectedStructure[key]}, but got ${typeof responseBody[key]}`);
            }
        }
    }
}