export const readingTime = (content) => {
  const words = content?.trim().split(/\s+/).length;
  const wps = 225;
  const estimateReadingTime = Math.ceil(words / wps);
  return estimateReadingTime;
};

export const dateToDisplay = (publishdate) => {
  const PublishAtDay = new Date(publishdate).getDate() < 10 ? `0${new Date(publishdate).getDate()}` : new Date(publishdate).getDate();
  const PublishAtMonth =
    new Date(publishdate).getMonth() + 1 < 10 ? `0${new Date(publishdate).getMonth() + 1}` : new Date(publishdate).getMonth() + 1;
  const PublishAtYear = new Date(publishdate).getFullYear();

  const propperDate = `${PublishAtDay}.${PublishAtMonth}.${PublishAtYear}`;
  return propperDate;
};

export const shortenContent = (content) => {
  const contentToArray = content?.split(' ');
  const shorterContentArray = contentToArray?.slice(0, 29);
  const shorterContent = `${shorterContentArray?.join(' ')} [...]`;
  return shorterContent;
};

export const minutesDeclination = (value) => {
  const output = [];
  const sNumber = value.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }

  if (value === 1) {
    return 'minutę';
  } else if (output[output.length - 1] === 2 || output[output.length - 1] === 3 || output[output.length - 1] === 4) {
    return 'minuty';
  } else {
    return 'minut';
  }
};
