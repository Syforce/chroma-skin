import { AbstractProvider, SandStormService } from 'sandstorm-trade';

import { ColorConfig } from '../model/color.config';

export class ChromaSkinService extends AbstractProvider {
    private static instance: ChromaSkinService;

    private config: ColorConfig = { time: true };

    private constructor() {
        super();
    }

    private static createInstance(): void {
        if (!ChromaSkinService.instance) {
            const sandStormService: SandStormService = SandStormService.getInstance();
            const instance: ChromaSkinService = sandStormService.getProvider(ChromaSkinService) as ChromaSkinService;

            if (instance) {
                ChromaSkinService.instance = instance;
            } else {
                ChromaSkinService.instance = new ChromaSkinService();
                sandStormService.setProvider(ChromaSkinService.instance);
            }
        }
    }

    public red(...args) {
        this.display('\x1b[31m', '\x1b[2m', ...args);
    }

    public redLight(...args) {
        this.display('\x1b[31m', '\x1b[1m', ...args);
    }

    public green(...args) {
        this.display('\x1b[32m', '\x1b[2m', ...args);
    }

    public greenLight(...args) {
        this.display('\x1b[32m', '\x1b[1m', ...args);
    }

    public yellow(...args) {
        this.display('\x1b[33m', '\x1b[2m', ...args);
    }

    public yellowLight(...args) {
        this.display('\x1b[33m', '\x1b[1m', ...args);
    }

    public blue(...args) {
        this.display('\x1b[34m', '\x1b[2m', ...args);
    }

    public blueLight(...args) {
        this.display('\x1b[34m', '\x1b[1m', ...args);
    }

    public purple(...args) {
        this.display('\x1b[35m', '\x1b[2m', ...args);
    }

    public purpleLight(...args) {
        this.display('\x1b[35m', '\x1b[1m', ...args);
    }

    private display(color: string, type: string, ...args): void {
        if (this.config.time) {
            console.log(color, type, new Date().toISOString(), '>', ...args, '\x1b[0m');
        } else {
            console.log(color, type, ...args, '\x1b[0m');
        }
    }

    public init(config: ColorConfig = { time: false }): void {
        this.config = config;
    }

    public static getInstance(): ChromaSkinService {
        this.createInstance();
        return this.instance;
    }
}

export const chroma: ChromaSkinService = ChromaSkinService.getInstance();