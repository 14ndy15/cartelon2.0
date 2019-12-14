import axios from 'axios';
import {makeSrcSet} from './_utils';

class LoadNews{
    constructor(){
        this.parent = document.querySelector('#news-container');
        this.buttonMoreNews = document.querySelector('#loadMoreNews');
        this.buttonMoreNewsWrapper = document.querySelector('#wrapper-loadMoreNews');
        this.newsPrototype = document.querySelector('#news_prototype > div');
        this.spinnerWrapper = document.querySelector('#news__load__wrapper');

        this.currentIndex = -1;
        this.amountToFetch = 2;
        this.urlToFetch =  this.currentIndex < 0 ? '/news/'+this.amountToFetch : '/news/'+this.currentIndex+'/'+this.amountToFetch;

        this.events();
    }

    events(){
        this.buttonMoreNews.addEventListener('click', this.getData.bind(this));
    }

    createNews(newsData){
        let newsId = newsData.id;
        let newsTitle = newsData.title;
        let newsDate = newsData.date;
        let newsText = newsData.text;
        let newsImage = newsData.image;
        let newsFile = newsData.file;
        let newsMaxWidthImage = newsData.maxWidth;

        let news = this.newsPrototype.cloneNode(true);
        let newsImageSrcSet = makeSrcSet(newsImage, newsMaxWidthImage);
        let newsLink = '/show-news/'+newsId+'/'+encodeURI(newsTitle)+'#'+encodeURI(newsTitle);

        news.querySelector('.info-block > div').setAttribute('id', encodeURI(newsTitle));
        news.querySelector('.news__image img').setAttribute('src', newsImage+"-20.jpg");
        news.querySelector('.news__image img').setAttribute('data-srcset', newsImageSrcSet);
        news.querySelector('.news__text .info-block__description > a').setAttribute('href', newsLink);
        news.querySelector('.news__text h3').textContent = newsTitle;
        news.querySelector('.news__text h4').textContent = newsDate;
        news.querySelector('.news__text p').innerHTML = newsText;
        news.querySelector('.news__text .info-block__description__link a').setAttribute('href', newsFile);

        return news;
    }

    showOrHideSpinner(){
        this.spinnerWrapper.classList.toggle('load__animation__wrapper--is-visible');
    }

    getData(e) {
        e.preventDefault();

        let that = this;
        axios.get(this.urlToFetch)
        .then(function (response) {
            let data = response.data;
            
            if (data.length > 0)
            {
                if (data.length < that.amountToFetch)
                    that.buttonMoreNewsWrapper.classList.add('wrapper--hide');

                Object.keys(data).forEach(function(key) {

                    let news = that.createNews(data[key]);
                    that.parent.appendChild(news);

                    if(!data[key].more)
                        that.buttonMoreNewsWrapper.classList.add('wrapper--hide');
                });

                that.currentIndex = data[data.length - 1].currentIndex;
                that.currentIndex += 1;
            }  
            else{
                that.buttonMoreNewsWrapper.classList.add('wrapper--hide');
            }  

            //stop waiting
            that.showOrHideSpinner();

            return false;
        })
        .catch(function (error) {
            console.log(error);
        });

        //waiting for data arrival
        this.showOrHideSpinner();
    }
}

export default LoadNews;