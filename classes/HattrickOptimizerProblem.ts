class HattrickOptimizerProblem {
    public constructor(
        private readonly players: ReadonlyArray<Player>,
        private readonly formations: ReadonlyArray<Formation>,
        private readonly expectedLeftDefense: number,
        private readonly expectedCentralDefense: number,
        private readonly expectedRightDefense: number,
        private readonly expectedLeftAttack: number,
        private readonly expectedCentralAttack: number,
        private readonly expectedRightAttack: number
    ) {}

    public getSolution(): HattrickOptimizerSolution {
        function getValueTerm(
            playerVariable: PlayerVariableExpression,
            playerValue: number,
            oppositeOpponentValue: number
        ): IDifferentiableExpression {
            return new DifferentiableQuotient(
                new DifferentiableProduct(
                    new ConstantExpression(oppositeOpponentValue + playerValue),
                    playerVariable
                ),
                new ConstantExpression(this.expectedRightAttack)
            );
        }

        if (this.players.length <= 10) {
            throw new NotHighEnoughError(
                AMOUNT_OF_PLAYERS_DESCRIPTION,
                (10).toString(),
                false
            );
        }
        for (let formation of this.formations) {
            let filledPositions: Map<IZone, Set<NearestSide>> = new Map();
            let playersUses: Array<PlayerVariableExpression> = [];
            let restrictions: Array<Restriction> = [];
            for (let playersFulfillingRoleAmount of formation.getPlayersFulfillingRolesAmount()) {
                let role: Role = playersFulfillingRoleAmount[0];
                let zone: IZone = role.getZone();
                if (!filledPositions.has(zone)) {
                    filledPositions.set(zone, new Set());
                }
                for (let combination of Permutator.getInstance().getPermutations(
                    role.getPossibleNearestSides(),
                    playersFulfillingRoleAmount[1]
                )) {
                    for (let nearestSide of combination) {
                        let zoneFilledPositions: Set<
                            NearestSide
                        > = filledPositions.get(zone);
                        let leftDefenseExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        let centralDefenseExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        let rightDefenseExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        let midfieldExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        let leftAttackExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        let centralAttackExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        let rightAttackExpression: IDifferentiableExpression = new ConstantExpression(
                            0
                        );
                        zoneFilledPositions.add(nearestSide);
                        for (let currentPlayer of this.players) {
                            let currentPlayerPerformance: PlayerPerformance = currentPlayer.getPerformance(
                                role,
                                nearestSide
                            );
                            let currentPlayerVariable: PlayerVariableExpression = new PlayerVariableExpression(
                                currentPlayer
                            );
                            playersUses.push(currentPlayerVariable);
                            leftDefenseExpression = new DifferentiableSum(
                                leftDefenseExpression,
                                getValueTerm(
                                    currentPlayerVariable,
                                    currentPlayerPerformance.getLeftDefenseContribution(),
                                    this.expectedRightAttack
                                )
                            );
                            centralDefenseExpression = new DifferentiableSum(
                                centralDefenseExpression,
                                getValueTerm(
                                    currentPlayerVariable,
                                    currentPlayerPerformance.getCentralDefenseContribution(),
                                    this.expectedCentralAttack
                                )
                            );
                            rightDefenseExpression = new DifferentiableSum(
                                rightDefenseExpression,
                                getValueTerm(
                                    currentPlayerVariable,
                                    currentPlayerPerformance.getRightDefenseContribution(),
                                    this.expectedLeftAttack
                                )
                            );
                            midfieldExpression = new DifferentiableSum(
                                midfieldExpression,
                                new DifferentiableProduct(
                                    new ConstantExpression(
                                        currentPlayerPerformance.getMidfieldContribution()
                                    ),
                                    currentPlayerVariable
                                )
                            );
                            leftAttackExpression = new DifferentiableSum(
                                leftAttackExpression,
                                getValueTerm(
                                    currentPlayerVariable,
                                    currentPlayerPerformance.getLeftAttackContribution(),
                                    this.expectedRightDefense
                                )
                            );
                            centralAttackExpression = new DifferentiableSum(
                                centralAttackExpression,
                                getValueTerm(
                                    currentPlayerVariable,
                                    currentPlayerPerformance.getCentralAttackContribution(),
                                    this.expectedCentralDefense
                                )
                            );
                            rightAttackExpression = new DifferentiableSum(
                                rightAttackExpression,
                                getValueTerm(
                                    currentPlayerVariable,
                                    currentPlayerPerformance.getRightAttackContribution(),
                                    this.expectedLeftDefense
                                )
                            );
                        }
                        zoneFilledPositions.delete(nearestSide);
                    }
                }
            }
        }
        return null;
    }
}
