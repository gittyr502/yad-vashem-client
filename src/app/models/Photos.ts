export class Element_ {
  id: any;
  title!: string;
  text: any;
  description: any;
  credit: any;
  source: any;
  url: any;
  images!: Image[];
}

export class Image {
  id!: string;
  title!: string;
  url!: string;
  thmbnl!: string;
  mapPointers!: any[];
  backImage: any;
  type!: string;
  vertices: any;
  credit: any;
  relatedLink: any;
  marksPoints: any;
}

export class Photos {
  title!: string;
  url: any;
  urlTitle: any;
  type!: string;
  elements!: Element_[];
}
