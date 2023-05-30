import axios from "axios"

const baseUrl = "http://localhost:3000";

//封装获取轮播图的api  调用例子 ： /banner, /banner?type=2 type=0,1,2,3
export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

<<<<<<< HEAD
//封装音乐列表的api  调用例子 ： /personalized?limit==30 limit=10,50,100
=======
//封装获取音乐列表的api  调用例子 ： /personalized?limit==30 limit=10,50,100
>>>>>>> f2302f9cce525b9f4558819e2e2911964af3b0a3
export function getMusic(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

<<<<<<< HEAD
//封装歌单详情的api  调用例子 : /playlist/detail?id=24381616
=======
//封装获取歌单详情的api  /playlist/detail?id=24381616
>>>>>>> f2302f9cce525b9f4558819e2e2911964af3b0a3
export function getMusicList(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//对外抛出
export default { getBanner,getMusic,getMusicList };