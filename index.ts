addEventListener("load", () => {
    let roles: ReadonlyArray<Role> = [
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
    ];
    let rolesCombinations: ReadonlyArray<
        ReadonlyArray<Role>
    > = Permutator.getInstance().getPermutations(
        roles,
        AMOUNT_OF_PLAYERS_IN_A_FORMATION
    );
});
