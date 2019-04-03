abstract class Role {
    private static nextId: number = 1;
    private id: number;

    protected constructor(
        private readonly zone: IZone,
        private readonly possibleNearestSides: ReadonlyArray<NearestSide>
    ) {
        this.id = Role.nextId;
        Role.nextId++;
    }

    protected abstract getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number;

    protected abstract getCentralDefenseContribution(player: Player): number;

    protected abstract getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number;

    protected abstract getMidfieldContribution(player: Player): number;

    protected abstract getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number;

    protected abstract getCentralAttackContribution(player: Player): number;

    protected abstract getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number;

    public getPositionedPlayerPerformance(
        player: Player,
        nearestSide: NearestSide
    ) {
        return new PlayerPerformance(
            player,
            this,
            this.getLeftDefenseContribution(player, nearestSide),
            this.getCentralDefenseContribution(player),
            this.getRightDefenseContribution(player, nearestSide),
            this.getLeftAttackContribution(player, nearestSide),
            this.getCentralAttackContribution(player),
            this.getRightAttackContribution(player, nearestSide),
            this.getMidfieldContribution(player)
        );
    }

    public getZone(): IZone {
        return this.zone;
    }

    public getPossibleNearestSides(): ReadonlyArray<NearestSide> {
        return this.possibleNearestSides;
    }

    public getId(): number {
        return this.id;
    }
}
