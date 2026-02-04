"use client";

import { useEffect } from "react";
import { toast } from "sonner";

interface BlockIdCopyHotkeyProps {
  blockId: string;
}

function isEditableTarget(target: EventTarget | null) {
  if (!target || !(target instanceof HTMLElement)) {
    return false;
  }

  if (target.isContentEditable) {
    return true;
  }

  const tagName = target.tagName.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select";
}

async function copyToClipboard(value: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Fall back to legacy copy when clipboard API is blocked.
    }
  }

  if (typeof document === "undefined") {
    return false;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export function BlockIdCopyHotkey({ blockId }: BlockIdCopyHotkeyProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key.toLowerCase() !== "c") {
        return;
      }

      if (!event.ctrlKey || !event.metaKey) {
        return;
      }

      if (isEditableTarget(event.target)) {
        return;
      }

      event.preventDefault();
      void copyToClipboard(blockId).then((copied) => {
        if (copied) {
          toast.success("Block ID copied to clipboard", {
            description: blockId,
          });
        } else {
          toast.error("Unable to copy block ID");
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [blockId]);

  return null;
}
