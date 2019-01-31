async function getCardInfo(name) {
  try {
    const result = await fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`);
    const resData = result.json();
    // console.log(resData);
    return resData;
    
  } catch (error) {
    console.log(error);
  }
}