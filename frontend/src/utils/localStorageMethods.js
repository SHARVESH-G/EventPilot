const saveItem = (itemName, item) => {
  localStorage.setItem(itemName, item);
};

const retrieveItem = (itemName) => {
  return localStorage.getItem(itemName);
};

const deleteItem = (itemName) => {
  localStorage.removeItem(itemName);
};

const clearStorage = () => localStorage.clear();

export { saveItem, retrieveItem, deleteItem , clearStorage};