class DefensiveStriker extends Role {
    private static instance: DefensiveStriker = null;

    public static getInstance(): DefensiveStriker {
        if (this.instance === null) {
            this.instance = new DefensiveStriker(StrikersZone.getInstance(), [
                Left.getInstance(),
                None.getInstance(),
                Right.getInstance()
            ]);
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
        return 0.4167 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.1201 * player.getScoringSkill() +
                0.1321 * player.getWingSkill() +
                (player.isTechnical() ? 0.3514 : 0.2378) *
                    player.getPassingSkill()) *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return (
            (0.5852 * player.getScoringSkill() +
                0.5718 * player.getPassingSkill()) *
            player.getForm()
        );
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.1201 * player.getScoringSkill() +
                0.1321 * player.getWingSkill() +
                (player.isTechnical() ? 0.3514 : 0.2378) *
                    player.getPassingSkill()) *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
