import React from "react";
import type { PRect } from "./useGetBoundingClientRect";

export function getScrollbarWidth(): number {
  return window.innerWidth - document.documentElement.clientWidth;
}
export function appendToBody(id: string) {
  let result = document.getElementById(id);
  if (!result) {
    result = document.createElement("div");
    result.setAttribute("id", id);
    document.body.appendChild(result);
  }
  return result;
}
export function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */
export function componentEventHandlers<
  EventType extends React.SyntheticEvent | Event
>(
  theirHandler: (_: EventType) => any | undefined,
  ourHandler: (_: EventType) => any
): (_: EventType) => any {
  return (event) => {
    theirHandler?.(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

/**
 * 🚀 Calculate Input & Textarea height based on their content.
 */

export const calculateInputHeight = (
  el: HTMLInputElement | HTMLTextAreaElement
) => {
  // eslint-disable-next-line no-param-reassign
  el.style.height = `${el.scrollHeight}px`;
};

export const getCollisions = (
  targetRect: PRect,
  popoverRect: PRect,
  offsetLeft: number = 0,
  offsetBottom: number = 0
) => {
  const collisions = {
    top: targetRect.top - popoverRect.height < 0,
    right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
    bottom:
      window.innerHeight <
      targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left + targetRect.width - popoverRect.width < 0
  };
  const directionRight = collisions.right && !collisions.left;
  const directionLeft = collisions.left && !collisions.right;
  const directionUp = collisions.bottom && !collisions.top;
  const directionDown = collisions.top && !collisions.bottom;

  return { directionRight, directionLeft, directionUp, directionDown };
};

export function removeUndefinedKeys<T extends {}>(obj: T) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      // @ts-ignore
      acc[key] = value;
    }
    return acc;
  }, {});
}
