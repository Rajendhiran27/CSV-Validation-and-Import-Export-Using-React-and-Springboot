import httpClient from "./server";
const getAll=()=>{
    return httpClient.get('/tutorials');
}
const create=data=>{
    return httpClient.post('/files',data);
}
const get=id=>{
    return httpClient.get(`/files/${id}`);
}
const update=data=>{
    return httpClient.put("/employees",data);
}
const remove=id=>{
    return httpClient.delete(`/employees/${id}`);
}
export default{getAll,create,get,update,remove};