class StrikerTowardsLateral extends Role {
    private static instance: StrikerTowardsLateral = null;

    public static getInstance(): StrikerTowardsLateral {
        if (this.instance === null) {
            this.instance = new StrikerTowardsLateral(
                StrikersZone.getInstance(),
                [Left.getInstance(), Right.getInstance()]
            );
        }
        return this.instance;
    }

    protected getLeftDefenseContribution(
        _player: Player,
        _side: NearestSide
    ): number {
        return 0;
    }

    protected getCentralDefenseContribution(_player: Player): number {
        return 0;
    }

    protected getRightDefenseContribution(
        _player: Player,
        _side: NearestSide
    ): number {
        return 0;
    }

    protected getMidfieldContribution(player: Player): number {
        return 0.15 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.3994 * player.getScoringSkill() +
                0.433 * player.getWingSkill() +
                0.1892 * player.getPassingSkill()) *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return (
            (0.6093 * player.getScoringSkill() +
                0.2604 * player.getPassingSkill()) *
            player.getForm()
        );
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.3994 * player.getScoringSkill() +
                0.433 * player.getWingSkill() +
                0.1892 * player.getPassingSkill()) *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
