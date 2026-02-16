"use client";

import { useState, useEffect } from "react";

export function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Don't show if already installed
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as Window & { MSStream?: boolean }).MSStream);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowInstallButton(false);
      setDeferredPrompt(null);
    }
  };

  if (isStandalone) return null;

  // iOS: Show manual install instructions (Share → Add to Home Screen)
  if (isIOS) {
    return (
      <button
        type="button"
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full border border-orange-300 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-lg transition-colors hover:bg-orange-50 dark:border-orange-700 dark:bg-zinc-900 dark:text-orange-400 dark:hover:bg-orange-950"
        title="Tap Share, then Add to Home Screen"
        onClick={() => alert("To install: Tap the Share button, then \"Add to Home Screen\"")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Install App
      </button>
    );
  }

  // Chrome/Edge: Show install button when beforeinstallprompt fires
  if (showInstallButton && deferredPrompt) {
    return (
      <button
        type="button"
        onClick={handleInstall}
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full border border-orange-300 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-lg transition-colors hover:bg-orange-50 dark:border-orange-700 dark:bg-zinc-900 dark:text-orange-400 dark:hover:bg-orange-950"
        title="Install app"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Install App
      </button>
    );
  }

  return null;
}
