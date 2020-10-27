export default class ScrapeThrottler {
    constructor(minThrottle = 0, maxThrottle = 0, maxConcurrentRequests = 10) {
        this.minThrottle = minThrottle;
        this.maxThrottle = maxThrottle;
        this.maxConcurrentRequests = maxConcurrentRequests;
        this.processing = 0;
        this.requestQueue = [];
    }
 
    generateTimeoutMs(min, max) {
        const timeout = Math.round(Math.random() * max);
 
        return timeout < min ? min : timeout;
    }
 
    handleQueue() {
        const reachedMaxConcurrentRequests = this.processing >= this.maxConcurrentRequests;
        const hasUnprocessedRequests = this.requestQueue.length === 0;
 
        if (reachedMaxConcurrentRequests || hasUnprocessedRequests) {
            return;
        }
 
        const nextRequest = this.requestQueue.pop();
 
        nextRequest();
    }
 
    delay(callback, timeout) {
        this.processing++;
 
        setTimeout(
            () => {
                this.processing--;
                this.handleQueue();
 
                callback();
            },
            timeout
        );
    }
 
    async throttleRequest(timeout) {
        return new Promise(resolve => {
            this.requestQueue.push(() => {
                this.delay(resolve, timeout);
            });
 
            this.handleQueue();
        })
    }
 
    apply(registerAction) {
        registerAction('beforeRequest', async ({resource, requestOptions}) => {
            const timeout = this.generateTimeoutMs(this.minThrottle, this.maxThrottle);
 
            await this.throttleRequest(timeout);
 
            return {requestOptions};
        });
    }
}
