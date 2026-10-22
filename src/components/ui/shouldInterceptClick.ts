export interface ClickLike {
  button: number;
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  defaultPrevented: boolean;
}

const shouldInterceptClick = (event: ClickLike, href: string, target?: string | null) => {
  if (event.defaultPrevented || event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
  if (target && target !== "_self") return false;
  return href.startsWith("/") && !href.startsWith("//");
};

export default shouldInterceptClick;
