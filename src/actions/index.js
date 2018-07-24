let nextWorkId = 0
export const addWorks = text => ({
  type: 'ADD_WORKS',
  id: nextWorkId++,
  text
})
