export const multiplierAPI = (amount = 1) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: amount * 2 }), 500);
    })
}