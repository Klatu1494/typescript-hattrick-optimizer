class Player {
    private performances: Map<Role, Map<NearestSide, PlayerPerformance>>;

    constructor(
        private readonly name: string,
        private readonly defendingSkill: number,
        private readonly goalkeeperSkill: number,
        private readonly passingSkill: number,
        private readonly playmakingSkill: number,
        private readonly scoringSkill: number,
        private readonly wingSkill: number,
        private readonly form: number,
        private readonly technical: boolean,
        roles: ReadonlyArray<Role>
    ) {
        let performanceByRole = new Map();
        for (let role of roles) {
            let roleMap: Map<NearestSide, PlayerPerformance> = new Map();
            performanceByRole.set(role, roleMap);
            for (let preferredSide of role.getPossibleNearestSides()) {
                roleMap.set(
                    preferredSide,
                    role.getPositionedPlayerPerformance(this, preferredSide)
                );
            }
        }
        this.performances = performanceByRole;
    }

    public getName(): string {
        return this.name;
    }

    public getDefendingSkill(): number {
        return this.defendingSkill;
    }

    public getGoalkeeperSkill(): number {
        return this.goalkeeperSkill;
    }

    public getPassingSkill(): number {
        return this.passingSkill;
    }

    public getPlaymakingSkill(): number {
        return this.playmakingSkill;
    }

    public getScoringSkill(): number {
        return this.scoringSkill;
    }

    public getWingSkill(): number {
        return this.wingSkill;
    }

    public getForm(): number {
        return this.form;
    }

    public isTechnical(): boolean {
        return this.technical;
    }

    public getPerformance(
        role: Role,
        nearestSide: NearestSide
    ): PlayerPerformance {
        return this.performances.get(role).get(nearestSide);
    }
}
