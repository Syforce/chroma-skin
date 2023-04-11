import { ColorConfig } from '../model/color.config';

export class ChromaSkinService {
    private static config: ColorConfig = { time: true };

    private constructor() { }

    public static red(...args: any[]) {
        this.display('\x1b[31m', '\x1b[2m', ...args);
    }

    public static redLight(...args: any[]) {
        this.display('\x1b[31m', '\x1b[1m', ...args);
    }

    public static green(...args: any[]) {
        this.display('\x1b[32m', '\x1b[2m', ...args);
    }

    public static greenLight(...args: any[]) {
        this.display('\x1b[32m', '\x1b[1m', ...args);
    }

    public static yellow(...args: any[]) {
        this.display('\x1b[33m', '\x1b[2m', ...args);
    }

    public static yellowLight(...args: any[]) {
        this.display('\x1b[33m', '\x1b[1m', ...args);
    }

    public static blue(...args: any[]) {
        this.display('\x1b[34m', '\x1b[2m', ...args);
    }

    public static blueLight(...args: any[]) {
        this.display('\x1b[34m', '\x1b[1m', ...args);
    }

    public static purple(...args: any[]) {
        this.display('\x1b[35m', '\x1b[2m', ...args);
    }

    public static purpleLight(...args: any[]) {
        this.display('\x1b[35m', '\x1b[1m', ...args);
    }

    private static display(color: string, type: string, ...args: any[]): void {
        if (this.config.time) {
            console.log(color, type, new Date().toISOString(), '>', ...args, '\x1b[0m');
        } else {
            console.log(color, type, ...args, '\x1b[0m');
        }
    }

    public static init(config: ColorConfig = { time: false }): void {
        this.config = config;
    }
}

export const chroma = ChromaSkinService;