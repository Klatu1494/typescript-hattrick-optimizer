class IndexError extends RangeError {
    private static readonly hint: string = " must be between 0 and ";
    private static readonly endingDot: string = CommonStrings.getDot();

    public constructor(entity: string, length: number) {
        super(entity + IndexError.hint + length + IndexError.endingDot);
    }
}
