URL_QUESTS = 'https://quests-app555.herokuapp.com/api/quests';


const getQuestsInfo = async () => {
    try{
        const fetchRes = await fetch(URL_QUESTS);
        return fetchRes.json();
    } catch (e) {
        console.log(e);
    }
}