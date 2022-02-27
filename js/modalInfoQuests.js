let modalInfoQuestsList = [
    {
        title: 'По следам белого кролика',
        description: 'Злая Красная королева задумала коварный план: заточить Белого кролика, который может провести любого мечтателя в волшебный мир – Страну чудес. И только ваша команда в силах предотвратить это злодеяние, но для этого вам придется пройти затейливым маршрутом и решить уйму головоломок.',
        id: 1,
        price: '80 BYN',
        url: './images/rabbit.jpg'
    },
    {
        title: 'Психушка',
        description: 'В истории города М есть места, окутанные мраком неизвестности. Заброшенная психиатрическая лечебница на улице Судмалиса не исключение. Вы решаете узнать историю этого места, чтобы приоткрыть завесу тайны, тяжелым грузом скрывающей это здание. Однако помните: тьма и ее обитатели могут посмотреть на вас в ответ…',
        id: 2,
        price: '90 BYN',
        url: './images/hospital.jpg'
    },
    {
        title: 'Оно',
        description: 'Каждые 27 лет в небольшом американском городке Дерри происходят ряд необъяснимых и жестоких убийств. Маньяк действует зверски и буквально разрывает своих жертв на части. Полиция города сбилась с ног в поисках преступника, но пока все тщетно.В далеком 1958 году 7 учеников местной школы уже столкнулись с этим древним злом. По их рассказам все жуткие события в Дерри происходят по вине некой мистической силы, в образе клоуна - Пеннивайза. В 1985, году уже будучи взрослыми, они думали, что смогли одолеть древнее зло и положить конец всему этому кошмару, но как же они ошибались..."Оно" снова здесь! Вы являетесь потомками тех самых ребят и именно вы должны закончить начатое вашими предками дело. Если в течение 60 минут вы не найдете способ победить "Оно" - погибнете! Сделать это можно лишь в заброшенном доме, обители Пеннивайза, столкнувшись лицом к лицу со своими страхами!Давай полетаем!?',
        id: 3,
        price: '80 BYN',
        url: './images/it.jpg'
    },
    {
        title: 'Форт Боярд',
        description: 'Поговаривают, старинная крепость-темница "Форт Боярд" таит в себе много неразгаданных тайн. А главное - в ней спрятаны сокровища, которые до сегодняшнего дня никто не смог найти. Форт Боярд - необычное место. Чтобы заполучить заветный приз - вам придется пройти ряд непростых испытаний, которые проверят вас на прочность, выносливость и командный дух. Это вам не загадочки решать, здесь по-настоящему придется поработать телом! Слабо рискнуть похитить заветные сокровища?',
        id: 4,
        price: '100 BYN',
        url: './images/fort-boyard.jpg'
    },
    {
        title: 'Сокровище дракона',
        description: 'Вы – путешественники, искатели легендарных сокровищ! Есть предание, что где-то в далеком замке сокрыто сокровище дракона! Однажды дракон прилетел в город: он сравнял королевский замок с землей, а сам угнездился в сокровищнице и уснул. С тех пор прошло уже 3 тысячи лет, но он до сих в замке охраняет то самое сокровище... Но это всего лишь легенда! Вы то знаете, что ни одно существо не способно прожить так долго! Наверняка дракон давно умер или обратился в камень! В поисках замка вы уже блуждали несколько недель. Вчера ночью вас застал ужасный ливень и ураган. Вы пытались найти место, где можно укрыться от ненастья и забрели в пещеру. Наутро вы обнаружили, что заночевали не в пещере, а в каменном строении… Ваша цель: найти сокровище и отдать его хранителю замка. Удачи, Сокровище уже близко!',
        id: 5,
        price: '70 BYN',
        url: './images/dragon.jpg'
    },
    {
        title: 'Отель с призраками',
        description: 'Известный писатель Майк Энслин стал последней жертвой номера 1408. За время существования отеля в номере погибло 42 человек, и никто из них не сумел продержаться в нем больше часа. Но вы, упрямцы, конечно же, не верите в существование загробной жизни и привидений и настаиваете на том, чтобы вас заселили в 1408, даже не предполагая, каким кошмаром обернется предстоящая ночь.',
        id: 6,
        price: '80 BYN',
        url: './images/hotel.jpg'
    },
    {
        title: 'Зеркальный лабиринт',
        description: 'Передвигаться в этом месте нужно очень медленно и осторожно, поскольку никогда не знаешь, упрется ли нога при следующем шаге в стекло или нет. Кажется, что пройти лабиринт очень просто, ведь здесь столько выходов! Иди к любому! Однако все они – иллюзия, а настоящий – только один. И найти его довольно сложно.',
        id: 7,
        price: '90 BYN',
        url: './images/mirrors.jpg'
    },
    {
        title: 'Сверхъестественное',
        description: 'Вы путешествуете по всему Миру, расследуя паранормальные явления, сражаетесь с порождениями зла: демонами и призраками. Сегодня Вы оказались в Минске, в той самой комнате, история которой окутана тайнами и мраком. Вот уже прошло семьдесят лет, и не один человек, вошедший в эту комнату, не вернулся назад…. У Вас есть всего 60 минут, чтобы разгадать тайны, которые таит в себе комната и прервать череду исчезновений невинных людей.',
        id: 8,
        price: '100 BYN',
        url: './images/supernatural.jpg'
    },
    {
        title: 'Магическое исчезновение',
        description: 'Знаменитый фокусник и иллюзионист во время своего гастрольного тура произвел фурор своим побегом из крепости, одной из самых охраняемых и защищенных, и поразил зрителей удивительными номерами. Теперь и у вас есть шанс попробовать повторить его магические трюки и исчезновения! Определите, кто более ловкий и быстрый, вы или магистр, разгадайте секреты его фокусов и окончательно разберитесь, магия это или мастерство.',
        id: 9,
        price: '100 BYN',
        url: './images/magic-hide.jpg'
    },
    {
        title: 'Запертые души',
        description: 'Давным-давно жила одинокая старушка. Все дети очень любили ее. Любили за доброту, за веселые рассказы и поэтому часто бегали к ней в гости. Но однажды пришла беда! Дети стали пропадать. Родители по всей деревне приказали своим детям больше никогда не переступать порог ее дома. На следующий день старуха сама стала заглядывать в окошко к детям, приглашая их на новую сказку. Жители деревни не стали разбираться и после долгих допросов и жутких истязаний забили ее камнями на площади... С последним вздохом она произнесла: – Я вернусь!',
        id: 10,
        price: '80 BYN',
        url: './images/ghosts.jpg'
    },
    {
        title: 'Однажды в Аризоне',
        description: '1860 год. Соединенные Штаты Америки. Канун гражданской войны. Детективы агентства Пинкертона начеку, как никогда раньше. Загадочная смерть шерифа в пригороде Финикс вызывает крайнее подозрение у Алана Пинкертона. Вас и вашу команду отправляют провести независимое расследование и выяснить все обстоятельства случившегося. Но вы даже и не догадывались, какое судьбоносное для страны дело стоит за этим событием.',
        id: 11,
        price: '90 BYN',
        url: './images/arizona.jpg'
    },
    {
        title: 'Пила',
        description: 'Серийный маньяк Пила снова в деле, и сегодня он решил испытать именно вас! Чтобы выйти из его игры живыми, вам придется доказать, что вы этого достойны. На пути к исцелению вы будете преодолевать боль, жертвовать друзьями и бороться не только со своими страхами, но и со временем, ведь у вас остался всего один час. Игра началась...',
        id: 12,
        price: '80 BYN',
        url: './images/saw.jpg'
    }

];

let questsList = document.querySelector('#info-quests');

let modal = document.querySelector('#modal-quests-information');

questsList.addEventListener('click', function(event){
    let currentBtn = event.target;
    let currentNumb = Number(currentBtn.dataset.numb);
    if(currentBtn.classList.contains('info-more')){
        modal.classList.add('modal_open');
        generateModalInfo(currentNumb);
    }
})

window.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && modal.classList.contains('modal_open')){
        modal.classList.remove('modal_open');
    }
})

modal.addEventListener('click', function(event){
    if(event.target.classList.contains('btn-close') || event.target.classList.contains('btn-modal-close')){
        modal.classList.remove('modal_open');
    }
})

function generateModalInfo(currentId){
    let result = modalInfoQuestsList.filter(function(item, index){
        if(item.id === currentId){
            return item;
        }
    })

    let modalTitle = document.querySelector('#modal-title1');
    let modalDescription = document.querySelector('#modal-body1');
    let questPrice = document.querySelector('#price-quest');
    let imageQuest = document.querySelector('#image-card-quest');
    modalTitle.innerHTML = result[0].title;
    modalDescription.innerHTML = result[0].description;
    questPrice.children[0].innerHTML = result[0].price;
    imageQuest.setAttribute('src', result[0].url);
    return result;
}