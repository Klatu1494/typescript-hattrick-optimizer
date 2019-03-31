abstract class Zone<PossibleAmountsAmount extends number> implements IZone {
    private static readonly indexDescription: string = CommonStrings.getAmountOfPlayersDescription();
    private static readonly multipliersDescription: string =
        "The performance multipliers";

    private multipliers: [null, 1, ...number[]] & {
        length: PossibleAmountsAmount;
    };
    private size: PossibleAmountsAmount;

    protected constructor() {
        this.multipliers = null;
    }

    public getMultiplier(playersInZoneAmount: number): number {
        if (Number.isSafeInteger(playersInZoneAmount)) {
            throw new NotAnIntergerError(Zone.indexDescription);
        }
        if (this.size < playersInZoneAmount || playersInZoneAmount < 0) {
            throw new IndexError(Zone.indexDescription, this.size);
        }
        if (this.multipliers === null) {
            throw new CanNotBeNullError(Zone.multipliersDescription);
        }
        return this.multipliers[playersInZoneAmount];
    }

    protected setMultipliers(
        multipliers: [null, 1, ...number[]] & {
            length: PossibleAmountsAmount;
        }
    ): void {
        this.multipliers = multipliers;
        this.size = multipliers.length;
    }

    public getSize(): PossibleAmountsAmount {
        if (this.multipliers === null) {
            throw new CanNotBeNullError(Zone.multipliersDescription);
        }
        return this.size;
    }
}
