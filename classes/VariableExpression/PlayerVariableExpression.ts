class PlayerVariableExpression extends VariableExpression {
    public constructor(private readonly player: Player) {
        super(0);
    }

    getPlayer(): Player {
        return this.player;
    }
}
