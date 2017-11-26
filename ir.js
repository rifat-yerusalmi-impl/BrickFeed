function(box,data) { 
    box.className += ' mediumSized';
    var feedContainer = box.rbox.container.parentNode,
        cardList = feedContainer.childNodes,
        itenContainer = box.rbox.container,
        heightValue = 0;
    if(document.querySelectorAll('.mediumSized').length !== 0) {
        heightValue = document.querySelectorAll('.mediumSized')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().height - 2;
    } else {
        heightValue = '';
    }
    for(i=0;i<cardList.length;i++){
        if(cardList[i].hasAttribute('tbl-feed-video')){
            TRC.videoConfigLevel++;
            break;
        }
    }

    //reseting switcher
    if (TRC.currentItem == 17) {
        TRC.currentItem = 1;
        TRC.appendLevel++;
        TRC.layoutReady = false;
    };

    if (!TRC.layoutReady){
        console.log('Creating the layout');
        var brickHolder = document.createElement('div'),
            leftColumn = document.createElement('div'),
            leftmidColumn = document.createElement('div'),
            rightmidColumn = document.createElement('div'),
            rightColumn = document.createElement('div');
        feedContainer.insertBefore(brickHolder, feedContainer.childNodes[TRC.appendLevel+TRC.videoConfigLevel]);
        brickHolder.id = 'brick_holder_'+TRC.appendLevel;
        brickHolder.className += ' brickHolder';
        brickHolder.style.textAlign = 'center';
        leftColumn.id = 'left_column_'+TRC.appendLevel;
        leftColumn.className = ' leftColumn';
        leftmidColumn.id = 'left_mid_column_'+TRC.appendLevel;
        leftmidColumn.className = ' leftmidColumn';
        rightmidColumn.id = 'right_mid_column_'+TRC.appendLevel;
        rightmidColumn.className = ' rightmidColumn';
        rightColumn.id = 'right_column_'+TRC.appendLevel;
        rightColumn.className = ' rightColumn';
        brickHolder.appendChild(leftColumn);
        brickHolder.appendChild(leftmidColumn);
        brickHolder.appendChild(rightmidColumn);
        brickHolder.appendChild(rightColumn);
        TRC.layoutReady = true;
        TRC.distributeItens(itenContainer, heightValue, leftColumn, leftmidColumn, rightmidColumn, rightColumn);
    } else {
        console.log('layout is ready');
        TRC.distributeItens(itenContainer, heightValue);

    }


}

function(box,data) {
    box.className += ' smallSized';
    var feedContainer = box.rbox.container.parentNode;
    cardList = feedContainer.childNodes,
        itenContainer = box.rbox.container,
        heightValue = 0;

    if(document.querySelectorAll('.smallSized').length !== 0) {
        heightValue = document.querySelectorAll('.smallSized')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().height - 2;
    } else {
        heightValue = '';
    }

    for(i=0;i<cardList.length;i++){
        if(cardList[i].hasAttribute('tbl-feed-video')){
            TRC.videoConfigLevel++;
            break;
        }
    }

    if (!TRC.layoutReady){
        console.log('Creating the layout');
        var brickHolder = document.createElement('div'),
            leftColumn = document.createElement('div'),
            leftmidColumn = document.createElement('div'),
            rightmidColumn = document.createElement('div'),
            rightColumn = document.createElement('div');
        feedContainer.insertBefore(brickHolder, feedContainer.childNodes[TRC.appendLevel+TRC.videoConfigLevel]);
        brickHolder.id = 'brickHolder'+TRC.appendLevel;
        brickHolder.className += ' brickHolder';
        brickHolder.style.textAlign = 'center';
        leftColumn.id = 'leftColumn'+TRC.appendLevel;
        leftColumn.className = ' leftColumn';
        leftmidColumn.id = 'leftmidColumn'+TRC.appendLevel;
        leftmidColumn.className = ' leftmidColumn';
        rightmidColumn.id = 'rightmidColumn'+TRC.appendLevel;
        rightmidColumn.className = ' rightmidColumn';
        rightColumn.id = 'rightColumn'+TRC.appendLevel;
        rightColumn.className = ' rightColumn';
        brickHolder.appendChild(leftColumn);
        brickHolder.appendChild(leftmidColumn);
        brickHolder.appendChild(rightmidColumn);
        brickHolder.appendChild(rightColumn);
        TRC.layoutReady = true;
    } else { console.log('layout is created'); }

    TRC.distributeItens(itenContainer, heightValue);
}

function(box,data) {
    box.className += ' tallSized';
    var feedContainer = box.rbox.container.parentNode;
    cardList = feedContainer.childNodes,
        itenContainer = box.rbox.container,
        heightValue = 0;

    if(document.querySelectorAll('.tallSized').length !== 0) {
        heightValue = document.querySelectorAll('.tallSized')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().height - 2;
    } else {
        heightValue = '';
    }

    for(i=0;i<cardList.length;i++){
        if(cardList[i].hasAttribute('tbl-feed-video')){
            TRC.videoConfigLevel++;
            break;
        }
    }

    if (!TRC.layoutReady){
        console.log('Creating the layout');
        var brickHolder = document.createElement('div'),
            leftColumn = document.createElement('div'),
            leftmidColumn = document.createElement('div'),
            rightmidColumn = document.createElement('div'),
            rightColumn = document.createElement('div');
        feedContainer.insertBefore(brickHolder, feedContainer.childNodes[TRC.appendLevel+TRC.videoConfigLevel]);
        brickHolder.id = 'brickHolder'+TRC.appendLevel;
        brickHolder.className += ' brickHolder';
        brickHolder.style.textAlign = 'center';
        leftColumn.id = 'leftColumn'+TRC.appendLevel;
        leftColumn.className = ' leftColumn';
        leftmidColumn.id = 'leftmidColumn'+TRC.appendLevel;
        leftmidColumn.className = ' leftmidColumn';
        rightmidColumn.id = 'rightmidColumn'+TRC.appendLevel;
        rightmidColumn.className = ' rightmidColumn';
        rightColumn.id = 'rightColumn'+TRC.appendLevel;
        rightColumn.className = ' rightColumn';
        brickHolder.appendChild(leftColumn);
        brickHolder.appendChild(leftmidColumn);
        brickHolder.appendChild(rightmidColumn);
        brickHolder.appendChild(rightColumn);
        TRC.layoutReady = true;
    } else { console.log('layout is created'); }

    TRC.distributeItens(itenContainer, heightValue);
}