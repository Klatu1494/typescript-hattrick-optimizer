class Midfielder extends Role {
    private static instance: Midfielder = null;

    public static getInstance(): Midfielder {
        if (this.instance === null) {
            this.instance = new Midfielder(MidfieldersZone.getInstance(), [
                Left.getInstance(),
                None.getInstance(),
                Right.getInstance()
            ]);
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.1929 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.378 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.1929 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2276 *
            player.getPassingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return (
            (0.3383 * player.getPassingSkill() +
                0.21 * player.getScoringSkill()) *
            player.getForm()
        );
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2276 *
            player.getPassingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
