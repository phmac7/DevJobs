export const getDateInDaysAgo = (createdAt: string) => {
     
  const date = new Date(createdAt).getTime();
  const todayDate = new Date().getTime();
  const difference = todayDate - date;
  const differenceInDays = difference / (1000 * 3600 * 24);
  if(differenceInDays < 1) {
    return [Math.round(differenceInDays * 24), 'h']
  }
  return [Math.round(differenceInDays), 'd']

}