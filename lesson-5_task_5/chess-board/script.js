creatChessBoard(8);

function createElem(htmlElem = false, htmlClass = false, htmlId = false, htmlContent = false){
    if(htmlElem){
        htmlElem = document.createElement(htmlElem);
        if(htmlClass){
            htmlElem.className = htmlClass;
        } 
        if(htmlId){
            htmlElem.id = htmlId;
        }
        if(htmlContent){
            htmlElem.innerHTML = htmlContent;
        }
    }
    return htmlElem;
}

function creatChessBoard(count = 8){
    arFigureWhite = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;','&#9817;'];
    arFigureBlack = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;','&#9822;', '&#9820;', '&#9823;'];
    arLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    pointInput = document.getElementById('js-container');
    elParentBox = createElem('div', 'box');
    pointInput.append(elParentBox);
    elParentBox.before(elChildrenDivLeft = createElem('div', 'number'));
    elParentBox.after(elChildrenDivRight = createElem('div', 'number'));

    for(i = 1; count >= i; i++){
        elChildrenDivLeft.append(createElem('div', false, false, i));
        elChildrenDivRight.append(createElem('div', false, false, i));
        elParentBox.append(elChildrenRow = createElem('div', 'row row-' + i ));
        if(elChildrenRow.childNodes.length <= i){
            for(b = 0; count > b; b++){
                elChildrenRow.append(elChildCell = createElem('div', 'cell'));
                if(b == 0){
                    elChildCell.before(createElem('div', 'str-top', false, arLetter[i - 1]));
                    elChildCell.innerHTML = '<div>' + arFigureBlack[i - 1] + '</div>';
                }
                if(b == 1){
                    elChildCell.innerHTML = '<div>' + arFigureBlack[8] + '</div>';
                }
                if(b == 6){
                    elChildCell.innerHTML = '<div>' + arFigureWhite[8] + '</div>';
                }
                if(b == 7){
                    elChildCell.after(createElem('div', 'str-bottom', false, arLetter[i - 1]));
                    elChildCell.innerHTML = '<div>' + arFigureWhite[i - 1] + '</div>';
                }
            }
        }
    }
}

