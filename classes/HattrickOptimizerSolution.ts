class HattrickOptimizerSolution {
    public constructor(
        private readonly positionedPlayers: ReadonlyArray<PositionedPlayer>,
        private value: number
    ) {
        if (positionedPlayers.length < AMOUNT_OF_PLAYERS_IN_A_FORMATION) {
            throw new NotHighEnoughError(
                AMOUNT_OF_PLAYERS_DESCRIPTION,
                AMOUNT_OF_PLAYERS_IN_A_FORMATION.toString(),
                true
            );
        }
    }

    public getPositionedPlayers(): ReadonlyArray<PositionedPlayer> {
        return this.positionedPlayers;
    }

    public getValue(recalculate: boolean = true): number {
        if (recalculate) {
            //recalculate
        }
        return this.value;
    }
}
