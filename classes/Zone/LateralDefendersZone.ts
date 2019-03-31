class LateralDefendersZone extends Zone<3> {
    private static instance: LateralDefendersZone = null;

    private constructor() {
        super();
        this.setMultipliers([null, 1, 1]);
    }

    public static getInstance(): LateralDefendersZone {
        if (this.instance === null) {
            this.instance = new LateralDefendersZone();
        }
        return this.instance;
    }
}
