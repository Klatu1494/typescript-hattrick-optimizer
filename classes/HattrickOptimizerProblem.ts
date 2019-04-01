class HattrickOptimizerProblem {
    private static amountOfPlayersDescription: string = AMOUNT_OF_PLAYERS_DESCRIPTION;

    public constructor(
        private readonly players: ReadonlyArray<Player>,
        private readonly formations: ReadonlyArray<Formation>,
        private readonly restrictions: ReadonlyArray<Restriction>,
        private readonly expectedLeftDefense: number,
        private readonly expectedCentralDefense: number,
        private readonly expectedRightDefense: number,
        private readonly expectedMidfield: number,
        private readonly expectedLeftAttack: number,
        private readonly expectedCentralAttack: number,
        private readonly expectedRightAttack: number
    ) {}

    public getSolution(): HattrickOptimizerSolution {
        let amountOfPlayers: number = this.players.length;
        let leftDefenseExpression: IDifferentiableExpression;
        let centralDefenseExpression: IDifferentiableExpression;
        let rightDefenseExpression: IDifferentiableExpression;
        let midfieldExpression: IDifferentiableExpression;
        let leftAttackExpression: IDifferentiableExpression;
        let centralAttackExpression: IDifferentiableExpression;
        let rightAttackExpression: IDifferentiableExpression;
        let firstPlayer: Player;
        let playersUses: Array<PlayerVariableExpression>;
        if (amountOfPlayers <= 10) {
            throw new NotHighEnoughError(
                HattrickOptimizerProblem.amountOfPlayersDescription,
                (10).toString()
            );
        }
        for (let formation of this.formations) {
            for (let playersFulfillingRoleAmount of formation.getPlayersFulfillingRolesAmount()) {
                let role: Role = playersFulfillingRoleAmount[0];
                let amountOfPlayersFulfillingRole: number =
                    playersFulfillingRoleAmount[1];
                //TODO: initialize expressions
                for (let i: number = 1; i < amountOfPlayers; i++) {
                    let currentPlayer: Player = this.players[i];
                    let currentPlayerVariable: PlayerVariableExpression = new PlayerVariableExpression(
                        currentPlayer
                    );
                }
            }
        }
        return null;
    }
}
