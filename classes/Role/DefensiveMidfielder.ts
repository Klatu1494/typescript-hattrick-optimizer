class DefensiveMidfielder extends Role {
    private static instance: DefensiveMidfielder = null;

    private constructor() {
        super("DMF", MidfieldersZone.getInstance(), [
            Left.getInstance(),
            None.getInstance(),
            Right.getInstance()
        ]);
    }

    public static getInstance(): DefensiveMidfielder {
        if (this.instance === null) {
            this.instance = new DefensiveMidfielder();
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2765 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.6204 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.2765 *
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
            0.1172 *
            player.getPassingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return (
            (0.1736 * player.getPassingSkill() +
                0.12 * player.getScoringSkill()) *
            player.getForm()
        );
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.1172 *
            player.getPassingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
