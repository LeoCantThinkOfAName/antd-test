import { ADD_IMAGE, DELETE_IMAGE, LOAD_IMAGE } from "./type";
import { ImageType } from "../../types/ImageType";

const imageList: ImageType[] = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
];

const ImageReducer = (
  state: ImageType[] = imageList,
  action: {
    type: string;
    payload: any;
  }
): ImageType[] => {
  switch (action.type) {
    case ADD_IMAGE:
      return state;
    case DELETE_IMAGE:
      return state;
    case LOAD_IMAGE:
      return state;
    default:
      return state;
  }
};

export default ImageReducer;
