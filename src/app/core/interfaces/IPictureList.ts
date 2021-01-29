import { CroppedImage } from "./IPicture";

export interface IPictureList {
    pictures: CroppedImage[];
    page: number;
    pageCount: number;
    hasMore: boolean;
}