class Wing extends Role {
    private static instance: Wing = null;

    private constructor() {
        super("W", WingsZone.getInstance(), [
            Left.getInstance(),
            Right.getInstance()
        ]);
    }

    public static getInstance(): Wing {
        if (this.instance === null) {
            this.instance = new Wing();
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.3571 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.2002 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.3571 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.4658 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.7723 * player.getWingSkill() +
                0.2186 * player.getPassingSkill()) *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return 0.1181 * player.getPassingSkill() * player.getForm();
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.7723 * player.getWingSkill() +
                0.2186 * player.getPassingSkill()) *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
