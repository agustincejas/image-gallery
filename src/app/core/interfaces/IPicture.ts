export interface IPicture {
    id: string;
    author: string;
    camera: string;
    tags: string;
    cropped_picture: string;
    full_picture: string;
}

export type CroppedImage = Pick<IPicture, 'id' | 'cropped_picture'>;