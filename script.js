      
        function filterMasters(category) {
            document.querySelectorAll(".master-card").forEach(card => {
                card.style.display =
                    category === "all" ||
                    card.dataset.category === category
                        ? ""
                        : "none";
                        behavior: "smooth";
            });
        }







               
           //кнопка повернення догори    
        const btn = document.getElementById("scrollToTopBtn");       
               
               //показуєт кнопку, коли юзер прокручує сторінку до низу
        window.addEventListener("scroll", () => {
            btn.classList.toggle(
                "show",
                window.scrollY > 300
            );
        });
            

        
                //прокручує сторінку плавно до самого верху при наимсканні
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"//забезпечує плавний скролінг
            });
        });
        
        
        
     
            
            