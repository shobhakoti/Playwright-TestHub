class ConfigReader {
    private static instance: ConfigReader;
    private config: any;

    private constructor() {
        this.config = require('../config/config.json');
    }

    static getInstance(): ConfigReader {
        if (!this.instance) {
            this.instance = new ConfigReader();
        }
        return this.instance;
    }

    getValue(key: string): string {
        return this.config[key];
    }
}