

const mapObjectToArray = (object, mapper) => {

  let array = [];
  for (let key in object) {
    array.push(mapper(object[key], key));
  }

  return array;
}


export default mapObjectToArray;