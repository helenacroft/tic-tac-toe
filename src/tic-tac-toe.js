class TicTacToe {
    constructor() {
        this.currentPlayer ='x'; 
        this.matrix = [ [null,null,null],  
                        [null,null,null],
                        [null,null,null] ];    
        this.emptyFields = 9;
    }

    getCurrentPlayerSymbol() {

    }

    nextTurn(rowIndex, columnIndex) {

    }

    isFinished() {

    }
    checkRowsAndColumns() {
        for(var i = 0; i < 3; i++) {            
            if(this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][1] == this.matrix[i][2]) {
                return this.matrix[i][0];                
            }  
            if(this.matrix[0][i] == this.matrix[1][i] && this.matrix[1][i] == this.matrix[2][i]) {                 
                return this.matrix[0][i];
            }          
        }
        return null;
    }
    
    checkDiagonals() {        
        if(this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1]== this.matrix[2][2]) {
             return this.matrix[0][0];
         }
             
        if(this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0]) {
             return this.matrix[0][2];             
        }  
        return null;
    }

    getWinner() {
        var winner = this.checkRowsAndColumns() || this.checkDiagonals(); 
        return winner;  
    }

    noMoreTurns() {
        return this.emptyFields ? false : true;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] ? this.matrix[rowIndex][colIndex] : null;

    }
}

module.exports = TicTacToe;
