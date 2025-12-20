// src/utils/toast.ts
import { toast } from "sonner";

// Define the toast types and their associated styles
type ToastType = "success" | "error" | "info";

// Toast styles for each type
const toastStyles: Record<ToastType, React.CSSProperties> = {
  success: {
    background: "linear-gradient(135deg, #6352F4 0%, #8D27F1 100%)", // Green background for success
    color: "white",
    fontWeight: 500,
    height: "max-content",
    borderRadius: 1000,
    fontSize: 14,
    width: "max-content",
    maxWidth: "max-content",
    border: "none",
  },
  error: {
    background: "#D32F2F",
    color: "white",
    fontWeight: 500,
    height: "max-content",
    borderRadius: 1000,
    fontSize: 14,
    width: "max-content",
    maxWidth: "max-content",
    border: "none",
  },
  info: {
    background: "#1d1d1d",
    color: "white",
    fontWeight: 500,
    height: "max-content",
    borderRadius: 1000,
    fontSize: 14,
    width: "max-content",
    maxWidth: "max-content",
    border: "none",
  },
};

// Checking the sonner types
type ToastOptions = Parameters<typeof toast>[1];

// Create the custom toast functions
export const showToast = {
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      ...options,
      style: {
        ...toastStyles.success,
        ...(options?.style || {}),
      },
    });
  },

  error: (message: string, options?: ToastOptions) => {
    toast.error(message, {
      ...options,
      style: {
        ...toastStyles.error,
        ...(options?.style || {}),
      },
    });
  },

  info: (message: string, options?: ToastOptions) => {
    toast(message, {
      ...options,
      style: {
        ...toastStyles.info,
        ...(options?.style || {}),
      },
    });
  },
};
