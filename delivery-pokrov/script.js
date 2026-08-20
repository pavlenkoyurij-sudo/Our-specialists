        const supabaseUrl = "https://kvnivreuwjgxqekaswed.supabase.co";
        const supabaseKey = "sb_publishable_lFliydUt3DSoAuntl79FdA_zHUVZpga";

        const supabaseClient = window.supabase.createClient(
            supabaseUrl,
            supabaseKey
        );
          
            let carriers = [];
        async function loadCarriers() {
            const { data, error } = await supabaseClient
                .from("carriers")
                .select("*")
                .eq("city", "Покров")
                .eq("approved", true);
            if (error) {
                console.error(error);
               return;
               console.log("DATA FROM SUPABASE:", data);
            }
            carriers = data;
            
            //Функція сортування майстрів по рейтингу
            carriers.sort((a, b) => b.rating - a.rating);

            renderCarriers();

        }
            

        
        
        
        
        function filterCarriers(category) {
            document.querySelectorAll(".carrier-card").forEach(card => {
                const show =
                    category === "all" ||
                    card.dataset.category === category;
                card.style.display = show ? "" : "none";
            });
        }

      
                



        

         

        //місцеве сховище дл фаворитів
        let favorites = JSON.parse(
            localStorage.getItem("favorites")
        ) || [];
        

        const carriersGrid = document.getElementById("carriersGrid");
        const categoryNames = {
            "extra-small": "Кур'єрська доставка",
            "small": "до 1 тонни",
            "medium": "до 5 тонн",
            "large": "до 10 тонн",
            "extra-large": "більше 10 тонн",
            "dumper": "Самоскиди",
            "bus": "Пасажирські перевезення",
            "reefer": "Рефрижератори",
            "special-vehicles": "Спецтехніка"
       
            
        };

        function renderCarriers() {
            

            carriersGrid.innerHTML = "";

            carriers.forEach(carrier => {

               

                carriersGrid.innerHTML += `
                    <div class="carrier-card"
                        data-category="${master.category}"
                        onclick="openMasterModal(${master.id})">

                        <img src="${master.photo}"
                            alt="${master.name}"
                            onerror="this.onerror=null; this.src='images/default.jpeg';"> 
                            
                        <h3>${master.name}</h3>

                        <p>🛠️${categoryNames[master.category] || master.category}</p>
                        <p class="master-description">📜${master.description || 'Надання професійних послуг в нашому місті'}</p>

                        <p>⭐${master.rating}
                        (${master.reviews} відгуків)
                        </p>

                        <p>
                            🏆${master.experience} років досвіду
                        </p>

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




        loadMasters(); //рендерить список майстрів -const masterGrid = document.getElementById("masterGrid");
        
        

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



        // Логіка модального вікна
        const modal = document.getElementById("masterModal");

        function openMasterModal(id) {
            // Знаходимо майстра в масиві за id
            const master = masters.find(m => m.id === id);
            if (!master) return;

            // Отримуємо зрозумілу назву категорії зі словника categoryNames
            const categoryTitle = categoryNames[master.category] || master.profession || master.category;

            // Заповнюємо дані в модалці
            document.getElementById("modalName").textContent = master.name;
            document.getElementById("modalProfession").textContent = "🛠️ " + categoryTitle; // 👈 Вже не буде undefined!
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

         function filterCities() {
            const search = document
                .getElementById("citySearch")
                .value
                .toLowerCase();

            document.querySelectorAll(".city-link").forEach(link => {
                link.style.display =
                    link.textContent.toLowerCase().includes(search)
                        ? "block"
                        : "none";
            });
        }
