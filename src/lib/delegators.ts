export interface DelegatorStatItems {
  data: DelegatorStatItem[];
}

export interface DelegatorStatItem {
  id: number;
  timestamp: string;
  kind: string;
  value: StatValue[];
  delegator_address: any;
}

export interface StatValue {
  value: number;
  delegator: string;
}

export interface DelegatorsItems {
  data: DelegatorItem[];
}

export interface DelegatorItem {
  address: string;
  first_seen: string;
  alias?: string;
}

export enum StatKinds {
  TOP10DELEGATORS = "TOP10VALIDATORS",
  TOP100DELEGATORS = "TOP100VALIDATORS",
  YEARLYVOLUME = "YEARLYVOLUME",
  MONTHLYVOLUME = "MONTHLYVOLUME",
}

