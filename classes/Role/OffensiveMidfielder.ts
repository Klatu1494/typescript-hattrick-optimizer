class OffensiveMidfielder extends Role {
    private static instance: OffensiveMidfielder = null;

    public static getInstance(): OffensiveMidfielder {
        if (this.instance === null) {
            this.instance = new OffensiveMidfielder(
                MidfieldersZone.getInstance(),
                [Left.getInstance(), None.getInstance(), Right.getInstance()]
            );
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.0803 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.1609 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.0803 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.9444 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.242 *
            player.getPassingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return (
            (0.5031 * player.getPassingSkill() +
                0.31 * player.getScoringSkill()) *
            player.getForm()
        );
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.242 *
            player.getPassingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
