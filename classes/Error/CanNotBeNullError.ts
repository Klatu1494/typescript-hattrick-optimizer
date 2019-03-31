class CanNotBeNullError extends Error {
    private static readonly messageEnding: string = " can not be null.";

    public constructor(entity: string) {
        super(entity + CanNotBeNullError.messageEnding);
    }
}
