import { Controller } from 'stimulus';
import axios from "axios";

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {
        this.posterElement = this.element.querySelector('a[data-poster-id]');
        this.description = this.element.querySelector('p');
        this.likeBtn = this.element.querySelector('div.btn__like');

        if(this.posterElement.dataset.posterLiked === "true")
        {
            this.likeBtn.classList.add('liked');
        }
        // this.description.textContent = 'Poster ID = ' + this.posterElement.dataset.posterId;
        this.likeBtn.addEventListener('click',this.likePoster.bind(this));
    }

    likePoster()
    {
        let url = '/voting/poster/'+this.posterElement.dataset.posterId;
        let that = this;
        axios.get(url)
            .then(function (response) {
                that.posterElement.dataset.posterLiked = 'true';
                that.likeBtn.classList.add('liked');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
