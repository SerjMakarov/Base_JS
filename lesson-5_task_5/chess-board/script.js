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
                }

                if(b == 7){
                    elChildCell.after(createElem('div', 'str-bottom', false, arLetter[i - 1]));
                }
            }
        }
    }
}

