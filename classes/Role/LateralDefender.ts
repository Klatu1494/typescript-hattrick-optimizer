class LateralDefender extends Role {
    private static instance: LateralDefender = null;

    private constructor() {
        super("LD", LateralDefendersZone.getInstance(), [
            Left.getInstance(),
            Right.getInstance()
        ]);
    }

    public static getInstance(): LateralDefender {
        if (this.instance === null) {
            this.instance = new LateralDefender();
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.9413 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.4109 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.9413 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.1667 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.5219 *
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
            0.5219 *
            player.getWingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
