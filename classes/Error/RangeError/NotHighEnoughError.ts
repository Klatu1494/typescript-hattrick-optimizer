class NotHighEnoughError extends RangeError {
    private static readonly hint: string = " must be higher than ";
    private static readonly endingDot: string = DOT;

    public constructor(entity: string, minimumValue: number) {
        super(
            entity +
                NotHighEnoughError.hint +
                minimumValue +
                NotHighEnoughError.endingDot
        );
    }
}
