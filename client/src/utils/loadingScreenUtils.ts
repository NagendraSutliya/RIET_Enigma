// Skip loading screen utility
// Use this during development if you want to bypass the loading screen

export const skipLoadingScreen = () => {
  sessionStorage.setItem('hasSeenLoading', 'true');
  console.log('✅ Loading screen will be skipped on next refresh');
};

export const resetLoadingScreen = () => {
  sessionStorage.removeItem('hasSeenLoading');
  console.log('🔄 Loading screen will show on next refresh');
};

export const checkLoadingScreenStatus = () => {
  const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
  console.log(
    hasSeenLoading 
      ? '⏭️  Loading screen is currently SKIPPED' 
      : '▶️  Loading screen will SHOW on next load'
  );
  return !hasSeenLoading;
};

// Global window functions for easy console access
if (typeof window !== 'undefined') {
  (window as any).skipLoading = skipLoadingScreen;
  (window as any).resetLoading = resetLoadingScreen;
  (window as any).checkLoading = checkLoadingScreenStatus;
  
  console.log(`
  🎬 ENIGMA2.0 Loading Screen Utils
  ═══════════════════════════════════
  
  Available commands:
  • skipLoading()   - Skip loading screen
  • resetLoading()  - Show loading screen again
  • checkLoading()  - Check current status
  
  Try typing: skipLoading()
  `);
}
