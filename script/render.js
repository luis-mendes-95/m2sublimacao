function renderHeader() {

    let header_app = document.querySelector(".header_app")

        let img_logo = document.createElement("img")
        img_logo.classList.add("img_logo")
        img_logo.src = "/assets/logo-m2.png"
        header_app.appendChild(img_logo)
}

function renderMain(title) {
    let main_app = document.querySelector(".main_app")

        let ul_data = document.createElement("ul")
        ul_data.classList.add("ul_data")
        main_app.appendChild(ul_data)

            let h2_ul_title = document.createElement("h2")
            h2_ul_title.classList.add("h2_ul_title")
            h2_ul_title.innerText = title
            ul_data.appendChild(h2_ul_title)

            portfolio.forEach((item) => {
                let li_individual_data = document.createElement("li")
                li_individual_data.classList.add("li_individual_data")
                li_individual_data.innerText = item
                ul_data.appendChild(li_individual_data)
            })

}   

function renderFooter(insta,address,whats,phone) {
    let footer_app = document.querySelector(".footer_app")

        let ul_footer_data = document.createElement("ul")
        ul_footer_data.classList.add("ul_footer_data")
        footer_app.appendChild(ul_footer_data)

                let li_individual_footer_insta = document.createElement("li")
                li_individual_footer_insta.classList.add("li_individual_footer_data")
                li_individual_footer_insta.innerText = insta
                ul_footer_data.appendChild(li_individual_footer_insta)
                li_individual_footer_insta.addEventListener("click", () => {
                    window.location.assign("https://www.instagram.com/m2.sublimacaodigital/")
                })

                    let img_logo_insta = document.createElement("img")
                    img_logo_insta.src = "./assets/insta-logo.png"
                    img_logo_insta.classList.add("img_logo_insta")
                    li_individual_footer_insta.appendChild(img_logo_insta)

                let li_individual_footer_whats = document.createElement("li")
                li_individual_footer_whats.classList.add("li_individual_footer_whats")
                li_individual_footer_whats.innerText = whats
                ul_footer_data.appendChild(li_individual_footer_whats)
                li_individual_footer_whats.addEventListener("click", () => {
                    window.location.assign("https://api.whatsapp.com/send/?phone=5547999621109&text&type=phone_number&app_absent=0")
                })
    
                    let img_logo_whats_logo = document.createElement("img")
                    img_logo_whats_logo.src = "./assets/whats-logo.png"
                    img_logo_whats_logo.classList.add("img_logo_pin_map")
                    li_individual_footer_whats.appendChild(img_logo_whats_logo)

                let li_individual_footer_phone = document.createElement("li")
                li_individual_footer_phone.classList.add("li_individual_footer_phone")
                li_individual_footer_phone.innerText = phone
                ul_footer_data.appendChild(li_individual_footer_phone)
    
                    let img_logo_phone_logo = document.createElement("img")
                    img_logo_phone_logo.src = "./assets/phone-logo.png"
                    img_logo_phone_logo.classList.add("img_logo_phone_logo")
                    li_individual_footer_phone.appendChild(img_logo_phone_logo)

                let li_individual_footer_address = document.createElement("li")
                li_individual_footer_address.classList.add("li_individual_footer_address")
                li_individual_footer_address.innerText = address
                ul_footer_data.appendChild(li_individual_footer_address)
                li_individual_footer_address.addEventListener("click", () => {
                    window.location.assign("https://www.google.com/maps/dir//R.+Indaial,+105+-+Dom+Bosco,+Itaja%C3%AD+-+SC,+88303-301/@-26.911097,-48.6784326,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94d8cc7ff4cdc2a9:0x62ecd0f1f21a868c!2m2!1d-48.6777271!2d-26.9206129")
                })
            
                    let img_logo_pin_map = document.createElement("img")
                    img_logo_pin_map.src = "./assets/pin-map.png"
                    img_logo_pin_map.classList.add("img_logo_pin_map")
                    li_individual_footer_address.appendChild(img_logo_pin_map)




}


renderHeader()
renderMain("SUA REFERÊNCIA EM ITAJAÍ PARA:")
renderFooter("m2.sublimacaodigital","R. Indaial, Nº 105 - Dom Bosco, Itajaí / SC","47 9 9962 1109","47 3344-5383")


