
     
      
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
                name: "Володя",
                profession: "Сантехнік",
                category: "plumber",
                rating: 4.9,
                phone: "+380508434698",
                photo: "images/plumber.jpeg"
            },
            {
                name: "Олексій",
                profession: "Електрик",
                category: "electrician",
                rating: 4.8,
                phone: "+380956617006",
                photo: "images/electrician.jpeg"
            },
            {
                name: "Володимир",
                profession: "Будівельник",
                category: "builder",
                rating: 4.9,
                phone: "+380964851722",
                photo: "images/builder.jpeg"
            },
             {
                name: "Володимир",
                profession: "Зварювальник",
                category: "welder",
                rating: 4.7,
                phone: "+380508434698",
                photo: "images/welder.jpeg"
            },
            {
                name: "Станіcлав",
                profession: "Майстер на годину",
                category: "handyman",
                rating: 4.8,
                phone: "+380976944195",
                photo: "images/handyman.jpeg"
            },
            {
                name: "Євгеній",
                profession: "Маляр",
                category: "painter",
                rating: 4.8,
                phone: "+380972859328",
                photo: "images/painter.jpeg"
            },
             {
                name: "Володимир",
                profession: "Плиточник",
                category: "tiler",
                rating: 4.7,
                phone: "+380508434698",
                photo: "images/tiler.jpeg"
            },
            {
                name: "Володя",
                profession: "Майстер з монтажу систем опалення",
                category: "heating-installer",
                rating: 4.8,
                phone: "+380964851722",
                photo: "images/heating-installer.jpeg"
            },
            {
                name: "Володимир",
                profession: "Майстер з монтажу вікон",
                category: "window-installer",
                rating: 4.9,
                phone: "+380508434698",
                photo: "images/window-installer.jpeg"
            },
             {
                name: "Станіслав",
                profession: "Майстер з монтажу дверей",
                category: "door-installer",
                rating: 5.0,
                phone: "+380976944195",
                photo: "images/door-installer.jpeg"
            },
            {
                name: "Влад",
                profession: "Натяжна стеля",
                category: "stretch-ceilings",
                rating: 4.9,
                phone: "+380687611313",
                photo: "images/stretch-ceilings.jpeg"
            },
            {
                name: "Женя",
                profession: "Майстер з внутрішнього оздоблення",
                category: "interior-finisher",
                rating: 4.8,
                phone: "+380972859328",
                photo: "images/interior-finisher.jpeg"
            },
        ];

        const masterGrid = document.getElementById("masterGrid");

        masters.forEach(master => {

            masterGrid.innerHTML += `
                <div class="master-card"
                    data-category="${master.category}">
                        <img src="${master.photo}" alt="${master.name}" onerror="this.onerror=null; this.src='images/default.jpeg';">
                        <h3>${master.name}</h3>
                        <p>${master.profession}</p>
                        <p class="rating">⭐${master.rating}</p>

                        <a class="call-btn"
                        href="tel:${master.phone}">
                            📞Подзвонити
                        </a>
                    </div>
            `; 
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
        
        
        
     
            
            
