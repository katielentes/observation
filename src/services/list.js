const observationListCacheMap = new Map();

export const getObservationListByUser = (user) => {
  if (!observationListCacheMap.has(user)) {
    observationListCacheMap.set(user, getObservationList(user));
  }
  return observationListCacheMap.get(user);
};

const getObservationList = (user) => {
  return fetch(`https://www.inaturalist.org/observations/${user}.json`)
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
    });
};
