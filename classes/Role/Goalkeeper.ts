class Goalkeeper extends Role {
    private static instance: Goalkeeper = null;

    public static getInstance(): Goalkeeper {
        if (this.instance === null) {
            this.instance = new Goalkeeper(GoalkeepersZone.getInstance(), [
                None.getInstance()
            ]);
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        player: Player,
        nearestSide: NearestSide
    ): number {
        return (
            (0.6296 * player.getGoalkeeperSkill() +
                0.2821 * player.getDefendingSkill()) *
            player.getForm() *
            nearestSide.getLeftContributionMultiplier()
        );
    }

    protected getCentralDefenseContribution(player: Player): number {
        return (
            (0.8892 * player.getGoalkeeperSkill() +
                0.4226 * player.getDefendingSkill()) *
            player.getForm()
        );
    }

    protected getRightDefenseContribution(
        player: Player,
        nearestSide: NearestSide
    ): number {
        return (
            (0.6296 * player.getGoalkeeperSkill() +
                0.2821 * player.getDefendingSkill()) *
            player.getForm() *
            nearestSide.getRightContributionMultiplier()
        );
    }

    protected getMidfieldContribution(_player: Player): number {
        return 0;
    }

    protected getLeftAttackContribution(
        _player: Player,
        _nearestSide: NearestSide
    ): number {
        return 0;
    }

    protected getCentralAttackContribution(_player: Player): number {
        return 0;
    }

    protected getRightAttackContribution(
        _player: Player,
        _nearestSide: NearestSide
    ): number {
        return 0;
    }
}
