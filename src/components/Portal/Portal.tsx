import { useRef } from "react";
import { createPortal } from "react-dom";
import { useForceUpdate } from "../../utils/useForceUpdate";
import { useIsomorphicLayoutEffect as useLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";

interface IPortalProps {
  /**
   * The container ref to which the portal will be appended. If not set the
   * portal will be appended to the body of the component's owner document
   * (typically this is the `document.body`).
   *
   * @see Docs https://reach.tech/portal#portal-containerRef
   */
  containerRef?: React.RefObject<Node>;
  /**
   * The DOM element type to render.
   *
   * @see Docs https://reach.tech/portal#portal-type
   */
  type?: string;
}
/**
 * Welcome to Knack Portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see React  https://reactjs.org/docs/portals.html
 */
const Portal: React.FC<IPortalProps> = ({ children, containerRef, type='knack-portal' }) => {
  //   const rootNode = useMemo(() => appendToBody(id), [id]);
  const mountNode = useRef<HTMLDivElement | null>(null);
  const portalNode = useRef<HTMLElement | null>(null);
  const forceUpdate = useForceUpdate();
  useLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return;
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    const { ownerDocument } = mountNode.current!;
    const body = containerRef?.current || ownerDocument.body;
    // @ts-ignore
    portalNode.current = ownerDocument?.createElement(type)!;
    body.appendChild(portalNode.current);
    forceUpdate();
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);

  return portalNode.current ? (
    createPortal(children, portalNode.current)
  ) : (
    <span ref={mountNode} />
  );
};

export default Portal;
