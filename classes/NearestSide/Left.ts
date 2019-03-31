class Left extends NearestSide {
    private static instance: Left = null;

    private constructor() {
        super(0);
    }

    public static getInstance(): Left {
        if (this.instance === null) {
            this.instance = new Left();
        }
        return this.instance;
    }
}
