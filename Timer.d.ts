interface TimerNodes {
    minutes?: Node;
    seconds?: Node;
    startButton?: Node;
    stopButton?: Node;
}
declare class Timer {
    private nodes;
    seconds: number;
    private interval?;
    constructor(nodes: TimerNodes, seconds?: number);
    enhanceSeconds(seconds: number): number;
    start(ms?: number): void;
    stop(): void;
    updateTime(seconds: number): void;
}
export default Timer;
