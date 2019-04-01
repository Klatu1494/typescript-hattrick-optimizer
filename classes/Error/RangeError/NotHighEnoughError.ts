class NotHighEnoughError extends RangeError {
    private static readonly hint: string = " must be higher than ";
    private static readonly endingDot: string = DOT;

    public constructor(entity: string, minimumValue: string) {
        super(
            entity +
                NotHighEnoughError.hint +
                minimumValue +
                NotHighEnoughError.endingDot
        );
    }
}
