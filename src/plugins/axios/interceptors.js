function setParams(config) {
    console.log(config);
    const params = config || {};
    config.params = Object.assign(params,{

    })
}


export default function(axios){
    axios.interceptors.request.use()

}