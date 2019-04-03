class InvalidFormationStringError extends Error {
    private static message: string = "A formation could not be parsed.";

    public constructor() {
        super(InvalidFormationStringError.message);
    }
}
