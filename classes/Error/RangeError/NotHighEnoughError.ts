class NotHighEnoughError extends RangeError {
    private static readonly disallowedEqualityHint: string =
        " must be higher than ";
    private static readonly allowedEqualityHint: string =
        " must be higher than or equal to ";
    private static readonly endingDot: string = DOT;

    public constructor(
        entity: string,
        minimumValue: string,
        allowEquality: boolean
    ) {
        super(
            entity +
                (allowEquality
                    ? NotHighEnoughError.allowedEqualityHint
                    : NotHighEnoughError.disallowedEqualityHint) +
                minimumValue +
                NotHighEnoughError.endingDot
        );
    }
}
