import axios from "axios"


const commonAPI = async (httpMethod,url,reqBody) => {
    const reqConfig = {
        method:httpMethod,
        url,   //since key and value name same
        data:reqBody
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}



export default commonAPI
