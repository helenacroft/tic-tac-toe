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

    getWinner() {

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
