export const readingTime = (content) => {
  const words = content.trim().split(/\s+/).length;
  const wps = 225;
  const estimateReadingTime = Math.ceil(words / wps);
  return estimateReadingTime;
};

export const dateToDisplay = (publishdate) => {
  const PublishAtDay = new Date(publishdate).getDate();
  const PublishAtMonth = new Date(publishdate).getMonth() + 1;
  const PublishAtYear = new Date(publishdate).getFullYear();
  const propperDate = `${PublishAtDay}.${PublishAtMonth}.${PublishAtYear}`;
  return propperDate;
};

export const shortenContent = (content) => {
  const contentToArray = content.split(' ');
  const shorterContentArray = contentToArray.slice(0, 29);
  const shorterContent = `${shorterContentArray.join(' ')} [...]`;
  return shorterContent;
};
