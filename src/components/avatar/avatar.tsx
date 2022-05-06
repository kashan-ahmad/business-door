import "./avatar.scss";
import { Loader } from "..";
import { AvatarProps } from ".";
import { useApi } from "../../hooks";
import { useEffect, useState } from "react";
import { StorageApi } from "../../hooks/use-api";
import defaultAvatar from "../../assets/avatar/avatar.png";

function Avatar(props: AvatarProps) {
  const { src, size = "medium", className = "", ...rest } = props;

  const api = useApi("storage") as StorageApi;
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    /* if (!src) {
      setImageSrc(defaultAvatar);
      return;
    }

    api.fetchAvatar(src, {
      onSuccess: (src: Blob) => setImageSrc(URL.createObjectURL(src)),
      onFailure: () => setImageSrc(defaultAvatar),
    }); */

    // For debugging only.
    setImageSrc(defaultAvatar);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const classes = ["avatar", `avatar-${size}`, className];

  return (
    <div {...rest} className={classes.join(" ")}>
      {imageSrc ? <img src={imageSrc} alt="" /> : <Loader />}
    </div>
  );
}

export default Avatar;
