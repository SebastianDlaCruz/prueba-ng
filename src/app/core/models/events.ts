export enum StateEvent {
  active = 0,
  inProgress = 1,
  cancel = 2
}

export interface Events {
  id: string |null;
  name: string |null;
  day: Date |null;
  hour: Date |null;
  details: string |null;
  address: string |null;
  state: number |null;

}
