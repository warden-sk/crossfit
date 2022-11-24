declare class Timer {
    m?: HTMLElement;
    s?: HTMLElement;
    interval?: number;
    minutes: number;
    seconds: number;
    assignElements({ minutes, seconds, }: {
        minutes: HTMLElement;
        seconds: HTMLElement;
    }): void;
    secondsFromStart(): number;
    addSeconds(seconds: number): void;
    before(minutes: number, seconds: number): [number, number];
    start(ms?: number): void;
    stop(): void;
    updateTime(minutes: number, seconds: number): void;
}
export default Timer;
