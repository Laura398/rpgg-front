import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const getAvatar = async (avatar: string) => {
    const storage = getStorage();
    const url = await getDownloadURL(ref(storage, avatar));
    return url;
}