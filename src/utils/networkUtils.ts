/**
 * Utility functions for network detection and optimization
 */

/**
 * Detects if the user has a slow network connection
 * @returns Promise<boolean> - true if connection is slow
 */
export const isSlowConnection = (): Promise<boolean> => {
    return new Promise((resolve) => {
        // Check if Network Information API is available
        if ('connection' in navigator) {
            const connection = (navigator as any).connection;
            
            // Consider connection slow if:
            // - effectiveType is 'slow-2g' or '2g'
            // - downlink is less than 1.5 Mbps
            // - rtt (round trip time) is greater than 300ms
            const isSlowEffectiveType = ['slow-2g', '2g'].includes(connection.effectiveType);
            const isSlowDownlink = connection.downlink < 1.5;
            const isHighRTT = connection.rtt > 300;
            
            resolve(isSlowEffectiveType || isSlowDownlink || isHighRTT);
        } else {
            // Fallback: measure connection speed with a small image
            const startTime = Date.now();
            const img = new Image();
            
            img.onload = () => {
                const endTime = Date.now();
                const duration = endTime - startTime;
                // If it takes more than 500ms to load a small image, consider it slow
                resolve(duration > 500);
            };
            
            img.onerror = () => {
                // If image fails to load, assume slow connection
                resolve(true);
            };
            
            // Use a small test image (1x1 pixel)
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        }
    });
};

/**
 * Checks if the user prefers reduced data usage
 * @returns boolean - true if user prefers reduced data
 */
export const prefersReducedData = (): boolean => {
    // Check if Save-Data header is supported
    if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        return connection.saveData === true;
    }
    return false;
};

/**
 * Determines if videos should be loaded based on network conditions
 * @returns Promise<boolean> - true if videos should be loaded
 */
export const shouldLoadVideos = async (): Promise<boolean> => {
    const isSlowNet = await isSlowConnection();
    const reducedData = prefersReducedData();
    
    // Don't load videos if connection is slow or user prefers reduced data
    return !isSlowNet && !reducedData;
};