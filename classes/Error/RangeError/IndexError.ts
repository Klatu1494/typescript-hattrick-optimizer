class IndexError extends RangeError {
    private static readonly hint: string = " must be between 0 and ";

    public constructor(entity: string, length: number) {
        super(entity + IndexError.hint + length + DOT);
    }
}
