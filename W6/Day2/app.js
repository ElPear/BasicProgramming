const showProfile = async (userId) => {
  try{
    let user = await getUser(userId)
    let badges = await getBadges(user.name)
    return {user:user, badges:badges}
  }catch(e){
    console.log(`Failed: ${e}`)
  }
}