class MidfielderTowardsLateral extends Role {
    private static instance: MidfielderTowardsLateral = null;

    public static getInstance(): MidfielderTowardsLateral {
        if (this.instance === null) {
            this.instance = new MidfielderTowardsLateral(
                MidfieldersZone.getInstance(),
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
            0.2546 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.3461 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2546 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.8825 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.5153 * player.getWingSkill() +
                0.2835 * player.getPassingSkill()) *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return 0.2433 * player.getPassingSkill() * player.getForm();
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.5153 * player.getWingSkill() +
                0.2835 * player.getPassingSkill()) *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
