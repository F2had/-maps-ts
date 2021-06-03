import faker from 'faker';

export default class User {
  name!: string;

  location!: {
    lat: number;
    lng: number;
  };

  color!: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = faker.commerce.color();
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
