export function getBrowserName() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes("Firefox")) return "Mozilla Firefox";
    if (userAgent.includes("SamsungBrowser")) return "Samsung Internet";
    if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
    if (userAgent.includes("Edge") || userAgent.includes("Edg")) return "Microsoft Edge";
    if (userAgent.includes("Chrome")) return "Google Chrome";
    if (userAgent.includes("Safari")) return "Apple Safari";
    if (userAgent.includes("MSIE") || userAgent.includes("Trident")) return "Internet Explorer";
    
    return "Unknown Browser";
}