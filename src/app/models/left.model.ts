import { MainImage } from "./mainImage.model";

export class Left
{
   title!:string;
       tag!:string
        infoText!:string;
       mainImage!:MainImage;

       constructor(_title:string, _tag:string, _infoText:string, _mainImage:MainImage){
        this.infoText=_infoText;
        this.mainImage=_mainImage;
        this.tag=_tag;
        this.title=_title;
       }
}
