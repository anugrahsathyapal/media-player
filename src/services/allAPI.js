import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//saveVideoAPI - post http request called Add Component when user clicks on addd button
export const saveVideoAPI = async (videoDetails) => {
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}

//getAllVideosAPi - get http request called View component when component displayed in browser inside its its useEffecct hook
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}


//saveHistoryAPI - post http request to http://localhost:3000/history called by videpCaed when video is played
export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

//getAllHistoryAPI - get http request to http://localhost:3000/history called by History component when it opens in the browser
export const getAllHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

//deleteHistoryAPI - delete http request to http://localhost:3000/history/id called by History component when user clicks on the delete button
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}


//removeVideosAPi - delete http request  called by VideoCard component when user clicks on the delete button
export const removeVideosAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}


//saveCategoryAPI - post http request to http://localhost:3000/category called by Category component when user click on the add button
//categoryDeatils = {categoryname,allVideos}
export const saveCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

//saveCategoryAPI - get http request to http://localhost:3000/category called by Category component when component loaded in the browser
export const getAllCategoriesAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}

//deleteCategoryAPI - delete http request to http://localhost:3000/categories/id called by Category component when user clicks on the delete button
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}


//upadatCategoryAPI - put http request to http://localhost:3000/categories/id called by Category component when droped over the category
export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
} 






