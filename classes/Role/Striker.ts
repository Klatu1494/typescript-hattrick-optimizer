class Striker extends Role {
    private static instance: Striker = null;

    private constructor() {
        super("ST", StrikersZone.getInstance(), [
            Left.getInstance(),
            None.getInstance(),
            Right.getInstance()
        ]);
    }

    public static getInstance(): Striker {
        if (this.instance === null) {
            this.instance = new Striker();
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
        return 0.25 * player.getPlaymakingSkill() * player.getForm();
    }

    protected getLeftAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.2354 * player.getScoringSkill() +
                0.194 * player.getWingSkill() +
                0.1279 * player.getPassingSkill()) *
            player.getForm() *
            side.getLeftContributionMultiplier()
        );
    }

    protected getCentralAttackContribution(player: Player): number {
        return (
            (player.getScoringSkill() + 0.3689 * player.getPassingSkill()) *
            player.getForm()
        );
    }

    protected getRightAttackContribution(
        player: Player,
        side: NearestSide
    ): number {
        return (
            (0.2354 * player.getScoringSkill() +
                0.194 * player.getWingSkill() +
                0.1279 * player.getPassingSkill()) *
            player.getForm() *
            side.getRightContributionMultiplier()
        );
    }
}
