export interface StuntMan {
  name: string;
  url: string;
}

export interface StuntState {
  data: StuntMan[];
  acceptedDoubles: StuntMan[];
  rejectedDoubles: StuntMan[];
}
