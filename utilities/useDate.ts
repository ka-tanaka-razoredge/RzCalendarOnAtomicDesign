const useDate = () => {
  const toDateString = (source, delimiter) => {
    const memento = source.split(delimiter);
    const year = memento[0];
    const month = ('00' + memento[1]).slice(-2);
    const day = ('00' + memento[2]).slice(-2);
    console.log(`here: ${year}-${month}-${day}`);
    return `${year}-${month}-${day}T00:00:00.000Z`;
  };

  const formatDate = (date, format) => {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
  };

  const inquire2Decades = () => {
    let memento = new Date();
    memento.setFullYear(memento.getFullYear() - 20);
    return formatDate(memento, 'yyyy/MM/dd');
  };

  return { toDateString, formatDate, inquire2Decades };
};
export default useDate;
