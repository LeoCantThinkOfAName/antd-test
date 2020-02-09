export interface ImageType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface EditableImageType extends ImageType {
  editable: boolean;
}
