import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const getAvatar = async (avatar: string | undefined) => {
  if (!avatar) return "/avatar.png";
  const storage = getStorage();
  const url = await getDownloadURL(ref(storage, avatar));
  return url;
};
