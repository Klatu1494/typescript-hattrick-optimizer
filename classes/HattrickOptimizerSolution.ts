class HattrickOptimizerSolution {
    public constructor(
        private readonly positionedPlayers: ReadonlyArray<PositionedPlayer> & {
            length: 11;
        },
        private value: number
    ) {}

    public getPositionedPlayers(): ReadonlyArray<PositionedPlayer> & {
        length: 11;
    } {
        return this.positionedPlayers;
    }

    public getValue(recalculate: boolean = true): number {
        if (recalculate) {
            //recalculate
        }
        return this.value;
    }
}
