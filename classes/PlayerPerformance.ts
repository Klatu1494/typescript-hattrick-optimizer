class PlayerPerformance {
    constructor(
        private readonly player: Player,
        private readonly role: Role,
        private readonly leftDefenseContribution: number,
        private readonly centralDefenseContribution: number,
        private readonly rightDefenseContribution: number,
        private readonly leftAttackContribution: number,
        private readonly centralAttackContribution: number,
        private readonly rightAttackContribution: number,
        private readonly midfieldContribution: number
    ) {}

    public getPlayer(): Player {
        return this.player;
    }

    public getRole(): Role {
        return this.role;
    }

    public getCentralAttackContribution(): number {
        return this.centralAttackContribution;
    }

    public getCentralDefenseContribution(): number {
        return this.centralDefenseContribution;
    }

    public getLeftAttackContribution(): number {
        return this.leftAttackContribution;
    }

    public getRightDefenseContribution(): number {
        return this.leftDefenseContribution;
    }

    public getRightAttackContribution(): number {
        return this.rightAttackContribution;
    }

    public getLeftDefenseContribution(): number {
        return this.rightDefenseContribution;
    }

    public getMidfieldContribution(): number {
        return this.midfieldContribution;
    }
}
