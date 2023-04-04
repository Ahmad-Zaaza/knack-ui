import React from "react";
import type { PRect } from "./useGetBoundingClientRect";
import { CustomizableCSSKeys } from "../theme/theme.types";

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
    if (value !== undefined && value !== "") {
      // @ts-ignore
      acc[key] = value;
    }
    return acc;
  }, {});
}
export function removeKeysAndUndefinedValues<T extends { [key: string]: any }>(
  obj: T,
  keysToRemove: Array<keyof T>
) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!keysToRemove.includes(key) && value !== undefined && value !== "") {
      // @ts-ignore
      acc[key] = value;
    }
    return acc;
  }, {}) as Omit<T, keyof typeof keysToRemove>;
}
export const getAutoOrScaleIndent = (
  value: number | string | undefined,
  scaleDenominator: number = 4
) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number" && value > -1 && value < 1) {
    return `${100 * value}px`;
  }
  if (typeof value === "number" && (value >= 1 || value <= -1)) {
    return `${value * scaleDenominator}px`;
  }
  return value;
};

/**
 * Here we are excluding the keys that don't need to go through the function `getAutoOrScaleIndent()`
 * assuming they provided value is logically corrent, for example `{"display":"flex"}` doesn't need to go through that function.
 */
export function calculateIndentStyles(
  props: Partial<
    {
      [Key in CustomizableCSSKeys[number]]: string | number;
    }
  >
) {
  // defining the keys to exclude
  const keysToExclude = [
    "display",
    "z-index",
    "flex",
    "position",
    "align-items",
    "justify-content",
    "flex-direction",
    "flex-wrap"
  ] as Array<keyof typeof props>;

  // this array is free from the excluded keys
  const propsWithoutExcludedKeys = removeKeysAndUndefinedValues(
    props,
    keysToExclude
  );

  const excludedKeysValues = getRemovedObjectProperties(props, keysToExclude);

  const values = {} as { [key: string]: any };
  // we're creating a new object from the array with excluded values with the mapped computed values
  Object.entries(propsWithoutExcludedKeys).forEach(([key, value]) => {
    values[key] = getAutoOrScaleIndent(value);
  });

  return { ...propsWithoutExcludedKeys, ...values, ...excludedKeysValues };
}
const getRemovedObjectProperties = <T extends { [key: string]: any }>(
  obj: T,
  arr: Array<string>
) => {
  const properties: { [key: typeof arr[number]]: any } = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (arr.includes(key)) {
      properties[key as typeof arr[number]] = value;
    }
  });
  return properties;
};
export type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
};
export const getSystemColorScheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => (e.matches ? "dark" : "light"));
    // if (window.matchMedia("(prefers-color-scheme: dark)")) {
    //   return "dark";
    // }
  }
  return "light";
};
