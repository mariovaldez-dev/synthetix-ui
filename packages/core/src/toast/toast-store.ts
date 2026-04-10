import type { Toast, ToastInput } from "./toast.types";

type Listener = () => void;

let toasts: Toast[] = [];
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

export const toastStore = {
  getToasts(): Toast[] {
    return toasts;
  },

  subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  add(input: ToastInput): string {
    const id = Math.random().toString(36).slice(2);
    toasts = [...toasts, { ...input, id }];
    notify();
    return id;
  },

  remove(id: string): void {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  },

  clear(): void {
    toasts = [];
    notify();
  },
};
