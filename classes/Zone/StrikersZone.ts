class StrikersZone extends Zone<4> {
    private static instance: StrikersZone = null;

    private constructor() {
        super();
        this.setMultipliers([null, 1, 0.9459, 0.864]);
    }

    public static getInstance(): StrikersZone {
        if (this.instance === null) {
            this.instance = new StrikersZone();
        }
        return this.instance;
    }
}
