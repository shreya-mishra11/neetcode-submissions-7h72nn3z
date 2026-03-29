class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    // loop the board and get the number and index 
    isValidSudoku(board) {
        let outputArr = []
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board.length;j++){
                 if (board[i][j] === ".") continue;
                                // if (board[i][j] === ".") continue; // Skip empty cells

                if(this.alreadyPresentInRow(board[i][j], i, j,board)) return false;       
                if(this.alreadyPresentInColumn(board[i][j],j,i,board)) return false;
                if(this.alreadyPresentIn3of3(board[i][j],i,j,board)) return false;
         
            }
        }
        return true
    }

    alreadyPresentInRow(ele,rowIdx, currIdx,board){
        for(let i=0;i<board.length;i++){
            if(ele === board[rowIdx][i] && i !== currIdx){
                return true;
            }
        }
        return false

    }
    alreadyPresentInColumn(ele,colIdx,currIdx,board){
      for(let i=0;i<board.length;i++){
            if(ele === board[i][colIdx] && i !== currIdx && ele !=="."){
                return true;
            }
        }
        return false
    }
    alreadyPresentIn3of3(ele,rowIdx,currIdx,board){
        let boxRow = Math.floor(rowIdx/3)*3;
        let boxCol = Math.floor(currIdx/3)*3;
        for(let i=boxRow; i<boxRow+3;i++){
            for(let j=boxCol ; j< boxCol+3;j++){
                if (i === rowIdx && j === currIdx) continue; // skip current cell
                if (board[i][j] === ele) return true;
            }
        }
        return false

        
    }
}

