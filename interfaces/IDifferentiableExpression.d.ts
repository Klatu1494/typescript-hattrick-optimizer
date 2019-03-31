interface IDifferentiableExpression {
    evaluateExpression(): number;
    getDerivative(
        differentiationVariable: VariableExpression
    ): IDifferentiableExpression;
}
