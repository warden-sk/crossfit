import Timer from "./Timer.js";
declare class EveryMinuteOnTheMinuteTimer extends Timer {
    private rounds;
    private secondsPerRound;
    private currentRound;
    constructor(elements: {
        m: HTMLElement;
        s: HTMLElement;
    }, rounds: number, secondsPerRound?: number);
    addRound(): void;
    enhanceSeconds(seconds: number): number;
    start(): void;
}
export default EveryMinuteOnTheMinuteTimer;
