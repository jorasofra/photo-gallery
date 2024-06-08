import { UserPhoto } from "./services/photo.service";

export class PhotoService {
    public photos: UserPhoto[] = [];
    private PHOTO_STORAGE: string = 'photos';
}
