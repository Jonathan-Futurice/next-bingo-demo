import Script from "next/script";

export function ConfettiAnimation() {
  const onConfettiLoad = () => {
    setTimeout(() => {
      const colors = [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ];
      const end = Date.now() + 5 * 1000;

      (function frame() {
        (window as any).confetti({
          particleCount: colors.length,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors,
        });
        (window as any).confetti({
          particleCount: colors.length,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors,
        });

        if (Date.now() < end) {
          setTimeout(() => {
            requestAnimationFrame(frame);
          }, 50);
        }
      })();
    }, 1000);
  };

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"
      strategy="afterInteractive"
      onLoad={onConfettiLoad}
    />
  );
}
