import {
  ComponentPropsWithoutRef,
  forwardRef,
  memo,
  useEffect,
  useState
} from "react";
import useAvatarClasses from "./useAvatarClasses";

export interface IAvatarProps extends ComponentPropsWithoutRef<"div"> {
  size?: "small" | "medium" | "large";
  text: Required<string>;
  image?: string;
  color?: "primary" | "secondary";
  max?: boolean;
}

const Avatar = forwardRef<HTMLDivElement, IAvatarProps>(
  (
    {
      className,
      size = "medium",
      text,
      image,
      max,
      color = "primary",
      ...delegated
    },
    ref
  ) => {
    const [showFallback, setShowFallback] = useState(() => Boolean(!image));
    const { containerClasses, imageClasses } = useAvatarClasses({
      className,
      size,
      color
    });
    useEffect(() => {
      if (image) {
        if (showFallback) {
          setShowFallback(false);
        }
      }
    }, [image]);
    return (
      <div ref={ref} className={containerClasses} {...delegated}>
        {image && !showFallback && (
          <img
            onError={() => setShowFallback(true)}
            src={image}
            alt={text}
            className={imageClasses}
          />
        )}
        {(showFallback || !image) && !max && (
          <span>{text.slice(0, 1).toUpperCase()}</span>
        )}
        {max && !image && <span>{text}</span>}
      </div>
    );
  }
);

export default memo(Avatar);
