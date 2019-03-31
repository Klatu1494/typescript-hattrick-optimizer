class None extends NearestSide {
    private static instance: None = null;

    private constructor() {
        super(0.5);
    }

    public static getInstance(): None {
        if (this.instance === null) {
            this.instance = new None();
        }
        return this.instance;
    }
}
