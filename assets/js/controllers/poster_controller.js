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

    static targets = [ "poster", "like" ]

    connect() {
        if(this.posterTarget.dataset.posterLiked === "true")
        {
            this.likeTarget.classList.add('liked');
        }
    }

    like() {
        let url = '/voting/poster/'+this.posterTarget.dataset.posterId;
        let that = this;
        axios.get(url)
            .then(function (response) {
                that.posterTarget.dataset.posterLiked = 'true';
                that.likeTarget.classList.add('liked');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
