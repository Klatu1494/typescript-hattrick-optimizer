class FormationParser {
    private static readonly keyValueSeparator: string = ":";
    private static readonly keyValuePairSeparator: string = ",";
    private static readonly formationSeparator: string = ";";
    private static instance: FormationParser = null;

    private constructor() {}

    public static getInstance(): FormationParser {
        if (this.instance === null) {
            this.instance = new FormationParser();
        }
        return this.instance;
    }

    private stringifySingleFormation(formation: Formation): string {
        let returnedString: string = "";
        for (let playersFulfillingRoleAmount of formation.getPlayersFulfillingRolesAmount()) {
            returnedString +=
                playersFulfillingRoleAmount[1] === 0
                    ? ""
                    : playersFulfillingRoleAmount[0].getId().toString() +
                      FormationParser.keyValueSeparator +
                      playersFulfillingRoleAmount[1].toString() +
                      FormationParser.keyValuePairSeparator;
        }
        return (
            returnedString.slice(
                0,
                returnedString.length -
                    FormationParser.keyValuePairSeparator.length
            ) + FormationParser.formationSeparator
        );
    }

    public stringifyFormationsColletion(
        formations: Iterable<Formation>
    ): string {
        let returnedString: string = "";
        for (let formation of formations) {
            returnedString += this.stringifySingleFormation(formation);
        }
        return returnedString.slice(
            0,
            returnedString.length - FormationParser.formationSeparator.length
        );
    }

    public parse(
        formationsString: string,
        rolesArray: ReadonlyArray<Role>
    ): ReadonlyArray<Formation> {
        let formations: Array<Formation> = [];
        let rolesMap: Map<number, Role> = rolesArray.reduce<Map<number, Role>>(
            (
                map: Map<number, Role>,
                role: Role,
                _currentIndex: number,
                _array: ReadonlyArray<Role>
            ) => {
                map.set(role.getId(), role);
                return map;
            },
            new Map()
        );
        for (let formationString of formationsString.split(
            FormationParser.formationSeparator
        )) {
            let formationConstructorArgument: Map<Role, number> = new Map();
            for (let keyValuePairString of formationString.split(
                FormationParser.keyValuePairSeparator
            )) {
                let keyValuePair: ReadonlyArray<
                    string
                > = keyValuePairString.split(FormationParser.keyValueSeparator);
                let roleId: number = parseInt(keyValuePair[0]);
                let roleAmount: number = parseInt(keyValuePair[1]);
                if (rolesMap.has(roleId) && !isNaN(roleAmount)) {
                    formationConstructorArgument.set(
                        rolesMap.get(roleId),
                        roleAmount
                    );
                } else {
                    throw new InvalidFormationStringError();
                }
            }
            formations.push(new Formation(formationConstructorArgument));
        }
        return formations;
    }
}
