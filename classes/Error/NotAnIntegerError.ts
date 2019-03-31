class NotAnIntergerError extends Error {
    private static readonly messageEnding: string = " must be an integer.";

    public constructor(messageStart: string) {
        super(messageStart + NotAnIntergerError.messageEnding);
    }
}
