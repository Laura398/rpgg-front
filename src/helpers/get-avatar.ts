import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const getAvatar = async (avatar: string | undefined) => {
    if (!avatar) return "/static/images/avatar/1.jpg";
    const storage = getStorage();
    const url = await getDownloadURL(ref(storage, avatar));
    return url;
}