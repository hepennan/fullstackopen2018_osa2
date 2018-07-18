import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
    return request.then(response => {
    return response.data;
  });
};

const create = personObj => {
  const request = axios.post(baseUrl, personObj);
  return request.then(response => {
    return response.data;
  });
};

const remove = personId => {
  const personUrl = baseUrl.concat("/").concat(personId);
  const request = axios.delete(personUrl);
  return request;
};

const modify = personObj => {
  const personUrl = baseUrl.concat("/").concat(personObj.id);
  const request = axios.put(personUrl, personObj);
  return request.then(response => {
    return response.data;
  }).catch(error => {
    console.log("yritys muuttaa henkilöä, jota ei löydy serveriltä ", error);
    console.log("lisätään henkilö ", personObj.name, " serverille")
    create(personObj)
  })
};

export default { getAll, create, remove, modify };
