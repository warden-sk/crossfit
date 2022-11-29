declare class Timer {
    private nodes;
    seconds: number;
    private interval?;
    constructor(nodes: {
        m: Node;
        s: Node;
    }, seconds?: number);
    enhanceSeconds(seconds: number): number;
    start(ms?: number): void;
    stop(): void;
    updateTime(seconds: number): void;
}
export default Timer;
