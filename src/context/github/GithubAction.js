import axios from 'axios'


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const github = axios .create({
    baseURL:GITHUB_URL,
    header:{Authorization:`token${GITHUB_TOKEN}`}
})


    // Get search result
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
      })

    // const response = await fetch(`${GITHUB_URL}/search/users?${params}` , {
    //     headers:{
    //         Authorization: `token ${GITHUB_TOKEN}`
    //     }
    // })

    // const {items}= await response.json();
    // return items;

      const response = await github.get(`/search/users?${params}`)
      return response.data.items

 }

    //  Get single user
// export  const getUser = async (login) => {
//     const response = await fetch(`${GITHUB_URL}/users/${login}` , {
//         headers:{
//             Authorization: `token ${GITHUB_TOKEN}`
//         }
//     })
//         if(response.status === 404) {
//         window.loacation = '/notfound'
//     } else {
//     const data = await response.json();

//     return data;
//     }
// }
 export const getUserAndRepos = async(login) => {
    // const [user] = await Promise.all([
    //     github.get(`/users/${login}`),
    // ])
    // return {user:user.data}
    const data = await github.get(`/users/${login}`)
    return data

}

