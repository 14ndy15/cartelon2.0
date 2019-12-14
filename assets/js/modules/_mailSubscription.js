import axios from 'axios';

class MailSubscription{

    constructor(){
        this.form = document.querySelector('.footer__subscription__form');
        this.email = document.querySelector('.footer__subscription__form__item__email');
        this.button = document.querySelector('.footer__subscription__form__item__submit');
        this.subscriptionMessage = document.querySelector('.footer__subscription__message');
        this.event();
    }

    event(){
        this.button.addEventListener('click', this.send.bind(this));
    }

    send(){

        if (this.form.checkValidity()){
            let email = this.email.value;
            const params = new URLSearchParams();
            params.append('email', email);

            let that = this;

            axios.post('/mail', params)
            .then(function (response) {
                let serverCode = response.data.response;
                if (serverCode === 'success'){
                    setTimeout(function(){
                        that.form.classList.add('footer__subscription__form--no-visible');
                        that.subscriptionMessage.classList.add('footer__subscription__message--visible');
                        that.subscriptionMessage.innerText = "!Hemos recibido su direcci&oacute;n de correo!<br>Pronto le enviaremos nuestro bolet&iacute;n.";
                    }, 350);                    
                }
                else{
                    that.form.classList.add('footer__subscription__form--no-visible');
                    that.subscriptionMessage.classList.add('footer__subscription__message--visible');
                    that.subscriptionMessage.innerText = "!Ha ocurrido un error! Intentalo de nuevo más tarde.";
                }
                
            })
            .catch(function (error) {
                that.form.classList.add('footer__subscription__form--no-visible');
                that.subscriptionMessage.classList.add('footer__subscription__message--visible');
                that.subscriptionMessage.innerText = "!Ha ocurrido un error! Prueba de nuevo más tarde.";
            });

            return false;    
        }
        
    }
}

export default MailSubscription;