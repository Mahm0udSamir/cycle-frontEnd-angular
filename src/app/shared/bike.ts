export class Bike{
    constructor(
        public created_at: string,
        public id: number,
        public status: string ,
        public lat: number,
        public lng: number,
        public name: string,
        public updated_at: string
    ) {}
}
