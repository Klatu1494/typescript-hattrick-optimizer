class DifferentiableProduct implements IDifferentiableExpression {
    public constructor(
        private readonly firstTerm: IDifferentiableExpression,
        private readonly secondTerm: IDifferentiableExpression
    ) {}

    public evaluateExpression(): number {
        return (
            this.firstTerm.evaluateExpression() *
            this.secondTerm.evaluateExpression()
        );
    }

    public getDerivative(
        differentiationVariable: VariableExpression
    ): IDifferentiableExpression {
        return new DifferentiableSum(
            new DifferentiableProduct(
                this.firstTerm.getDerivative(differentiationVariable),
                this.secondTerm
            ),
            new DifferentiableProduct(
                this.firstTerm,
                this.secondTerm.getDerivative(differentiationVariable)
            )
        );
    }
}
