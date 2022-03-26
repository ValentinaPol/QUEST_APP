const URL_QUESTS = 'https://quests-app555.herokuapp.com/api/quests';
const REVIEWS_URL = 'https://quest-reviews-app.herokuapp.com/api/reviews';


const getResourse = async (url) => {
    try{
        const fetchRes = await fetch(url);
        return fetchRes.json();
    } catch (e) {
        console.log(e);
    }
}

const getQuestsInfo = async () => {
    const res = await getResourse(URL_QUESTS);
    return res;
}

const getDataReviews = async () => {
    const res = await getResourse(REVIEWS_URL);
    return res;
}

