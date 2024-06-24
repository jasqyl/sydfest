const KEY = 'events'

export const getMyEvents = () => {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}

export const addEvent = (event) => {
  const myEvents = [...getMyEvents()];
  if(myEvents.some(e => e.id === event.id)) return;
  myEvents.push(event);
  localStorage.setItem(KEY, JSON.stringify(myEvents));
}

export const removeEvent = (event) => {
  const myEvents = [...getMyEvents()];
  const newEvents = myEvents.filter(e => e.id !== event.id)
  localStorage.setItem(KEY, JSON.stringify(newEvents));
}

export const editEvent = (event, data) => {
  const newEvent = {...event}
  if(data.artist){newEvent.artist = data.artist}
  if(data.name){newEvent.name = data.name}
  if(data.date){newEvent.date = new Date(data.date).toLocaleDateString()}
  if(data.venue){newEvent.venue = data.venue}
  const myEvents = [...getMyEvents()];
  const newEvents = myEvents.filter(e => e.id !== event.id);
  newEvents.push(newEvent);
  localStorage.setItem(KEY, JSON.stringify(newEvents));
}

export const newEvent = (data) => {
  const myEvents = [...getMyEvents()];
  let maxId = 100;
  myEvents.forEach(e => {
    if(e.id > maxId) { maxId = e.id}
  })
  myEvents.push({...data, date: new Date(data.date).toLocaleDateString(), id: maxId + 1})
  localStorage.setItem(KEY, JSON.stringify(myEvents));
}

export const getDate = (dateString = '') => {
  const [d, m, y] = dateString.split('/')
  return new Date(`${y}-${m}-${d}`);
}