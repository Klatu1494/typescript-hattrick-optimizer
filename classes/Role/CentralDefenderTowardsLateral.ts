class CentralDefenderTowardsLateral extends Role {
    private static instance: CentralDefenderTowardsLateral = null;

    public static getInstance(): CentralDefenderTowardsLateral {
        if (this.instance === null) {
            this.instance = new CentralDefenderTowardsLateral(
                CentralDefendersZone.getInstance(),
                [Left.getInstance(), Right.getInstance()]
            );
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.8248 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.68 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.8248 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.1763 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2673 *
            player.getWingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(_player: Player): number {
        return 0;
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2673 *
            player.getWingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
