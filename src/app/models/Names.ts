export class Element {
  id!: string;
  lastName!: string;
  firstName!: string;
  birthYear!: string;
  placeOfResidence!: string;
  source!: string;
  url!: string;
}

export class Names {
  title!: string;
  url!: string;
  urlTitle!: string;
  type!: string;
  elements!: Element[];
}
