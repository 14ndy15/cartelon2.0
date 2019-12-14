/**
 * @return {string}
 */
export function makeSrcSet(imageSrc, maxImageWidth){
    let dimensions = [500, 800, 1200, 1900, 3600];
    let srcset = "";

    for (let i = 0; i < dimensions.length; i++)
        if (dimensions[i] <= maxImageWidth)
            srcset += imageSrc + "-" + dimensions[i] + ".jpg " + dimensions[i] + "w, ";

    srcset = srcset.substring(0, srcset.length - 2);
    return srcset;
}