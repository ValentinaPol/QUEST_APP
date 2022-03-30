const renderReviewsList = async () => {
    let data = await getDataReviews();
    let reviewsList = document.querySelector('#reviews-list');
    reviewsList.innerHTML = '';
    data.forEach((review) => {
        reviewsList.innerHTML += `
        <div class="col-4 bg-secondary card-review mt-4">
            <p class="card-text px-2 mb-0 mt-2" id="reviewer-name">Пользователь: ${review.reviewerName}</p>
            <p class="card-text text-info mb-0 px-2" id="add-review-data">Отзыв написан ${(review.createdAt).substr(0,10)}</p>
            <p class="card-text mb-0 px-2 text-warning" id="add-quest-title">Наименование квеста: ${review.questTitle}</p>
            <p class="card-text mb-0 px-2" id="add-quest-mark">Оценка: ${review.questMark}/5</p>
            <p class="card-text px-2 mb-2" id="add-review-text">${review.textReview}</p>
        </div>
        `
    })
    
}

renderReviewsList();

