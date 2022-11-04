/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
  CSSProperties
} from "react";
import styled from "styled-components";

export interface IAvatarProps extends ComponentPropsWithoutRef<"div"> {
  size?: "small" | "medium" | "large";
  alt: Required<string>;
  image?: string;
  /**
   *
   * Sets avatar background color, only visible when `showAltOnFallback` is true,
   */

  showAltOnFallback?: boolean;
  /**
   * sets border-radius.
   */
  shape?: "rounded" | "semi-rounded" | "square";
}

/**
 * @description
 * Change log:
 *
 * - added new prop `showAltOnFallback` that shows image alt text as a fallback.
 *
 * - Remove `max` prop.
 *
 * - replace `square` prop with `shape` prop.
 *
 * - replace `text` prop with `alt` prop.
 *
 * - remove `color` prop.
 *
 * - add an avatar image as a fallback when `showAltOnFallback` is not passed
 */

const Avatar = forwardRef<HTMLDivElement, IAvatarProps>(
  (
    {
      size = "medium",
      alt,
      image,
      style,
      shape = "rounded",
      showAltOnFallback,
      ...delegated
    },
    ref
  ) => {
    const [showFallback, setShowFallback] = useState(() => Boolean(!image));
    const [showTextFallback, setShowTextFallback] = useState(false);

    useEffect(() => {
      if (image) {
        if (showFallback || showTextFallback) {
          setShowFallback(false);
          setShowTextFallback(false);
        }
      }
    }, [image]);
    const sizes = useMemo(
      () => ({
        small: {
          "--spacing": "24px",
          "--fs": "0.875rem"
        },
        medium: {
          "--spacing": "40px",
          "--fs": "1rem"
        },
        large: {
          "--spacing": "56px",
          "--fs": "1rem"
        }
      }),
      [size]
    );
    const shapes = useMemo(
      () => ({
        rounded: {
          "--br": "50%"
        },
        "semi-rounded": {
          "--br": "6px"
        },
        square: {
          "--br": "0px"
        }
      }),
      [shape]
    );

    return (
      <Wrapper
        style={
          {
            ...sizes[size],
            ...shapes[shape],
            ...style
          } as CSSProperties
        }
        ref={ref}
        {...delegated}
      >
        {image && !showFallback && !showTextFallback && (
          <Image
            onError={() => {
              if (!showAltOnFallback) {
                setShowFallback(true);
              } else {
                setShowTextFallback(true);
              }
            }}
            src={image}
            alt={alt}
          />
        )}
        {showTextFallback && (
          <FallbackText>{(alt || "").slice(0, 1).toUpperCase()}</FallbackText>
        )}
        {(showFallback || !image) && !showTextFallback && (
          <Image
            src="data:image/png;base64,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"
            alt={(alt || "").slice(0, 1).toUpperCase()}
          />
        )}
      </Wrapper>
    );
  }
);

export default Avatar;

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: inline-flex;
  overflow: hidden;
  border-radius: var(--br);
  height: var(--spacing);
  width: var(--spacing);
  user-select: none;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  text-indent: 10000px;
  text-align: center;
`;

const FallbackText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
