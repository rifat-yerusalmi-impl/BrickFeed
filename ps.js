".video-title/max-height" "66.0px"
".syndicatedItem .video-title/max-height" "44.0px"

function() {
    try {
        console.log('p-s starts');
        TRC = TRC || {};
        var shortest,
            Brick = {};

        TRC.layoutReady = false;
        TRC.currentItem = 1;
        TRC.appendLevel = 1;
        TRC.videoConfigLevel = 1;
        TRC.columnLevel = 1;
        TRC.first =  [];
        TRC.second = [];
        TRC.third =  [];
        TRC.fourth = [];
        TRC.columnHeighs = []
        TRC.shortest = [];
        console.log(TRC.layoutReady);
        TRC.fadeInItem = function(item){
            setTimeout(function() {
                item.style.opacity = '1';
                item.style.top = '0';
            }, 100);
        }
        TRC.fade = function(iten) {
            iten.style.opacity = '0';
            iten.style.position = 'relative';
            iten.style.top = '20px';
            iten.style.transition = 'top 1s ease,opacity 1s ease';
            TRC.fadeInItem(iten);
        }

        TRC.distributeItens = function(iten, value, l,lm,rm,r) {
            //iten.style.height = value + 'px';
            console.log('distributiing');




            //Batch specific columns
            if (l){
                Array.prototype.push.apply(TRC.first, [l,lm,rm,r]);
                Array.prototype.push.apply(TRC.second, [l,lm,rm,r]);
                Array.prototype.push.apply(TRC.third, [l,lm,rm,r]);
                Array.prototype.push.apply(TRC.fourth, [l,lm,rm,r]);
                Array.prototype.push.apply(TRC.columnHeighs, [l,lm,rm,r]);

            }


            if (document.getElementsByTagName('body')[0].offsetWidth > 766) {
                var r;
                switch (TRC.columnLevel) {
                    case 1:
                        var max = TRC.first.length;
                        if (TRC.currentItem == 1) {
                            var r = 0;
                        } else {
                            r = Math.floor(Math.random() * max);
                        }
                        TRC.first[r].appendChild(iten);
                        TRC.fade(iten)
                        TRC.first.splice(r, 1);
                        console.log('Desktop-Current Item: '+TRC.currentItem);
                        TRC.currentItem++;
                        TRC.columnLevel++;
                        break;
                    case 2:
                        var max = TRC.second.length;
                        if (TRC.currentItem == 2) {
                            var r = 3;
                        } else {
                            r = Math.floor(Math.random() * max);
                        }
                        TRC.second[r].appendChild(iten);
                        TRC.fade(iten)
                        TRC.second.splice(r, 1);
                        console.log('Desktop-Current Item: '+TRC.currentItem);
                        TRC.currentItem++;
                        TRC.columnLevel++;
                        break;
                    case 3:
                        var max = TRC.third.length;
                        if (TRC.currentItem == 3) {
                            var r = 1;
                        } else {
                            r = Math.floor(Math.random() * max);
                        }
                        TRC.third[r].appendChild(iten);
                        TRC.fade(iten)
                        TRC.third.splice(r, 1);
                        console.log('Desktop-Current Item: '+TRC.currentItem);
                        TRC.currentItem++;
                        TRC.columnLevel++;
                        break;
                    case 4:
                        var max = TRC.fourth.length;
                        if (TRC.currentItem == 4) {
                            var r = 2;
                            TRC.shortest[0] = TRC.fourth[2];
                        } else {
                            r = Math.floor(Math.random() * max);
                        }
                        TRC.fourth[r].appendChild(iten);
                        TRC.fade(iten)
                        TRC.fourth.splice(r, 1);
                        console.log('Desktop-Current Item: '+TRC.currentItem);
                        TRC.currentItem++;
                        TRC.columnLevel = 1;
                        break;

                }
            } else {
                rightmidColumn.style.width = '49%';
                leftColumn.style.width = '50%';
                leftmidColumn.style.display = 'none';
                if (TRC.currentItem == 1){
                    console.log('mobile-currItem-1');
                    leftColumn.appendChild(iten)
                } else if (TRC.currentItem == 2) {
                    console.log('mobile-currItem-2');
                    rightmidColumn.appendChild(iten)
                } else {
                    console.log('mobile-currItem-ELSE');
                    shortest = TRC.columnHeightChecker();
                    shortest.appendChild(iten);

                    TRC.fade(iten);
                }
                TRC.currentItem++;
                console.log('Current Item: ' + TRC.currentItem)
            }
        }
        TRC.columnHeightChecker = function(column){
            if (document.getElementsByTagName('body')[0].offsetWidth > 766) {
                var count = 0,
                    a = column[0].offsetHeight,
                    b = column[1].offsetHeight,
                    c = column[2].offsetHeight,
                    d = column[3].offsetHeight;



                //
                // if ((a < b ) && (a < c) && (a < d))){
                //     return column[0], 0;
                // } else if ((b < a ) && (b < c) && (b < d)){
                //     return column[1], 1;
                // } else if ((a < b ) && (a < c) && (a < d)){
                //     return column[2], 2;
                // } else {
                //     return column[3], 3;
                // }



            } else {
                if (leftColumn.offsetHeight < rightmidColumn.offsetHeight) {
                    return leftColumn;
                } else {
                    return rightmidColumn;
                }
            }
        }
    } catch(e) {
        console.log(e);
    }
}
