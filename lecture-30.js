// promise apis : all(), allSetteled(), race(), any()

// Promise.all() 
// when we want to make multiple api calls parallely and 
// contract of it is that it takes iterable of promises as input
// there are multiple types of iterables in js one of them is array which is most commonly used
// if any one promise get fails out of all promises, it will cause failure for all api call and Promise.all() will get failed and will throw same error as it is which is thrown by failed 

// we cannot cancel or stop promises inbetween once they are made

// Promise.allSetteled()
// it is similiar to Promise.all(), the difference is it doesn't care if any promise gets failed, it focuses on resolved promises, it waits it all promises gets settled (eigther resolve or reject or their combination)

// Promise.race()
// as the name suggest, which ever promise get resolved or failed first, same response or error is returned by race()

// Promise.any()
// similiar to Promise.race(), the difference is that it waits for the any promise to get resolved first and return it as result
// and if all promises get fialed then result is aggregated error or failure (array of all errors)
