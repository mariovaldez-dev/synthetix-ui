import { useSyncExternalStore } from "react";

import { toastStore } from "./toast-store";
import type { ToastInput } from "./toast.types";

export interface UseToastReturn {
  toast: (input: ToastInput) => void;
  dismiss: (id: string) => void;
  clear: () => void;
}

export function useToast(): UseToastReturn {
  return {
    toast: (input) => toastStore.add(input),
    dismiss: (id) => toastStore.remove(id),
    clear: () => toastStore.clear(),
  };
}

/** Hook interno para que Toaster se suscriba al store */
export function useToastStore() {
  return useSyncExternalStore(
    toastStore.subscribe.bind(toastStore),
    toastStore.getToasts.bind(toastStore),
    toastStore.getToasts.bind(toastStore),
  );
}
