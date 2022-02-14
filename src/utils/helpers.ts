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