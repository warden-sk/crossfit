import Timer from "./Timer.js";
declare class EveryMinuteOnTheMinuteTimer extends Timer {
    private rounds;
    private secondsPerRound;
    private currentRound;
    constructor(nodes: {
        m: Node;
        s: Node;
    }, rounds?: number, secondsPerRound?: number);
    addRound(): void;
    enhanceSeconds(seconds: number): number;
    start(): void;
}
export default EveryMinuteOnTheMinuteTimer;
