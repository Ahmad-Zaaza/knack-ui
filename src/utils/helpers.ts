import React from "react";

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
