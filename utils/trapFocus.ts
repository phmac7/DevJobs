const trapFocus = (container: HTMLElement, firstFocusable: HTMLElement, lastFocusable: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary'
    );
  
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
  
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === "Tab" && e.shiftKey && e.target === firstFocusableElement) {
        e.preventDefault();
  
        (lastFocusableElement as HTMLElement)?.focus();
      }
    };
  
    const handleLastTab = (e: KeyboardEvent) => {
      if (e.key === "Tab" && !e.shiftKey && e.target === lastFocusableElement) {
        e.preventDefault();
        (firstFocusableElement as HTMLElement)?.focus();
      }
    };
  
    firstFocusable.addEventListener("keydown", handleFirstTab);
    lastFocusable.addEventListener("keydown", handleLastTab);
  };
  
  export const removeTrapFocus = (
    firstFocusable: HTMLElement,
    lastFocusable: HTMLElement,
    handleFirstTab: () => void,
    handleLastTab: () => void
  ) => {
    firstFocusable.removeEventListener("keydown", handleFirstTab);
    lastFocusable.removeEventListener("keydown", handleLastTab);
    //lastFocusable.addEvent
  };
  
  export default trapFocus;
  