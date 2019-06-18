class Board{
    constructor(radius, ctx){
        this.radius = radius;
        this.ctx = ctx
        var board = [new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6)];
        var colorDict = {
            //blue
            0:"#6A99D4",
            //red
            1:"#F39D9A",
            //green
            2:"#CFF3B8",
            //yellow
            3:"#FFC633"
        }
        var ceil = [11, 11, 11, 11, 11, 11];
    }

    addToBoard(color, position){
         
    }

    getCeil(co){
        return ceil[(co - radius)/2*radius];
    }

    drawBallBoard(i, j, color) {
        ctx.beginPath();
        ctx.arc(i, j, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = colorDict[color];
        ctx.fill();
        ctx.closePath();
    }

    getCo(i, j){
        let diameter = 2*radius;
        return [(i*diameter) + radius, (j*diameter) + radius];
    }

    drawBoard(){
        for(i = 0; i < board.length; i++){
            for (j = 0; j< board[0].length; j++){
                let color = board[i][j];
                if (color != null){
                    let co = getCo(i ,j);
                    // console.log(co[0], co[1]);
                    drawBallBoard(co[1], co[0], color);
                }
            }
        }
    }
    
}