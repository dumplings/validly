declare module validly {
    function getArray(value: any, defaults?: []): [];

    function getNumber(value: any, defaults?: number): number;

    function getObject(value: any, defaults?: object): object;

    function getString(value: any, defaults?: string): string;
}

export = validly;
