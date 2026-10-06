
        // Функція для екранування, захист від XSS атак
        const esc = s => String(s ?? '').replace(/[&<>"']/g,
            c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
       

        const supabaseUrl = "https://kvnivreuwjgxqekaswed.supabase.co";
        const supabaseKey = "sb_publishable_lFliydUt3DSoAuntl79FdA_zHUVZpga";

        const supabaseClient = window.supabase.createClient(
            supabaseUrl,
            supabaseKey
        );
          

        async function loadMasters() {
            const { data, error } = await supabaseClient
                .from("masters")
                .select("*")
                .eq("city", "Покров")
                .eq("approved", true);
            if (error) {
                console.error(error);
               return;
            }
            masters = data;
            //Функція сортування майстрів по рейтингу
            // було: masters.sort((a, b) => b.rating - a.rating);
            masters.sort((a, b) =>// сортування преміум карток
                (Number(!!b.isPremium) - Number(!!a.isPremium)) ||
                (b.rating - a.rating)
            );

            renderMasters();

        }
            

        //loadMasters();
        
        
        
        function filterMasters(category) {
            document.querySelectorAll(".master-card").forEach(card => {
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
        

        const masterGrid = document.getElementById("masterGrid");
        const categoryNames = {
            plumber: "Сантехнік",
            electrician: "Електрик",
            builder: "Будівельник",
            welder: "Зварювальник",
            painter: "Маляр",
            tiler: "Плиточник",
            handyman: "Майстер на годину",
            "heating-installer": "Опалення",
            "window-installer": "Встановлення вікон",
            "door-installer": "Встановлення дверей",
            "stretch-ceilings": "Натяжна стеля",
            "interior-finisher": "Внутрішнє оздоблення",
            "roof-installer": "Монтаж покрівлі",
            "exterior-worker": "Фасадні роботи",
            "landscaping-services": "Благоустрій території",
            "furniture-assembler": "Меблі",
            "conditioner-installer": "Монтаж кондиціонерів",
            cleaning: "Прибирання",
            worker: "Вантажники",
            
        };
            




        function renderMasters() {

            masterGrid.innerHTML = "";

            masters.forEach(master => {
                

                masterGrid.innerHTML += `
                    <div class="master-card ${master.isPremium ? 'premium' : ''}"
                        data-category="${esc(master.category)}"
                        onclick="openMasterModal(${master.id})">

                        <img src="${esc(master.photo) || 'images/default.jpeg'}"
                            alt="${esc(master.name)}">

                        <div class="master-name-row">    
                            <h3>${esc(master.name)}</h3>
                            ${master.isPremium ? `<span class="badge-recommended"> TOP</span>` : ""}
                        </div>

                        <p>🛠️${categoryNames[master.category] || master.category}</p>
                        <p class="master-description">📜${esc(master.description) || 'Надання професійних послуг в нашому місті'}</p>

                        <p>⭐${master.rating}
                        (${master.reviews} відгуків)
                        </p>

                        <p>
                            🏆${esc(master.experience)} років досвіду
                        </p>

                        <p>📍${esc(master.city)}</p>
                            
                        <a class="call-btn"
                            href="tel:${esc(master.phone)}"
                            onclick="event.stopPropagation()">
                            📞Подзвонити
                        </a>

                        <button class="favorite-btn" data-id="${master.id}" onclick="toggleFavorite(event, ${master.id})">
                         ⭐ В обране
                        </button>
                        
                        ${master.isPremium && master.page ? `
                        <a class="premium-btn"
                        href="${esc(master.page)}"
                        onclick="event.stopPropagation()">
                        Детальніше
                         </a>
                        ` : ""}
                        

                            
                    </div>
                `; 
            });

            renderFavorites();
        }
      

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
            document.getElementById("modalId").textContent = "🆔 " + master.id;
            document.getElementById("modalName").textContent = "👤 Ім'я: " + master.name;            
            document.getElementById("modalProfession").textContent = "🛠️ Спеціалізація: " + categoryTitle; // 👈 Вже не буде undefined!
            document.getElementById("modalExperience").textContent = "🏆 Досвід: " + master.experience + " років";
            document.getElementById("modalCity").textContent = "📍 Місто: " + master.city;
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
