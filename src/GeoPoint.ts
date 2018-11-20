export type GeoPoint = {
  _latitude: number,
  _longitude: number,
}

export class OWGeoPoint {
  readonly latitude: number;
  readonly longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

}