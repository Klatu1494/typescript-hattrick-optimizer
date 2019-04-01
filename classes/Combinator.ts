class Combinator {
    private static instance: Combinator = null;
    private static readonly combinationsLengthDescription: string =
        "The combinations length";

    private constructor() {}

    public static getInstance(): Combinator {
        if (this.instance === null) {
            this.instance = new Combinator();
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
    public getCombinations<T>(
        elements: Iterable<T>,
        combinationsLength: number
    ): ReadonlyArray<ReadonlySet<T>> {
        let combinations: Array<ReadonlySet<T>>;
        let elementsArray: Array<T>;
        if (!Number.isSafeInteger(combinationsLength)) {
            throw new NotAnIntergerError(
                Combinator.combinationsLengthDescription
            );
        }
        if (combinationsLength <= 0) {
            throw new NotHighEnoughError(
                Combinator.combinationsLengthDescription,
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
            new Set(),
            0,
            combinationsLength
        );
        return combinations;
    }

    private selectElements<T>(
        elements: ReadonlyArray<T>,
        combinations: Array<ReadonlySet<T>>,
        partialCombination: ReadonlySet<T>,
        currentIndex: number,
        combinationsLength: number
    ) {
        let elementsLength: number = elements.length;
        for (let i = currentIndex; i < elementsLength; i++) {
            let newCombination: Set<T> = new Set(partialCombination).add(
                elements[i]
            );
            if (newCombination.size === combinationsLength) {
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
