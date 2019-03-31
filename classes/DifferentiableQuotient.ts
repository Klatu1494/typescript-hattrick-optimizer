/**
 * This class represents a differentiable quotient. Note that this
 * class does not consider your quotient's domain, therefore you
 * must make sure that the divisor can't evaluate to zero in it.
 * @implements IDifferentiableExpression
 */
class DifferentiableQuotient implements IDifferentiableExpression {
    public constructor(
        private readonly dividend: IDifferentiableExpression,
        private readonly divisor: IDifferentiableExpression
    ) {}

    public evaluateExpression(): number {
        return (
            this.dividend.evaluateExpression() /
            this.divisor.evaluateExpression()
        );
    }

    public getDerivative(
        differentiationVariable: VariableExpression
    ): IDifferentiableExpression {
        return new DifferentiableQuotient(
            new DifferentiableSum(
                new DifferentiableProduct(
                    this.dividend.getDerivative(differentiationVariable),
                    this.divisor
                ),
                new DifferentiableProduct(
                    new DifferentiableProduct(
                        ConstantExpression.getSubstractionMultiplier(),
                        this.dividend
                    ),
                    this.divisor.getDerivative(differentiationVariable)
                )
            ),
            new DifferentiableProduct(this.divisor, this.divisor)
        );
    }
}
