class DifferentiableSum implements IDifferentiableExpression {
    public constructor(
        private readonly firstTerm: IDifferentiableExpression,
        private readonly secondTerm: IDifferentiableExpression
    ) {}

    public evaluateExpression(): number {
        return (
            this.firstTerm.evaluateExpression() +
            this.secondTerm.evaluateExpression()
        );
    }

    public getDerivative(
        differentiationVariable: VariableExpression
    ): IDifferentiableExpression {
        return new DifferentiableSum(
            this.firstTerm.getDerivative(differentiationVariable),
            this.secondTerm.getDerivative(differentiationVariable)
        );
    }
}
