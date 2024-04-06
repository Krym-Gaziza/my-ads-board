// Это просто моковые функции для примера
const mockAds = [
    { id: 1, title: 'Объявление 1', description: 'Описание 1' },
    { id: 2, title: 'Объявление 2', description: 'Описание 2' },
    // дополнительные объявления
  ];
  
  export const getAds = async () => {
    // Здесь может быть запрос к реальному API
    return Promise.resolve(mockAds);
  };
  
  export const deleteAd = async (id) => {
    // Здесь может быть запрос к реальному API для удаления объявления
    return Promise.resolve({ message: 'Объявление удалено' });
  };
  