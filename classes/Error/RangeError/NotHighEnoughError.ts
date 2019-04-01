class NotHighEnoughError extends RangeError {
    private static readonly disallowedEqualityHint: string =
        " must be higher than ";
    private static readonly allowedEqualityHint: string =
        " must be higher than or equal to ";

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
                DOT
        );
    }
}
