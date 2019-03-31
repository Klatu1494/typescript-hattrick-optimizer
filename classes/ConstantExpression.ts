class ConstantExpression implements IDifferentiableExpression {
    private static zero: ConstantExpression = new ConstantExpression(0);
    private static one: ConstantExpression = new ConstantExpression(1);
    private static negativeOne: ConstantExpression = new ConstantExpression(-1);

    public constructor(private readonly value: number) {}

    public evaluateExpression(): number {
        return this.value;
    }

    public getDerivative(
        _differentiationVariable: VariableExpression
    ): IDifferentiableExpression {
        return ConstantExpression.getConstantDerivative();
    }

    public static getConstantDerivative() {
        return this.zero;
    }

    public static getVariableDerivative() {
        return this.one;
    }

    public static getSubstractionMultiplier() {
        return this.negativeOne;
    }
}
