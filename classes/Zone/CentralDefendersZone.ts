class CentralDefendersZone extends Zone<4> {
    private static instance: CentralDefendersZone = null;

    private constructor() {
        super();
        this.setMultipliers([null, 1, 0.964, 0.914]);
    }

    public static getInstance(): CentralDefendersZone {
        if (this.instance === null) {
            this.instance = new CentralDefendersZone();
        }
        return this.instance;
    }
}
