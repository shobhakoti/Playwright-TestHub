import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
    private apiContext!: APIRequestContext;

    constructor() {}

    async initialize(baseURL: string) {
        this.apiContext = await request.newContext({
            baseURL: 'https://reqres.in/api/',
            extraHTTPHeaders: {
                'Content-Type': 'application/json',
            },
        });
    }

    async post(endpoint: string, data: Record<string, any>) {
        const response = await this.apiContext.post(endpoint, {
            data: data,
        });
        return this.handleResponse(response);
    }

    async get(endpoint: string, params?: Record<string, any>) {
        const response = await this.apiContext.get(endpoint, {
            params: params,
        });
        return this.handleResponse(response);
    }

    async put(endpoint: string, data: Record<string, any>) {
        const response = await this.apiContext.put(endpoint, {
            data: data,
        });
        return this.handleResponse(response);
    }

    async delete(endpoint: string) {
        const response = await this.apiContext.delete(endpoint);
        return this.handleResponse(response);
    }

    private async handleResponse(response: any) {
        if (!response.ok()) {
            throw new Error(`API request failed with status ${response.status()}: ${response.statusText()}`);
        }
        return response.json();
    }

    async dispose() {
        await this.apiContext.dispose();
    }
}