import Timer from "./Timer.js";
declare class EveryMinuteOnTheMinuteTimer extends Timer {
    private rounds;
    private secondsPerRound;
    private currentRound;
    constructor(nodes: Timer["nodes"], rounds?: number, secondsPerRound?: number);
    addRound(): void;
    enhanceSeconds(seconds: number): number;
    start(): void;
    stop(): void;
}
export default EveryMinuteOnTheMinuteTimer;
