class GoalkeepersZone extends Zone<2> {
    private static instance: GoalkeepersZone = null;

    private constructor() {
        super();
        this.setMultipliers([null, 1]);
    }

    public static getInstance(): GoalkeepersZone {
        if (this.instance === null) {
            this.instance = new GoalkeepersZone();
        }
        return this.instance;
    }
}
