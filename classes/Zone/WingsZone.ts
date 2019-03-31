class WingsZone extends Zone<3> {
    private static instance: WingsZone = null;

    private constructor() {
        super();
        this.setMultipliers([null, 1, 1]);
    }

    public static getInstance(): WingsZone {
        if (this.instance === null) {
            this.instance = new WingsZone();
        }
        return this.instance;
    }
}
