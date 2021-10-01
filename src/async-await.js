function fetchItems() {
  return new Promise(function (resolve) {
    const items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  const resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
