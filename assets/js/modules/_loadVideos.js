import axios from 'axios';

class LoadVideos{

    constructor(){
        this.parent = document.querySelector('#videos-container');
        this.buttonMoreVideos = document.querySelector('#loadMoreVideos');
        this.buttonMoreVideosWrapper = document.querySelector('#wrapper-loadMoreVideos');

        this.videoPrototype = document.querySelector('#video_prototype > div');

        this.spinnerWrapper = document.querySelector('#videos__load__wrapper');

        this.currentIndex = -1;
        this.amountToFetch = 2;
        this.urlToFetch = this.currentIndex < 0 ? '/videos/'+this.amountToFetch : '/videos/'+(this.currentIndex)+'/'+this.amountToFetch;

        this.event();
    }

    event(){
        this.buttonMoreVideos.addEventListener('click', this.getData.bind(this));
    }

    createVideo(url){

        let video = this.videoPrototype.cloneNode(true);
        let iframe = video.querySelector('iframe');

        let data_src = "https://www.facebook.com/plugins/video.php?href="+ url +"&show_text=0&width=560";

        iframe.setAttribute('data-src', data_src);

        return video;
    }

    showOrHideSpinner(){
        this.spinnerWrapper.toggleClass('load__animation__wrapper--is-visible');
    }

    getData() {
        let that = this;
        axios.get(this.urlToFetch)
            .then(function (response) {
                let data = response.data;

                if (data.length > 0)
                {
                    if (data.length < that.amountToFetch)
                        that.buttonMoreVideosWrapper.hide();

                    Object.keys(data).forEach(function(key) {
                        let videoUrl = data[key].url;
                        let videoMore = data[key].more;

                        let video = that.createVideo(videoUrl);
                        that.parent[0].appendChild(video);

                        if(!videoMore)
                            that.buttonMoreVideosWrapper.hide();
                    });

                    that.currentIndex = data[data.length - 1].currentIndex;
                    that.currentIndex += 1;

                }
                else{
                    that.buttonMoreVideosWrapper.hide();
                }

                that.showOrHideSpinner();
                return false;
            })
            .catch(function (error) {
                console.log(error);
            });

        this.showOrHideSpinner();
        return false;

    }
}

export default LoadVideos;