declare class Timer {
    private minutes;
    private seconds;
    m?: HTMLElement;
    s?: HTMLElement;
    interval?: number;
    constructor(minutes?: number, seconds?: number);
    addSeconds(seconds: number): void;
    assignElements(m: HTMLElement, s: HTMLElement): void;
    before(minutes: number, seconds: number): [number, number];
    secondsFromStart(): number;
    start(ms?: number): void;
    stop(): void;
    updateTime(minutes: number, seconds: number): void;
}
export default Timer;
