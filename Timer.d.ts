declare class Timer {
    private elements;
    seconds: number;
    private interval?;
    constructor(elements: {
        m: HTMLElement;
        s: HTMLElement;
    }, seconds?: number);
    enhanceSeconds(seconds: number): number;
    start(ms?: number): void;
    stop(): void;
    updateTime(seconds: number): void;
}
export default Timer;
