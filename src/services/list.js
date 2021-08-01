export function getObservation() {
  return fetch('https://www.inaturalist.org/observations/katie1441.json').then((data) =>
    data.json()
  );
}
