class NearestSide {
    constructor(private readonly distanceFromLeftSide: number) {}

    public getLeftContributionMultiplier(): number {
        return 1 - this.distanceFromLeftSide;
    }

    public getRightContributionMultiplier(): number {
        return this.distanceFromLeftSide;
    }
}
