class VariableExpression implements IDifferentiableExpression {
    public constructor(private value: number) {}

    public setValue(value: number) {
        this.value = value;
    }

    public evaluateExpression(): number {
        return this.value;
    }

    public getDerivative(
        differentiationVariable: VariableExpression
    ): IDifferentiableExpression {
        return this === differentiationVariable
            ? ConstantExpression.getVariableDerivative()
            : ConstantExpression.getConstantDerivative();
    }
}
