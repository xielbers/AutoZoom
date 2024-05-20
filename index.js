(function() {
    const zoomUrl = "https://us06web.zoom.us/j/87813278236?pwd=aoMVUXAtPNjbvpXc9fC5LvX6VDufeb.1";
    const countdownElement = document.getElementById("countdown");
    
    const now = new Date();
    let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 50);
    
    if (targetTime - now < 0) {
        targetTime.setDate(targetTime.getDate() + 1);
    }
    
    const updateTimeDifference = () => {
        const currentTime = new Date();
        const timeDifference = targetTime - currentTime;
        
        if (timeDifference <= 0) {
            window.location.href = zoomUrl;
        } else {
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    };
    
    updateTimeDifference();
    setInterval(updateTimeDifference, 1000);
})();
