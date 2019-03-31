class PositionedPlayer {
    public constructor(
        private readonly player: Player,
        private readonly role: Role,
        private readonly nearestSide: NearestSide
    ) {}

    public getPlayer(): Player {
        return this.player;
    }

    public getRole(): Role {
        return this.role;
    }

    public getNearestSide(): NearestSide {
        return this.nearestSide;
    }
}
