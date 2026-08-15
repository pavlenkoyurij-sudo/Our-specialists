      
        function filterMasters(category) {
            document.querySelectorAll(".master-card").forEach(card => {
                const show =
                    category === "all" ||
                    card.dataset.category === category;
                card.style.display = show ? "" : "none";
            });
        }


        const masters = [
            {
                id: 1,
                isPremium: true,
                name: "Влад",
                profession: "Натяжна стеля",
                category: "stretch-ceilings",
                rating: 4.9,
                reviews: 11,
                experience: 7,
                city: "Покров, Нікополь",
                phone: "+380687611313",
                description: "виїзд на замір: Фахівець оцінює площу, визначає кути та перепади висот, допомагає обрати фактуру (глянець, мат, сатин).Консультація та розрахунок: Складання кошторису з урахуванням матеріалу (ПВХ-плівка чи тканина) та складності конструкції.Розкрій полотна: Підготовка матеріалу за індивідуальними розмірами приміщення на спеціальному виробництві.2. Безпосередній монтажМонтаж профілю (багета): Кріплення алюмінієвого або пластикового каркаса по периметру стін.Закладні під освітлення: Встановлення платформ під люстри, точкові світильники чи монтаж прихованих карнизів.Прогрів та натяжка полотна: Використання теплової гармати для розігріву плівки та її натягнення на профіль (для ПВХ).Монтаж освітлення: Вирізання отворів під світильники, їх підключення та ізоляція.3. Фінішні роботиМаскування щілин: Встановлення декоративної стрічки (заглушки) по периметру, яка приховує технічний зазор між стелею та стіною.",
                page:"../gallery-stretch-ceilings/vlad-stretch-ceilings.html"
            },
              {
                id: 2,
                isPremium: false,
                name: "Олег",
                profession: "Будівельник",
                category: "builder",
                rating: 4.8,
                reviews: 5,
                experience: 25,
                city: "Марганець, Нікополь",
                phone: "+380993612256",
                description: "Облицювання стін керамічною плиткою, утеплення, стяжка, штукатурка, шпакльовка, монтаж гіпсокартонних конструкцій, монтаж електропроводки, сантехнічні роботи та інші види будівельних робіт",
                page:""
            },

               {
                id: 3,
                isPremium: false,
                name: "Володимир",
                profession: "Майстер на годину",
                category: "handyman",
                rating: 4.6,
                reviews: 3,
                experience: 5,
                city: "Нікополь",
                phone: "+380665689732",
                description: "Надаю послуги з дрібного побутового ременту; монтаж полиць, карнизів, дзеркал, картин, телевізорів; ремонт дверей, замків, ручок; заміна змішувачів, сифонів, шлангів, прокладок; заміна розеток, вимикачів, світильників. Надаю послуги майстра на годину (чоловік на годину).",
                page:""
            },

            {
                id: 4,
                isPremium: false,
                name: "Андрій - ПП Водоприлад-Сервіс",
                profession: "Майстер з монтажу систем опалення",
                category: "heating-installer",
                rating: 4.7,
                reviews: 3,
                experience: 14,
                city: "Нікополь",
                phone: "+380508092967",
                description: "Монтаж опалення (котли, конвектори), оформлення пільгового тарифу, встановлення лічильників день/ніч. Опалення під ключ",
                page:""
            },

            {
                id: 5,
                isPremium: false,
                name: "Сергій",
                profession: "Сантехнік",
                category: "plumber",
                rating: 4.7,
                reviews: 1,
                experience: 15,
                city: "Нікополь",
                phone: "+380983283691",
                description: "Надаю послуги сантехніка",
                page:""
            },

            {
                id: 6,
                isPremium: false,
                name: "Сергій",
                profession: "Електрик",
                category: "electrician",
                rating: 4.7,
                reviews: 1,
                experience: 15,
                city: "Нікополь",
                phone: "+380983283691",
                description: "Надаю послуги електрика",
                page:""
            },

            {
                id: 7,
                isPremium: false,
                name: "Сергій",
                profession: "Майстер з монтажу вікон",
                category: "window-installer",
                rating: 4.7,
                reviews: 1,
                experience: 15,
                city: "Нікополь",
                phone: "+380983283691",
                description: "Надаю послуги з монтажу вікон (встановлення вікон). Підготовчі роботи: Проведення точних вимірів, оцінка рівня стін та підлоги, допомога у виборі матеріалів та підготовка віконного отвору.",
                page:""
            },

            {
                id: 8,
                isPremium: false,
                name: "Сергій",
                profession: "Майстер з монтажу дверей",
                category: "door-installer",
                rating: 4.7,
                reviews: 1,
                experience: 15,
                city: "Нікополь",
                phone: "+380983283691",
                description: "Надаю послуги з монтажу дверей (встановлення дверей). Підготовчі роботи: Проведення точних вимірів, оцінка рівня стін та підлоги, допомога у виборі матеріалів та підготовка дверного отвору. Монтаж конструкції.",
                page:""
            },

              {
                id: 9,
                isPremium: false,
                name: "Андрій",
                profession: "Натяжна стеля",
                category: "stretch-ceilings",
                rating: 4.7,
                reviews: 1,
                experience: 11,
                city: "Нікополь",
                phone: "+380957787462",
                description: "Монтаж натяжних стель Premium якості, будь-якої складності. Т: 0957787462, 0969948550 ",
                page:""
            },

            {
                id: 30,
                isPremium: true,
                name: "Шукаємо майстрів",
                photo: "images/noCard.jpeg",
                profession: "Ми чекаємо саме вас",
                category: "noCard",
                rating:"",
                reviews:"",
                experience:"",
                city: "Нікополь",
                phone: "380686479588",
                description: "Зателефонуйте нам або напишіть",
                page:"https://pavlenkoyurij-sudo.github.io/Our-specialists/nikopol/index.html#join-master-section"
            },


        ];

         //Функція сортування майстрів по рейтингу
        masters.sort((a, b) => b.rating - a.rating);

        //місцеве сховище дл фаворитів
        let favorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || [];
        

        const masterGrid = document.getElementById("masterGrid");

        function renderMasters() {
    masterGrid.innerHTML = "";

    masters.forEach(master => {
        masterGrid.innerHTML += `
            <div class="master-card"
                data-category="${master.category}"
                onclick="openMasterModal(${master.id})">

                <img src="${master.photo}"
                    alt="${master.name}"
                    onerror="this.onerror=null; this.src='images/default.jpeg';"> 
                    
                <h3>${master.name}</h3>

                <p>🛠️${master.profession}</p>
                <p class="master-description">📜${master.description || 'Надання професійних послуг в нашому місті'}</p>

                <p>⭐${master.rating} (${master.reviews} відгуків)</p>
                <p>🏆${master.experience} років досвіду</p>
                <p>📍${master.city}</p>
                    
                <a class="call-btn"
                    href="tel:${master.phone}"
                    onclick="event.stopPropagation()">
                    📞Подзвонити
                </a>

                <button class="favorite-btn" data-id="${master.id}" onclick="toggleFavorite(event, ${master.id})">
                ⭐ В обране
            </button>
                
                ${master.isPremium && master.page ? `
                <a class="premium-btn"
                   href="${master.page}"
                   onclick="event.stopPropagation()">
                    Детальніше:
                </a>
                ` : ""}
            </div>
        `; 
    });

    renderFavorites();
}
      
        //onerror="this.onerror=null; this.src='images/default.jpeg';" - це атрибут зображення, який забезпечує заміну зображення на "images/default.jpeg" у випадку помилки завантаження (наприклад, якщо вказане зображення не існує або недоступне). Це дозволяє уникнути відображення порожнього місця або помилки замість зображення майстра.




        renderMasters(); //рендерить список майстрів -const masterGrid = document.getElementById("masterGrid");
        
        

                //Функція додавання та видалення майстрів з фаворитів
        function toggleFavorite(event, masterId) {
            // Зупиняємо вспливання події, щоб не відкривалася модалка
            event.stopPropagation();

            masterId = Number(masterId);

            if (favorites.includes(masterId)) {
                favorites = favorites.filter(id => id !== masterId);
            } else {
                favorites.push(masterId);
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites();
        }


        function renderFavorites() {
            document.querySelectorAll(".favorite-btn").forEach(btn => {
                const id = Number(btn.dataset.id);

                if (favorites.includes(id)) {
                    btn.textContent = "❤️ В обраному";
                    btn.classList.add("active");
                } else {
                    btn.textContent = "⭐ В обране";
                    btn.classList.remove("active");
                }
            });
        }
                                
                                           




            //Функція пошуку
        function searchMaster() {

            const input = document
            .getElementById("searchInput")
            .value
            .toLowerCase();

            const cards = document.querySelectorAll(".master-card");

            cards.forEach(card => {

                const title = card.innerText.toLowerCase();

                if (title.includes(input)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none"
                }
            });
        }


            // Логіка модального вікна
        const modal = document.getElementById("masterModal");

         function openMasterModal(id) {
            // Знаходимо майстра в масиві за id
            const master = masters.find(m => m.id === id);
            if (!master) return;

            // Заповнюємо дані в модалці
            document.getElementById("modalName").textContent = master.name;
            document.getElementById("modalProfession").textContent = "🛠️ " + master.profession;
            document.getElementById("modalCity").textContent = "📍 " + master.city;
            document.getElementById("modalDescription").textContent = master.description || "Опис відсутній.";
            document.getElementById("modalCallBtn").href = "tel:" + master.phone;
            
            const photoEl = document.getElementById("modalPhoto");
            photoEl.src = master.photo || 'images/default.jpeg';
            photoEl.onerror = () => { photoEl.src = 'images/default.jpeg'; };

            // Відкриваємо вікно
            modal.showModal();
        }

        function closeMasterModal() {
            modal.close();
        }

        // Закриття при кліку на вільну частину екрана (на затемнений фон backdrop)
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });   







               
           //кнопка повернення догори    
        const btn = document.getElementById("scrollToTopBtn");       
               
               //показує кнопку, коли юзер прокручує сторінку до низу
        window.addEventListener("scroll", () => {
            btn.classList.toggle(
                "show",
                window.scrollY > 300
            );
        });
            

        
                //прокручує сторінку плавно до самого верху при натисканні
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"//забезпечує плавний скрол
            });
        });

    
        
        
        
     
            
            
