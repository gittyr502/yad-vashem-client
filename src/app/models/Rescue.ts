export class Detail {
  title!: string;
  value!: Value[];
}

export class Elements {
  details!: Detail[];
  map!: Map;
  links!: Links;
}

export class Links {
  title!: string;
  value!: Value[];
}

export class Map {
  pointers!: Pointer[];
  places!: Place[];
}

export class Place {
  lif!: string;
  places!: string[];
  point!: string;
}

export class Pointer {
  icon!: string;
  latitude!: string;
  longitude!: string;
  title!: string;
}

export class Rescue {
  title!: string;
  url: any;
  urlTitle: any;
  type!: string;
  elements!: Elements;
}

export class Value {
  id!: string;
  value!: string;
  url: any;
}
