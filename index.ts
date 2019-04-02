addEventListener("load", () => {
    let formations: ReadonlyArray<Formation> = [
        CentralDefender.getInstance(),
        CentralDefenderTowardsLateral.getInstance(),
        DefensiveLateralDefender.getInstance(),
        DefensiveMidfielder.getInstance(),
        DefensiveStriker.getInstance(),
        DefensiveWing.getInstance(),
        Goalkeeper.getInstance(),
        LateralDefender.getInstance(),
        LateralDefenderTowardsMiddle.getInstance(),
        Midfielder.getInstance(),
        MidfielderTowardsLateral.getInstance(),
        OffensiveCentralDefender.getInstance(),
        OffensiveLateralDefender.getInstance(),
        OffensiveMidfielder.getInstance(),
        OffensiveWing.getInstance(),
        Striker.getInstance(),
        StrikerTowardsLateral.getInstance(),
        Wing.getInstance(),
        WingTowardsMiddle.getInstance()
    ]
        .reduce<ReadonlyArray<Map<Role, number>>>(
            (
                previousArray: ReadonlyArray<Map<Role, number>>,
                role: Role,
                index: number,
                roles: ReadonlyArray<Role>
            ): ReadonlyArray<Map<Role, number>> => {
                let newArray: Array<Map<Role, number>> = [];
                let zone: IZone = role.getZone();
                let playersFulfillingRoleMaxAmount: number = role.getPossibleNearestSides()
                    .length;
                let maximumPossibleRemainingPlayers: number = 0;
                let rolesAmount: number = roles.length;
                for (let i: number = index + 1; i < rolesAmount; i++) {
                    maximumPossibleRemainingPlayers += roles[
                        i
                    ].getPossibleNearestSides().length;
                }
                for (let currentMap of previousArray) {
                    let playersInMapAmount: number = 0;
                    let playersInZoneAmount: number = 0;
                    let i: number = 0;
                    for (let playersFulfillingRoleAmount of currentMap) {
                        playersInMapAmount += playersFulfillingRoleAmount[1];
                        playersInZoneAmount +=
                            playersFulfillingRoleAmount[0].getZone() === zone
                                ? playersFulfillingRoleAmount[1]
                                : 0;
                    }
                    while (
                        i <=
                            playersFulfillingRoleMaxAmount -
                                playersInZoneAmount &&
                        playersInMapAmount + i <=
                            AMOUNT_OF_PLAYERS_IN_A_FORMATION &&
                        AMOUNT_OF_PLAYERS_IN_A_FORMATION <=
                            playersInMapAmount + maximumPossibleRemainingPlayers
                    ) {
                        let currentMapCopy: Map<Role, number> = new Map(
                            currentMap
                        );
                        currentMapCopy.set(role, i);
                        newArray.push(currentMapCopy);
                        i++;
                    }
                }
                return newArray;
            },
            [new Map()]
        )
        .map<Formation>(
            (element: Map<Role, number>): Formation => new Formation(element)
        )
        .filter(
            (
                element: Formation,
                _index: number,
                _array: ReadonlyArray<Formation>
            ) => element.isValid()
        );
    console.log(formations);
});
