class OffensiveWing extends Role {
    private static instance: OffensiveWing = null;

    private constructor() {
        super("OW", WingsZone.getInstance(), [
            Left.getInstance(),
            Right.getInstance()
        ]);
    }

    public static getInstance(): OffensiveWing {
        if (this.instance === null) {
            this.instance = new OffensiveWing();
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.1888 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.0689 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.1888 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.3128 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.86 * player.getWingSkill() + 0.2511 * player.getPassingSkill()) *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return 0.1336 * player.getPassingSkill() * player.getForm();
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.86 * player.getWingSkill() + 0.2511 * player.getPassingSkill()) *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
