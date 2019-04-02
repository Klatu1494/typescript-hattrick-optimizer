class Formation {
    private playersInZoneAmounts: Map<IZone, number>;

    public constructor(
        private readonly playersFulfillingRolesAmount: ReadonlyMap<Role, number>
    ) {
        let playersInZoneAmounts: Map<IZone, number> = new Map();
        for (let playersFulfillingRoleAmount of this
            .playersFulfillingRolesAmount) {
            let zone: IZone = playersFulfillingRoleAmount[0].getZone();
            let amount: number = playersFulfillingRoleAmount[1];
            if (playersInZoneAmounts.has(zone)) {
                playersInZoneAmounts.set(
                    zone,
                    playersInZoneAmounts.get(zone) + amount
                );
            } else {
                playersInZoneAmounts.set(zone, amount);
            }
        }
        this.playersInZoneAmounts = playersInZoneAmounts;
    }

    public isValid(): boolean {
        let i: number = 0;
        let isValid: boolean = true;
        let totalPlayers: number = 0;
        let zonesWithAtLeastOnePlayer: Array<IZone> = [];
        let playersInZoneAmounts: Map<IZone, number> = this
            .playersInZoneAmounts;

        for (let playersInZoneAmount of playersInZoneAmounts) {
            zonesWithAtLeastOnePlayer.push(playersInZoneAmount[0]);
        }

        while (isValid && i < zonesWithAtLeastOnePlayer.length) {
            let playersInCurrentZoneAmount: number = playersInZoneAmounts.get(
                zonesWithAtLeastOnePlayer[i]
            );
            isValid = playersInCurrentZoneAmount < playersInZoneAmounts.size;
            totalPlayers += playersInCurrentZoneAmount;
            i++;
        }
        return (
            isValid &&
            0 < playersInZoneAmounts.get(GoalkeepersZone.getInstance()) &&
            totalPlayers === AMOUNT_OF_PLAYERS_IN_A_FORMATION
        );
    }

    public getPlayersFulfillingRolesAmount(): ReadonlyMap<Role, number> {
        return this.playersFulfillingRolesAmount;
    }
}
