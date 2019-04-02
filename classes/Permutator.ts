class Premutator {
    private static instance: Premutator = null;
    private static readonly combinationsLengthDescription: string =
        "The combinations length";

    private constructor() {}

    public static getInstance(): Premutator {
        if (this.instance === null) {
            this.instance = new Premutator();
        }
        return this.instance;
    }

    /**
     * Gets all possible combinations of a
     * desired size of elements from an Iterable.
     * @param elements A collection that contains the
     * elements that will compose the combinations.
     * @param combinationsLength The combinations size.
     */
    public getPermutations<T>(
        elements: Iterable<T>,
        combinationsLength: number
    ): ReadonlyArray<ReadonlyArray<T>> {
        let combinations: Array<ReadonlyArray<T>>;
        let elementsArray: Array<T>;
        if (!Number.isSafeInteger(combinationsLength)) {
            throw new NotAnIntergerError(
                Premutator.combinationsLengthDescription
            );
        }
        if (combinationsLength <= 0) {
            throw new NotHighEnoughError(
                Premutator.combinationsLengthDescription,
                (0).toString(),
                false
            );
        }
        elementsArray = [];
        for (let element of elements) {
            elementsArray.push(element);
        }
        combinations = [];
        this.selectElements<T>(
            elementsArray,
            combinations,
            [],
            0,
            combinationsLength
        );
        return combinations;
    }

    private selectElements<T>(
        elements: ReadonlyArray<T>,
        combinations: Array<ReadonlyArray<T>>,
        partialCombination: ReadonlyArray<T>,
        currentIndex: number,
        combinationsLength: number
    ) {
        let elementsLength: number = elements.length;
        for (let i = currentIndex; i < elementsLength; i++) {
            let newCombination: Array<T> = partialCombination.slice(0);
            newCombination.push(elements[i]);
            if (newCombination.length === combinationsLength) {
                combinations.push(newCombination);
            } else {
                this.selectElements<T>(
                    elements,
                    combinations,
                    newCombination,
                    i + 1,
                    combinationsLength
                );
            }
        }
    }
}
