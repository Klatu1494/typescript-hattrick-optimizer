class OffensiveLateralDefender extends Role {
    private static instance: OffensiveLateralDefender = null;

    public static getInstance(): OffensiveLateralDefender {
        if (this.instance === null) {
            this.instance = new OffensiveLateralDefender(
                LateralDefendersZone.getInstance(),
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
            0.6714 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.3804 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.6714 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.2308 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.6607 *
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
            0.6607 *
            player.getWingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
