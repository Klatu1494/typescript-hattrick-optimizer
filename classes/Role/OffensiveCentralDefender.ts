class OffensiveCentralDefender extends Role {
    private static instance: OffensiveCentralDefender = null;

    public static getInstance(): OffensiveCentralDefender {
        if (this.instance === null) {
            this.instance = new OffensiveCentralDefender(
                CentralDefendersZone.getInstance(),
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
            0.4005 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return 0.6986 * player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.4005 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.411 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        _player: Player,
        _side: NearestSide
    ): number {
        return 0;
    }

    protected getCentralAttackContribution(_player: Player): number {
        return 0;
    }

    protected getRightAttackContribution(
        _player: Player,
        _side: NearestSide
    ): number {
        return 0;
    }
}
