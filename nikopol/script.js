      
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
                id: 11,
                isPremium: true,
                name: "Влад",
                profession: "Натяжна стеля",
                category: "stretch-ceilings",
                rating: 4.9,
                reviews: 11,
                experience: 7,
                city: "Покров",
                phone: "+380687611313",
                description: "виїзд на замір: Фахівець оцінює площу, визначає кути та перепади висот, допомагає обрати фактуру (глянець, мат, сатин).Консультація та розрахунок: Складання кошторису з урахуванням матеріалу (ПВХ-плівка чи тканина) та складності конструкції.Розкрій полотна: Підготовка матеріалу за індивідуальними розмірами приміщення на спеціальному виробництві.2. Безпосередній монтажМонтаж профілю (багета): Кріплення алюмінієвого або пластикового каркаса по периметру стін.Закладні під освітлення: Встановлення платформ під люстри, точкові світильники чи монтаж прихованих карнизів.Прогрів та натяжка полотна: Використання теплової гармати для розігріву плівки та її натягнення на профіль (для ПВХ).Монтаж освітлення: Вирізання отворів під світильники, їх підключення та ізоляція.3. Фінішні роботиМаскування щілин: Встановлення декоративної стрічки (заглушки) по периметру, яка приховує технічний зазор між стелею та стіною.",
                page:"gallery-stretch-ceilings/vlad-stretch-ceilings.html"
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
                        data-category="${master.category}">

                        <img src="${master.photo}"
                            alt="${master.name}"
                            onerror="this.onerror=null; this.src='images/default.jpeg';"> 
                            
                        <h3>${master.name}</h3>

                        <p>🛠️${master.profession}</p>
                        <p class="master-description">📜${master.description || 'Надання професійних послуг в нашому місті'}</p>

                        <p>⭐${master.rating}
                        (${master.reviews} відгуків)
                        </p>

                        <p>
                            🏆${master.experience} років досвіду
                        </p>

                        <p>📍${master.city}</p>
                            
                        <a class="call-btn"
                            href="tel:${master.phone}">
                            📞Подзвонити
                        </a>

                        <button
                            class="favorite-btn"
                            data-phone="${master.phone}"
                            onclick="toggleFavorite('${master.phone}')">
                            ⭐ В обране

                        </button>
                        
                        ${master.isPremium ? `
                        <a class="premium-btn"
                        href="${master.page}">
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
        function toggleFavorite(masterPhone) {
            if (favorites.includes(masterPhone)) {
                favorites = favorites.filter(
                item => item !== masterPhone
            );
            } else {
                favorites.push(masterPhone);
            }
            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );
            renderFavorites();
        }


        function renderFavorites() {

            document
                .querySelectorAll(".favorite-btn")
                .forEach(btn => {
                    const phone = btn.dataset.phone;

                    if (favorites.includes(phone)) {

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
                behavior: "smooth"//забезпечує плавний скролінг
            });
        });

    
        
        
        
     
            
            
