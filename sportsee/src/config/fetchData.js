/**
 * Get API's data and return Object 
 * @param {Number} id Id of User
 * @returns { Object }
 */
export const fetchData =  async (id) => {
    let activity = null
    let averageSession = null
    let performance = null
    let userInfos = null
    await fetch(`http://localhost:3000/user/${id}/`)
    .then(response => response.json())
    .then(res => userInfos = res)
    .catch(err => console.log(err))
    await fetch(`http://localhost:3000/user/${id}/activity`)
    .then(response => response.json())
    .then(res => activity = res)
    .catch(err => console.log(err))
    await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then(response => response.json())
    .then(res => averageSession = res)
    .catch(err => console.log(err))
    await fetch(`http://localhost:3000/user/${id}/performance`)
    .then(response => response.json())
    .then(res => performance = res)
    .catch(err => console.log(err))
    
    return {
        userInfos: userInfos,
        activity: activity,
        averageSession: averageSession,
        performance: performance
    }
}