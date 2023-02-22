async function hideBlue() {
  const blue = document.querySelector(`[aria-label*="Twitter Blue"]`);
  blue.remove();
}

async function waitToMount() {
  const interval = await setInterval(() => {
    console.log("running");
    const sidebar = document.querySelector(`[aria-label*="Primary"]`);
    if (sidebar) {
      clearInterval(interval);
      hideBlue();
    }
  }, 50);
}

waitToMount();
