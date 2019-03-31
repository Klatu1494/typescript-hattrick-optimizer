class Restriction {
    public constructor(
        private readonly expression: IDifferentiableExpression,
        private readonly restriction: ConstantExpression
    ) {}

    public getExpression(): IDifferentiableExpression {
        return this.expression;
    }

    public getRestriction(): ConstantExpression {
        return this.restriction;
    }
}
