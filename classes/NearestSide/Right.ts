class Right extends NearestSide {
    private static instance: Right = null;

    private constructor() {
        super(1);
    }

    public static getInstance(): Right {
        if (this.instance === null) {
            this.instance = new Right();
        }
        return this.instance;
    }
}
