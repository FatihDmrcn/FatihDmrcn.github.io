export function scroll_pos(
    event: UIEvent & { currentTarget: EventTarget & HTMLElement }, length: number
) {
    const element = event.currentTarget;
    let a = element.scrollLeft; // actual position for scrollLeft
    let b = element.scrollWidth - element.clientWidth; // max. value for scrollLeft
    let pos = Math.round((a / b) * length);
    return pos
}