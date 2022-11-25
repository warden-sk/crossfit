declare class Timer {
    seconds: number;
    private m?;
    private s?;
    private interval?;
    constructor(seconds?: number);
    assignElements(m: HTMLElement, s: HTMLElement): void;
    enhancedSeconds(seconds: number): number;
    start(ms?: number): void;
    stop(): void;
    updateTime(seconds: number): void;
}
export default Timer;
