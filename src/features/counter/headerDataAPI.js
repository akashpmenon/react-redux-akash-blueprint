export const headerAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'Akash.p.menon', id: '12345' }), 2000);
  });
}