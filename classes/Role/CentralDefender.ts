class CentralDefender extends Role {
    private static instance: CentralDefender = null;

    public static getInstance(): CentralDefender {
        if (this.instance === null) {
            this.instance = new CentralDefender(
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
            0.5296 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return player.getDefendingSkill() * player.getForm();
    }

    protected getRightDefenseContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            0.5296 *
            player.getDefendingSkill() *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.2521 * player.getPlaymakingSkill() * player.getForm();
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
