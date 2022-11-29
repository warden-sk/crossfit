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
    private last;
    constructor(nodes: TimerNodes, seconds?: number);
    enhanceSeconds(seconds: number): number;
    start(ms?: number): void;
    stop(): void;
    updateTextOfNode(node: Node | undefined, text: string): void;
    updateTime(seconds: number): void;
}
export default Timer;
