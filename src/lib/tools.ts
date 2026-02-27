const PATHS_TO_HIDE_LAYOUT = ["/demo"];

export function shouldHideLayout(pathname: string) {
  return PATHS_TO_HIDE_LAYOUT.some((path) => pathname === path);
}
