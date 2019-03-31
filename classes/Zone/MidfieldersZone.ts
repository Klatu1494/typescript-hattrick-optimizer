class MidfieldersZone extends Zone<4> {
    private static instance: MidfieldersZone = null;

    private constructor() {
        super();
        this.setMultipliers([null, 1, 0.9359, 0.8271]);
    }

    public static getInstance(): MidfieldersZone {
        if (this.instance === null) {
            this.instance = new MidfieldersZone();
        }
        return this.instance;
    }
}
