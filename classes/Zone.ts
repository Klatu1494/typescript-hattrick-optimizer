abstract class Zone<PossibleAmountsAmount extends number> implements IZone {
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
            throw new NotAnIntergerError(AMOUNT_OF_PLAYERS_DESCRIPTION);
        }
        if (this.size < playersInZoneAmount || playersInZoneAmount < 0) {
            throw new IndexError(AMOUNT_OF_PLAYERS_DESCRIPTION, this.size);
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
